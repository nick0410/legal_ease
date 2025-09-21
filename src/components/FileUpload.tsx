import React, { useState } from 'react';
import { useUpload } from '../hooks/useUpload';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const { uploadFile, isLoading, error } = useUpload();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleUpload = async () => {
        if (file) {
            await uploadFile(file);
            setFile(null); // Reset file input after upload
        }
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-4">Upload Legal Document</h2>
            <input
                type="file"
                accept=".pdf, .txt"
                onChange={handleFileChange}
                className="mb-4 border border-gray-300 rounded p-2"
            />
            <button
                onClick={handleUpload}
                disabled={isLoading || !file}
                className={`px-4 py-2 text-white rounded ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
            >
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default FileUpload;