import { useState } from 'react';
import { apiClient } from '../lib/apiClient';

const useAnalyze = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    const analyzeDocument = async (documentId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiClient.post(`/analyze`, { documentId });
            setResult(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, result, analyzeDocument };
};

export default useAnalyze;