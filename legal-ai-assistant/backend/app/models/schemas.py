from pydantic import BaseModel
from typing import List, Optional

class DocumentUploadRequest(BaseModel):
    file: str  # Base64 encoded file content

class DocumentUploadResponse(BaseModel):
    document_id: str
    message: str

class DocumentAnalysisRequest(BaseModel):
    document_id: str

class DocumentAnalysisResponse(BaseModel):
    summary: str
    clause_breakdown: List[dict]  # List of clauses with details
    risks: List[str]  # List of identified risks
    recommendations: List[str]  # List of recommendations

class ChatRequest(BaseModel):
    user_query: str
    document_id: str

class ChatResponse(BaseModel):
    answer: str
    clause_reference: Optional[str]  # Reference to the clause if applicable

class ErrorResponse(BaseModel):
    detail: str