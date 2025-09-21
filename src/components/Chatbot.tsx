import React, { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { motion } from 'framer-motion';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const { sendMessage } = useChat();

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);

        const response = await sendMessage(input);
        const botMessage = { text: response, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);

        setInput('');
    };

    return (
        <div className="fixed bottom-0 right-0 m-4 w-80 bg-white shadow-lg rounded-lg">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-green-800">Legal AI Assistant</h2>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`my-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-saffron-500 text-white self-end' : 'bg-gray-200 text-black'}`}
                    >
                        {msg.text}
                    </motion.div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-200 flex">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow p-2 border rounded-lg"
                    placeholder="Ask a question..."
                />
                <button onClick={handleSend} className="ml-2 bg-green-600 text-white p-2 rounded-lg">
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;