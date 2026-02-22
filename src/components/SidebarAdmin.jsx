import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaThLarge,
    FaUtensils,
    FaPlusCircle,
    FaClipboardList,
    FaSignOutAlt,
    FaChevronLeft
} from 'react-icons/fa';

const SidebarAdmin = ({ isCollapsed, setIsCollapsed }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { name: 'Dashboard', path: '/admin', icon: <FaThLarge /> },
        { name: 'Manage Products', path: '/admin/products', icon: <FaUtensils /> },
        { name: 'Add Product', path: '/admin/add-product', icon: <FaPlusCircle /> },
        { name: 'Orders', path: '/admin/orders', icon: <FaClipboardList /> },
    ];

    return (
        <div
            className={`bg-dark text-white h-screen fixed left-0 top-0 transition-all duration-300 z-50 ${isCollapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Brand */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
                {!isCollapsed && <span className="font-bold text-xl text-primary">ADMIN PANEL</span>}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-gray-400 hover:text-primary transition-colors mx-auto md:mx-0"
                >
                    <FaChevronLeft className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {/* Nav Links */}
            <nav className="mt-8 px-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center p-3 rounded-xl transition-all ${isActive(item.path)
                            ? 'bg-primary text-dark font-bold'
                            : 'hover:bg-white/10 text-gray-400 hover:text-white'
                            }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        {!isCollapsed && <span className="ml-4 truncate">{item.name}</span>}
                    </Link>
                ))}
            </nav>

            {/* Logout */}
            <div className="absolute bottom-8 w-full px-4">
                <Link
                    to="/"
                    className={`flex items-center p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all ${isCollapsed ? 'justify-center' : ''
                        }`}
                >
                    <span className="text-xl"><FaSignOutAlt /></span>
                    {!isCollapsed && <span className="ml-4">Exit Admin</span>}
                </Link>
            </div>
        </div>
    );
};

export default SidebarAdmin;
