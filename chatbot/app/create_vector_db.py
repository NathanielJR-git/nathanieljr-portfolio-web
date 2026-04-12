from app.configuration import config
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter


def create_vector_db():
    """
    Full vector database (Chroma DB) creation:
        1. Load raw .md documents
        2. Split documents' content into chunks
        3. Embed chunks using Hugging Face Embedding model
        4. Create and load into Chroma DB
    """
    
    # Load all retrieval documents from data directory
    loader = DirectoryLoader(
        config.DATA_PATH,
        glob="*.md",
        loader_cls=TextLoader,
        loader_kwargs={"encoding": "utf-8"}
    )
    
    try:
        documents = loader.load()
        print(f"Loaded {len(documents)} documents from {config.DATA_PATH}")
    except Exception as e:
        print(f"Error loading documents: {e}")
        raise
    
    # Breakdown documents into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=config.CHUNK_SIZE,
        chunk_overlap=config.CHUNK_OVERLAP,
        add_start_index=True
    )
    chunks = text_splitter.split_documents(documents)
    
    # Embed chunks using Hugging Face Embedding model
    embedding_model = HuggingFaceEmbeddings(
        model_name=config.EMBEDDING_MODEL_NAME
    )
    
    # Create ChromaDB and save embeddings
    db = Chroma.from_documents(
        chunks,
        embedding_model,
        persist_directory=config.CHROMA_PATH
    )
    print(f"Vector database created and saved to {config.CHROMA_PATH}")
    

# Execute create vector db
if __name__ == "__main__":
    create_vector_db()