import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-saffron text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Legal AI Assistant. All rights reserved.
                </p>
                <p className="text-xs">
                    Designed with care, inspired by the colors of India.
                </p>
            </div>
        </footer>
    );
};

export default Footer;