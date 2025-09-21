from google.cloud import firestore

class FirestoreDB:
    def __init__(self):
        self.db = firestore.Client()

    def store_summary(self, document_id, summary_data):
        """
        Store the structured summary of a document in Firestore.
        
        Args:
            document_id (str): The ID of the document.
            summary_data (dict): The structured summary data to store.
        """
        self.db.collection('document_summaries').document(document_id).set(summary_data)

    def get_summary(self, document_id):
        """
        Retrieve the structured summary of a document from Firestore.
        
        Args:
            document_id (str): The ID of the document to retrieve.
        
        Returns:
            dict: The structured summary data.
        """
        doc_ref = self.db.collection('document_summaries').document(document_id)
        doc = doc_ref.get()
        if doc.exists:
            return doc.to_dict()
        else:
            return None

    def store_user_session(self, user_id, session_data):
        """
        Store user session data in Firestore.
        
        Args:
            user_id (str): The ID of the user.
            session_data (dict): The session data to store.
        """
        self.db.collection('user_sessions').document(user_id).set(session_data)

    def get_user_session(self, user_id):
        """
        Retrieve user session data from Firestore.
        
        Args:
            user_id (str): The ID of the user to retrieve.
        
        Returns:
            dict: The user session data.
        """
        doc_ref = self.db.collection('user_sessions').document(user_id)
        doc = doc_ref.get()
        if doc.exists:
            return doc.to_dict()
        else:
            return None