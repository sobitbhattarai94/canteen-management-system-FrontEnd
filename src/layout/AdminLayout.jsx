import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../components/SidebarAdmin';

const AdminLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <SidebarAdmin isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            <main
                className={`transition-all duration-300 min-h-screen ${isCollapsed ? 'pl-20' : 'pl-64'
                    }`}
            >
                <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 sticky top-0 z-40">
                    <h2 className="text-xl font-bold text-dark">Management Console</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-500">Welcome, Admin</span>
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-dark shadow-sm">
                            A
                        </div>
                    </div>
                </header>

                <div className="p-8 pb-20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
