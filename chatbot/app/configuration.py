# All configuration including model names, RAG parameters and path

class Configuration:
    # Model
    EMBEDDING_MODEL_NAME: str = "all-MiniLM-L6-v2"
    
    # RAG Parameters
    CHUNK_SIZE: int         = 600
    CHUNK_OVERLAP: int      = 100
    VECTOR_SEARCH_K: int    = 3
    
    # Path
    DATA_PATH: str       = "data"
    CHROMA_PATH: str     = "chroma_db"
    
    
config = Configuration() 