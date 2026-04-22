from app.query_rag_prompt import query_rag_prompt
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded


# Instantiate Rate Limiter (limits based on user IP address)
limiter = Limiter(key_func=get_remote_address)


# Instantaite Fast API object
app = FastAPI(
    title="Virtual Nathaniel AI API",
    description="Backend API for Nathaniel's Virtual Chatbot",
    version="1.0.0",
    docs_url=None,
    redoc_url=None
)


# Setup rate limiter inside app
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


# Setup middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://nathanieljr.dev",
        "https://www.nathanieljr.dev"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Data model for chat request
class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=300)
    
    @field_validator("message")
    @classmethod
    def validate_message(cls, v: str) -> str:
        # Strip string spaces and ensure it's not totally empty afterward
        v = v.strip()
        if not v:
            raise ValueError("Message cannot be empty or just whitespace.")
        return v


# Chatbot main endpoint for query
@app.post("/chatbot")
@limiter.limit("10/minute") # Strict Rate Limit: 10 queries per minute per IP
async def chatbot_endpoint(request: Request, payload: ChatRequest):
    """
    Main chatbot endpoint to send chat request via POST method,
    and receive chatbot's response based off the RAG pipeline

    Args:
        request (Request): Access API request details for slowAPI metadata injection
        payload (ChatRequest): Passed chat_request via HTTP POST

    Raises:
        HTTPException: _description_

    Returns:
        dict: Nathaniel's virtual chatbot response to chat request's message
    """

    try:
        # Process rag prompt query using the stripped payload string
        response = query_rag_prompt(payload.message)
        
        # Return response
        return {
            "response": response
        }
        
    except Exception as e:
        # Raise server exception
        raise HTTPException(status_code=500, detail=str(e))