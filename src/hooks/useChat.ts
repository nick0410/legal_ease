import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import apiClient from '../lib/apiClient';

const useChat = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (userMessage) => {
        const response = await apiClient.post('/chat', { message: userMessage });
        return response.data;
    };

    const { mutate: sendChatMessage } = useMutation(sendMessage, {
        onSuccess: (data) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: data.answer, type: 'bot' },
                { text: data.clauseReference, type: 'reference' },
            ]);
        },
        onError: (error) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'Error: Unable to fetch response.', type: 'error' },
            ]);
        },
    });

    const handleUserMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, type: 'user' },
        ]);
        sendChatMessage(message);
    };

    return {
        messages,
        handleUserMessage,
    };
};

export default useChat;