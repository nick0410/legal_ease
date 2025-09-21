#!/bin/bash

# This script automates the deployment of the frontend application to Vercel or Google Cloud Hosting.

# Set the project directory
PROJECT_DIR="../frontend"

# Navigate to the frontend directory
cd $PROJECT_DIR || exit

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

# Alternatively, if deploying to Google Cloud Hosting, uncomment the following lines:
# echo "Deploying to Google Cloud Hosting..."
# gcloud app deploy

echo "Frontend deployment completed successfully."