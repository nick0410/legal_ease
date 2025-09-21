# Google Cloud Storage Bucket Setup Instructions

## Overview
This document provides step-by-step instructions for setting up Google Cloud Storage (GCS) buckets for the Legal AI Assistant project. GCS will be used to store uploaded legal documents and extracted text.

## Prerequisites
- A Google Cloud Platform (GCP) account
- Google Cloud SDK installed and configured on your local machine
- Access to the GCP project where the Legal AI Assistant is deployed

## Steps to Set Up Google Cloud Storage Buckets

### 1. Create a GCS Bucket
1. Open the Google Cloud Console: [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to the **Storage** section by selecting **Storage** from the left sidebar.
3. Click on the **Create Bucket** button.
4. Enter a unique name for your bucket. The name must be globally unique across all GCS buckets.
5. Choose a **Location Type** (e.g., Multi-region, Dual-region, or Region) based on your requirements.
6. Select a **Default Storage Class** (e.g., Standard, Nearline, Coldline, Archive) based on your access frequency needs.
7. Click **Create** to create the bucket.

### 2. Set Bucket Permissions
1. After creating the bucket, click on the bucket name to open its details.
2. Go to the **Permissions** tab.
3. Click on **Add** to grant permissions to the service account used by your application.
4. Enter the service account email (you can find this in the IAM section).
5. Assign the role **Storage Object Admin** to allow the service account to upload and manage objects in the bucket.
6. Click **Save** to apply the changes.

### 3. Configure Bucket Settings
1. In the bucket details, navigate to the **Settings** tab.
2. Enable **Object Versioning** if you want to keep multiple versions of an object.
3. Set up **Lifecycle Rules** if you want to automate the deletion or transition of objects based on their age.

### 4. Note the Bucket Name
Make sure to note down the bucket name as it will be required in your application configuration.

### 5. Update Application Configuration
- Update the `.env` file in your backend application with the following variable:
  ```
  GCS_BUCKET_NAME=your-bucket-name
  ```

## Conclusion
You have successfully set up a Google Cloud Storage bucket for the Legal AI Assistant project. This bucket will be used to store uploaded legal documents and extracted text, enabling efficient document management and retrieval.