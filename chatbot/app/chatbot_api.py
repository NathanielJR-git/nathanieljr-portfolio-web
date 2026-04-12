from app.query_rag_prompt import query_rag_prompt
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Instantaite Fast API object
app = FastAPI(
    title="Virtual Nathaniel AI API",
    description="Backend API for Nathaniel's Virtual Chatbot",
    version="1.0.0"
)

# Setup middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # TO-DO: update with frontend domain, don't forget!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model for chat request
class ChatRequest(BaseModel):
    message: str
    
# Chatbot main endpoint for query
@app.post("/chatbot")
async def chatbot_endpoint(request: ChatRequest):
    """
    Main chatbot endpoint to send chat request via POST method,
    and receive chatbot's response based off the RAG pipeline

    Args:
        request (ChatRequest): _description_

    Raises:
        HTTPException: _description_

    Returns:
        str: Nathaniel's virtual chatbot response to chat request's message
    """

    try:
        # Process rag prompt query
        response = query_rag_prompt(request.message)
        
        # Return response
        return {
            "response": response
        }
        
    except Exception as e:
        # Raise server exception
        raise HTTPException(status_code=500, detail=str(e))