import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-4 text-center">
            <div className="text-[120px] font-black text-primary drop-shadow-xl animate-bounce">404</div>
            <h1 className="text-4xl font-bold text-dark mt-4">Oops! Page not found</h1>
            <p className="text-gray-500 mt-4 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="mt-8 bg-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 hover:bg-gray-800 transition-all shadow-xl active:scale-95"
            >
                <FaHome />
                <span>Back to Safety</span>
            </Link>
        </div>
    );
};

export default NotFound;
