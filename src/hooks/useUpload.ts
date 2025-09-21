import { useState } from 'react';
import { apiClient } from '../lib/apiClient';

const useUpload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const uploadFile = async (file: File) => {
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await apiClient.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setUploadedFile(response.data);
        } catch (err) {
            setError(err.response?.data?.message || 'File upload failed');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        uploadFile,
        isLoading,
        error,
        uploadedFile,
    };
};

export default useUpload;