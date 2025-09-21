from google.cloud import documentai_v1 as documentai
from google.cloud import storage
import os

class DocumentAIService:
    def __init__(self):
        self.project_id = os.getenv("GCP_PROJECT_ID")
        self.location = os.getenv("DOCUMENT_AI_LOCATION")  # Format: 'us' or 'eu'
        self.processor_id = os.getenv("DOCUMENT_AI_PROCESSOR_ID")
        self.client = documentai.DocumentUnderstandingServiceClient()

    def process_document(self, gcs_input_uri):
        # Configure the process request
        gcs_source = documentai.types.GcsSource(uri=gcs_input_uri)
        input_config = documentai.types.InputConfig(
            gcs_source=gcs_source,
            mime_type='application/pdf'  # Supported mime types: application/pdf, image/tiff
        )

        request = documentai.types.ProcessRequest(
            name=f'projects/{self.project_id}/locations/{self.location}/processors/{self.processor_id}',
            raw_document=documentai.types.RawDocument(content=input_config)
        )

        # Process the document
        result = self.client.process_document(request=request)
        return result.document

    def extract_text(self, document):
        # Extract text from the processed document
        text = ''
        for page in document.pages:
            for paragraph in page.paragraphs:
                text += ''.join([segment.text for segment in paragraph.elements])
                text += '\n'
        return text.strip()