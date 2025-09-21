# Legal AI Assistant Backend

This repository contains the backend for the Legal AI Assistant, a full-stack application designed to simplify legal documents into clear, accessible guidance. The backend is built using FastAPI and integrates with Google Cloud services for document processing and AI analysis.

## Features

- **Document Upload**: Users can upload PDF and text documents, which are processed using Google Document AI for text extraction.
- **Text Analysis**: Extracted text is analyzed using Vertex AI to generate structured summaries, clause breakdowns, and risk assessments.
- **Interactive Chatbot**: Users can interact with a chatbot to ask questions about the documents, receiving clear and concise answers based on the analysis.
- **User Authentication**: Secure user login via Google Identity Platform.

## Tech Stack

- **Backend Framework**: FastAPI (Python 3.11)
- **AI Processing**: Google Cloud Vertex AI (Gemini/Gemma models)
- **OCR/Text Extraction**: Google Document AI
- **Storage**: Google Cloud Storage
- **Database**: Firestore
- **Authentication**: Google Identity Platform

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/legal-ai-assistant.git
   cd legal-ai-assistant/backend
   ```

2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Environment Variables**:
   - Copy `.env.example` to `.env` and fill in the required values for your Google Cloud credentials and API keys.

5. **Run the Application**:
   ```bash
   uvicorn app.main:app --reload
   ```

6. **Access the API**:
   - The API will be available at `http://localhost:8000`.

## Deployment

This backend is ready for deployment on Google Cloud Run. Use the provided `cloudrun.yaml` for configuration settings.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.