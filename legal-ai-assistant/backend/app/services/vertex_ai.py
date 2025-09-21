from google.cloud import aiplatform
from google.oauth2 import service_account
import os

# Initialize Vertex AI with the project and location
def initialize_vertex_ai():
    credentials = service_account.Credentials.from_service_account_file(
        os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    )
    aiplatform.init(
        project=os.getenv("GCP_PROJECT_ID"),
        location=os.getenv("GCP_LOCATION"),
        credentials=credentials,
    )

# Function to analyze text using Vertex AI
def analyze_text(text):
    try:
        # Call the Vertex AI model for analysis
        response = aiplatform.gapic.PredictionServiceClient().predict(
            endpoint=os.getenv("VERTEX_AI_ENDPOINT"),
            instances=[{"content": text}],
            parameters={"temperature": 0.5},
        )
        
        # Process the response to extract structured output
        structured_output = {
            "summary": response.predictions[0].get("summary"),
            "clauses": response.predictions[0].get("clauses"),
            "risks": response.predictions[0].get("risks"),
            "recommendations": response.predictions[0].get("recommendations"),
        }
        
        return structured_output
    except Exception as e:
        raise RuntimeError(f"Error analyzing text: {str(e)}")