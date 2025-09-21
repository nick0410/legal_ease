class CustomError(Exception):
    """Base class for custom exceptions in the application."""
    pass

class DocumentUploadError(CustomError):
    """Exception raised for errors during document upload."""
    def __init__(self, message="Error occurred while uploading the document."):
        self.message = message
        super().__init__(self.message)

class DocumentAnalysisError(CustomError):
    """Exception raised for errors during document analysis."""
    def __init__(self, message="Error occurred while analyzing the document."):
        self.message = message
        super().__init__(self.message)

class ChatError(CustomError):
    """Exception raised for errors during chat interactions."""
    def __init__(self, message="Error occurred while processing the chat request."):
        self.message = message
        super().__init__(self.message)

class StorageError(CustomError):
    """Exception raised for errors related to storage operations."""
    def __init__(self, message="Error occurred while accessing storage."):
        self.message = message
        super().__init__(self.message)

class FirestoreError(CustomError):
    """Exception raised for errors related to Firestore operations."""
    def __init__(self, message="Error occurred while accessing Firestore."):
        self.message = message
        super().__init__(self.message)