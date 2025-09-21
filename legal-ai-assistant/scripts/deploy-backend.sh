#!/bin/bash

# This script automates the deployment of the backend application to Google Cloud Run.

# Exit immediately if a command exits with a non-zero status
set -e

# Define variables
PROJECT_ID="your-gcp-project-id"  # Replace with your GCP project ID
SERVICE_NAME="legal-ai-backend"     # Name of the Cloud Run service
REGION="us-central1"                 # GCP region for deployment
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"  # Container image name

# Build the Docker image
echo "Building the Docker image..."
docker build -t $IMAGE_NAME ./backend

# Push the Docker image to Google Container Registry
echo "Pushing the Docker image to Google Container Registry..."
docker push $IMAGE_NAME

# Deploy the Docker image to Google Cloud Run
echo "Deploying the backend application to Google Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --project $PROJECT_ID

echo "Deployment completed successfully!"