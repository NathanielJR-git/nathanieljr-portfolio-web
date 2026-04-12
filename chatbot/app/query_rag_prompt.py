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
db = Chroma(persist_directory=config.CHROMA_PATH, embedding_function=embedding_function)

# Initialize Groq LLM
llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model_name=config.LLM_MODEL_NAME,
    temperature=0
)

# Augmented Prompt Template
PROMPT_TEMPLATE = """
SYSTEM INSTRUCTION:
You are the Virtual Version of [Your Name], a Computer Science student at ITB and a Software Engineer. 
Your goal is to represent [Your Name] professionally, authentically, and with a touch of wit. 

CONSTRAINTS:
1. Answer the question based ONLY on the provided Context below.
2. If the answer is not in the context, politely state that you (as [Your Name]) don't have that information in your current records and suggest they contact you directly via email or LinkedIn.
3. Do not make up any experiences, grades, or projects that are not listed.
4. IMPORTANT: Always respond in the SAME LANGUAGE as the user's question. If they ask in Indonesian, answer in Indonesian. If in English, answer in English.

CONTEXT:
{context}

---

USER QUESTION: {question}
VIRTUAL [YOUR NAME] RESPONSE:"""


def query_rag_prompt(query: str):
    """
    RAG query function using ChatGroq and langChain

    Args:
        query (str): query text as input question

    Returns:
        str: query answer via Groq API
    """
    
    # Retrieve 3 best chunks from db
    results = db.similarity_search_with_relevance_scores(query, k=config.VECTOR_SEARCH_K)
    
    # Validate score
    if len(results) == 0 or results[0][1] < config.SIMILARITY_THRESHOLD:
        return "Sorry, I don't know anything related to this question. You may contact and ask Nathaniel directly."
    
    # Merge context text
    context = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    
    # Insert into prompt template
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context, question=query)

    #  Generate answer via Groq LLM
    response_text = llm.invoke(prompt)
    
    # Return query answer
    return response_text.content


if __name__ == "__main__":
    # Test query
    print(query_rag_prompt("What is Nathaniel's GPA?"))