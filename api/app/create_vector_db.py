import os
from api.app.configuration import config
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_text_splitter import RecursiveCharacterTextSplitter


def create_vector_db():
    """
    Full vector database (Chroma DB) creation:
        1. Load raw .md documents
        2. Split documents' content into chunks
        3. Embed chunks using Hugging Face Embedding model
        4. Create and load into Chroma DB
    """
    
    # Load all retrieval documents inside api/data
    loader = DirectoryLoader(
        config.DATA_PATH,
        glob="*.md",
        loader_cls=UnstructuredMarkdownLoader
    )
    documents = loader.load()
    
    # Breakdown documents into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=config.CHUNK_SIZE,
        chunk_overlap=config.CHUNK_OVERLAP,
        add_start_index=True
    )
    chunks = text_splitter.split_documents(documents)
    
    # Embed chunks using Hugging Face Emebedding model
    embedding_model = HuggingFaceEmbeddings(
        model_name=config.EMBEDDING_MODEL_NAME
    )
    
    # Create ChromaDB and save embeddings
    db = Chroma.from_documents(
        chunks,
        embedding_model,
        persist_directory=config.CHROMA_PATH
    )
    

# Execute create vector db
if __name__ == "__main__":
    create_vector_db()