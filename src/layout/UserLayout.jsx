import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartModal from '../components/CartModal';

const UserLayout = () => {
    return (
        <div className="min-h-screen bg-bg flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="bg-dark text-white py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-2xl font-bold mb-4">🍔 SobitCANTEEN</p>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                        The freshest canteen food delivered right to your table. Quick, tasty, and satisfying.
                    </p>
                    <div className="border-t border-white/10 pt-8 text-sm text-gray-500">
                        &copy; 2026 SobitCanteen. All rights reserved.
                    </div>
                </div>
            </footer>
            <CartModal />
        </div>
    );
};

export default UserLayout;
