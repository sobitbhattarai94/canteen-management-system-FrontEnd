import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4 hover:shadow-md transition-shadow">
            <div className={`p-4 rounded-xl text-2xl ${color}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{title}</p>
                <p className="text-2xl font-bold text-dark">{value}</p>
            </div>
        </div>
    );
};

export default StatsCard;
