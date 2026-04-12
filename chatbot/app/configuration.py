# All configuration including model names, RAG parameters and path

class Configuration:
    # Model
    EMBEDDING_MODEL_NAME: str = "paraphrase-multilingual-MiniLM-L12-v2"
    LLM_MODEL_NAME: str       = "llama-3.1-8b-instant"
    
    # RAG Parameters
    CHUNK_SIZE: int         = 600
    CHUNK_OVERLAP: int      = 100
    VECTOR_SEARCH_K: int    = 3
    SIMILARITY_THRESHOLD    = 0.5
    
    # Path
    DATA_PATH: str       = "data"
    CHROMA_PATH: str     = "chroma_db"
    
    
config = Configuration() 