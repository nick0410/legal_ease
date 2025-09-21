from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Dict
from app.services.vertex_ai import analyze_text
from app.services.firestore_db import save_analysis_results
from app.utils.errors import handle_error

router = APIRouter()

class AnalyzeRequest(BaseModel):
    text: str

class AnalysisResult(BaseModel):
    summary: str
    clause_breakdown: List[Dict[str, str]]
    risks: List[str]
    recommendations: List[str]

@router.post("/analyze", response_model=AnalysisResult)
async def analyze_document(request: AnalyzeRequest):
    try:
        # Analyze the text using Vertex AI
        analysis_results = await analyze_text(request.text)

        # Save the analysis results to Firestore
        await save_analysis_results(analysis_results)

        return analysis_results
    except Exception as e:
        handle_error(e)
        raise HTTPException(status_code=500, detail="An error occurred during analysis")