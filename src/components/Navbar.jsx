import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { totalItems, setIsCartOpen } = useCart();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Admin', path: '/admin' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-primary shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-dark flex items-center">
                            <span className="mr-2">🍔</span> Sobit<span className="text-accent">CANTEEN</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors hover:text-accent ${isActive(link.path) ? 'text-dark border-b-2 border-accent' : 'text-dark/80'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Cart & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-dark hover:text-accent transition-colors"
                        >
                            <FaShoppingCart size={24} />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-primary">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-dark"
                        >
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-primary border-t border-dark/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md font-medium ${isActive(link.path) ? 'bg-primary-dark text-dark' : 'text-dark/80 hover:bg-primary-dark/50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
