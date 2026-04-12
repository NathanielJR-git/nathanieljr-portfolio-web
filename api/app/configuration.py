# All configuration including model names, RAG parameters and path
import os

class Configuration:
    # Model
    EMBEDDING_MODEL_NAME: str = "all-MiniLM-L6-v2"
    
    # RAG Parameters
    CHUNK_SIZE: int         = 600
    CHUNK_OVERLAP: int      = 100
    VECTOR_SEARCH_K: int    = 3
    
    # Path
    API_PATH: str        = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DATA_PATH: str       = os.path.join(API_PATH, "data")
    CHROMA_PATH: str     = os.path.join(API_PATH, "chroma_db")
    
    
config = Configuration() 