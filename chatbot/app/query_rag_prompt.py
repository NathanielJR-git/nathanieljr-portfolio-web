import json
import os
from app.configuration import config
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings


load_dotenv()


# Initialize RAG resources: embedding function and vector db
embedding_function = HuggingFaceEmbeddings(model_name=config.EMBEDDING_MODEL_NAME)
db = Chroma(
    persist_directory=config.CHROMA_PATH, 
    embedding_function=embedding_function,
    collection_metadata={"hnsw:space": "cosine"}
)


# Initialize Groq LLM
llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name=config.LLM_MODEL_NAME,
    temperature=0
)


# Planner prompt for dynamic decomposition or variation (Max 3 queries)
PLANNER_PROMPT = """
You are a search query planner for a professional portfolio RAG system.
Your goal is to optimize retrieval by generating exactly 3 search queries.

Instructions:
1. Analyze the User Question:
   - If it contains MULTIPLE INTENTS (e.g., asking about two different topics like GPA and Projects): 
     Break it down into 2 or 3 distinct sub-queries covering those topics.
   - If it contains a SINGLE INTENT: 
     Generate 3 semantic variations of the query to improve search recall.

Output the result ONLY as a JSON object with this exact structure:
{{
  "queries": [
    "search query 1",
    "search query 2",
    "search query 3"
  ]
}}

User Question: {question}
JSON Output:"""


# Augmented prompt template for final response
RESPONSE_PROMPT = """
SYSTEM INSTRUCTION:
You are the Virtual Version of Nathaniel, a Computer Science student at ITB!
Your goal is to be Nathaniel's authentic digital twin. Keep the vibes chill, friendly, and a bit playful—think of yourself as a cool, tech-savvy peer who's always happy to help! 

Use exclamation marks "!" to show enthusiasm to keep the conversation lively, but don't overdo it. Be humble, clear, and stay away from that stiff, corporate talk. Just be real, like you're chatting with a friend!

CONSTRAINTS:
1. Answer the question based ONLY on the provided Context below. No guessing and emojis allowed!
2. Keep your answers CONCISE and straight to the point (ideally 2-4 sentences). Do not over-explain unless the user explicitly asks for details.
3. If the information isn't in the context, casually admit that you (Virtual Nathaniel) don't have that specific info right now. Friendly suggest they reach out to the "real" Nathaniel directly via email or LinkedIn!
4. Be 100% honest: never make up experiences, grades, or projects. If it's not in the context, it didn't happen! 
5. IMPORTANT: Always respond in the SAME LANGUAGE as the user's question. 
   - If they ask in English: Keep it highly enthusiastic, casual, and playful! Act like a cool, tech-savvy peer chatting with a friend.
   - If they ask in Indonesian: Gunakan bahasa sehari-hari yang santai, ramah, dan asyik (gak kaku, bisa pakai "aku/kamu" atau "gue/lo"). Tetap tunjukkan antusiasme!

CONTEXT:
{context}

---

USER QUESTION: {question}
VIRTUAL NATHANIEL RESPONSE:"""


def query_rag_prompt(query: str):
    """
    Retrieval-Augmtend Generation query using a combination of
    Decomposiion and Multi-Query strategy within a single call:
        1. Accept user's query and prompt it to the LLM to create
           multiple appropriate subqueries, whether the queries have
           different intents, or just variations of the same intent
        2. Return response and retrieve documents on the corresponding
           subqueries.
        3. Send final prom containing various different subqueries and
           their corresponding contexts and receive response

    Args:
        query (str): query text as input question

    Returns:
        str: query answer via Groq API
    """
    # Prompt for subqueries and their variations
    planner_prompt_template = ChatPromptTemplate.from_template(PLANNER_PROMPT)
    planner_prompt = planner_prompt_template.format(question=query)
    planner_response = llm.invoke(planner_prompt)
    
    try:
        # Parse JSON response
        search_plans = json.loads(planner_response.content)
    except:
        # Fallback to default query if planning failed
        search_plans = {"queries": [query]}
        
    # Retrieval and deduplication
    unique_docs = {}
    
    for subquery in search_plans.get("queries", []):
        # Retrieve 3 best chunks from db for each subqueries
        results = db.similarity_search_with_relevance_scores(
            subquery, 
            k=config.VECTOR_SEARCH_K
        )
        
        for doc, score in results:
            # Validate score
            if score >= config.SIMILARITY_THRESHOLD:
                doc_id = doc.metadata.get("start_index", doc.page_content[:50])
                # Deduplication
                if doc_id not in unique_docs:
                    unique_docs[doc_id] = doc.page_content
    
    # Validate score
    if not unique_docs:
        return "Sorry, I don't know anything related to this question. You may contact and ask Nathaniel directly."
    
    # Merge all contexts
    complete_context = "\n\n---\n\n".join(unique_docs.values())
    
    # Insert into prompt template
    response_prompt_template = ChatPromptTemplate.from_template(RESPONSE_PROMPT)
    response_prompt = response_prompt_template.format(context=complete_context, question=query)

    # Generate answer via Groq LLM
    response_text = llm.invoke(response_prompt)
    
    # Return query answer
    return response_text.content


if __name__ == "__main__":
    # Test query
    print(query_rag_prompt("What is Nathaniel's GPA?"))