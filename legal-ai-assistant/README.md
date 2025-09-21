# Legal AI Assistant

## Overview
The Legal AI Assistant is a full-stack application designed to simplify legal documents into clear, accessible guidance. It leverages Google Cloud's Vertex AI for natural language processing and Google Document AI for text extraction, providing users with structured summaries, clause breakdowns, and an interactive chatbot for queries.

## Features
- **Document Upload**: Users can upload PDF and text documents for analysis.
- **Text Extraction**: Utilizes Google Document AI to extract text from uploaded documents.
- **Document Analysis**: Processes extracted text with Vertex AI to generate summaries and recommendations.
- **Interactive Chatbot**: Users can ask questions and receive answers based on document analysis.
- **User Authentication**: Secure login via Google Identity Platform.

## Tech Stack
- **Backend**: FastAPI, Google Cloud Run, Google Document AI, Vertex AI, Firestore, Google Cloud Storage
- **Frontend**: React, Next.js, TailwindCSS, Framer Motion
- **Deployment**: Google Cloud Platform

## Project Structure
```
legal-ai-assistant
├── backend
│   ├── app
│   │   ├── main.py
│   │   ├── api
│   │   │   ├── upload.py
│   │   │   ├── analyze.py
│   │   │   └── chat.py
│   │   ├── core
│   │   │   ├── config.py
│   │   │   └── auth.py
│   │   ├── services
│   │   │   ├── vertex_ai.py
│   │   │   ├── document_ai.py
│   │   │   ├── storage.py
│   │   │   └── firestore_db.py
│   │   ├── models
│   │   │   └── schemas.py
│   │   └── utils
│   │       ├── logging.py
│   │       └── errors.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── cloudrun.yaml
│   ├── .env.example
│   └── README.md
├── frontend
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── src
│   │   ├── pages
│   │   │   ├── _app.tsx
│   │   │   ├── index.tsx
│   │   │   ├── dashboard.tsx
│   │   │   └── results
│   │   │       └── [id].tsx
│   │   ├── components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   ├── ClauseCard.tsx
│   │   │   ├── Chatbot.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── hooks
│   │   │   ├── useUpload.ts
│   │   │   ├── useAnalyze.ts
│   │   │   └── useChat.ts
│   │   ├── lib
│   │   │   ├── apiClient.ts
│   │   │   └── authClient.ts
│   │   ├── styles
│   │   │   └── globals.css
│   │   └── theme
│   │       └── indian-theme.ts
│   ├── public
│   │   └── (icons and favicon placeholders)
│   └── README.md
├── infra
│   ├── gcp
│   │   ├── iam-roles.yaml
│   │   ├── service-account.json.example
│   │   └── cloudbuild.yaml
│   ├── firestore.rules
│   └── storage-bucket-setup.md
├── scripts
│   ├── deploy-backend.sh
│   ├── deploy-frontend.sh
│   └── local-run.sh
├── .gitignore
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites
- Python 3.11
- Node.js
- Google Cloud account with access to Vertex AI and Document AI

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Set up environment variables in a `.env` file based on `.env.example`.
4. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Next.js application:
   ```
   npm run dev
   ```

## Deployment
- Follow the scripts in the `scripts` directory to deploy the backend and frontend to Google Cloud.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.