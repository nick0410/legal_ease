import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-saffron text-white transition duration-300 hover:bg-green"
            aria-label="Toggle theme"
        >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;