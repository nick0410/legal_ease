from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
from app.services.document_ai import extract_text
from app.services.storage import upload_file_to_gcs
from app.utils.logging import logger

router = APIRouter()

@router.post("/upload", response_model=dict)
async def upload_document(files: List[UploadFile] = File(...)):
    """
    Uploads documents and extracts text using Google Document AI.
    
    Args:
        files (List[UploadFile]): List of files to upload.

    Returns:
        dict: A response containing the status and uploaded file details.
    """
    try:
        uploaded_files_info = []
        for file in files:
            # Upload file to Google Cloud Storage
            gcs_path = await upload_file_to_gcs(file)
            # Extract text from the uploaded document
            extracted_text = await extract_text(gcs_path)
            uploaded_files_info.append({
                "filename": file.filename,
                "gcs_path": gcs_path,
                "extracted_text": extracted_text
            })
        
        return {"status": "success", "files": uploaded_files_info}
    
    except Exception as e:
        logger.error(f"Error uploading documents: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to upload documents")