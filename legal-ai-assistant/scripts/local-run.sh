#!/bin/bash

# This script sets up a local development environment for the Legal AI Assistant application.

# Navigate to the backend directory and start the FastAPI server
echo "Starting backend server..."
cd backend
# Ensure the virtual environment is activated and dependencies are installed
if [ -f "../backend/venv/bin/activate" ]; then
	source ../backend/venv/bin/activate
fi

pip install -r requirements.txt

uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &

# Navigate to the frontend directory and start the Next.js application
echo "Starting frontend server..."
cd ../frontend
npm install
npm run dev -- -p 3000

echo "Local development environment is running."
echo "Access the backend at http://localhost:8000 and the frontend at http://localhost:3000."