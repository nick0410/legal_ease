import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Application configuration settings."""
    
    # Google Cloud settings
    GOOGLE_CLOUD_PROJECT: str = os.getenv("GOOGLE_CLOUD_PROJECT")
    GOOGLE_APPLICATION_CREDENTIALS: str = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    
    # Vertex AI settings
    VERTEX_AI_ENDPOINT: str = os.getenv("VERTEX_AI_ENDPOINT")
    VERTEX_AI_API_KEY: str = os.getenv("VERTEX_AI_API_KEY")
    
    # Firestore settings
    FIRESTORE_DB_URL: str = os.getenv("FIRESTORE_DB_URL")
    
    # Other settings
    DEBUG: bool = os.getenv("DEBUG", "False").lower() in ("true", "1", "t")
    ALLOWED_ORIGINS: list = os.getenv("ALLOWED_ORIGINS", "").split(",") if os.getenv("ALLOWED_ORIGINS") else []

config = Config()