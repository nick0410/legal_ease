import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-saffron-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">
                    Legal AI Assistant
                </h1>
                <nav className="space-x-4">
                    <Link href="/" className="text-white hover:underline">
                        Home
                    </Link>
                    <Link href="/dashboard" className="text-white hover:underline">
                        Dashboard
                    </Link>
                    <Link href="/results" className="text-white hover:underline">
                        Results
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;