import React from 'react';
import { FaEye, FaCheckCircle, FaClock } from 'react-icons/fa';

const AdminOrders = () => {
    const dummyOrders = [
        { id: 'ORD-7742', customer: 'John Doe', items: 'Burger, Fries', total: 200, status: 'Completed', time: '2 mins ago' },
        { id: 'ORD-7743', customer: 'Sarah Smith', items: 'Coffee, Muffin', total: 105, status: 'Pending', time: '5 mins ago' },
        { id: 'ORD-7744', customer: 'Mike Johnson', items: 'Pizza, Soda', total: 320, status: 'Completed', time: '12 mins ago' },
        { id: 'ORD-7745', customer: 'Emma Wilson', items: 'Sandwich', total: 150, status: 'Pending', time: '15 mins ago' },
        { id: 'ORD-7746', customer: 'Robert Brown', items: 'Pasta, Bread', total: 270, status: 'Completed', time: '1 hour ago' },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-dark">Order History</h1>
                <p className="text-gray-500 font-medium">Manage and track all canteen orders</p>
            </div>

            <div className="grid gap-4">
                {dummyOrders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 bg-bg rounded-2xl flex items-center justify-center text-xl font-black text-accent border border-primary/20">
                                {order.id.split('-')[1].slice(-2)}
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-bold text-dark">{order.id}</h3>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <p className="text-sm font-medium text-gray-500 mt-1">{order.items}</p>
                                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                                    <span className="flex items-center"><FaClock className="mr-1" /> {order.time}</span>
                                    <span className="font-bold text-dark">₹{order.total}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-gray-400 hover:text-dark border border-gray-100 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                                <FaEye />
                                <span>Details</span>
                            </button>
                            {order.status === 'Pending' && (
                                <button className="flex-1 md:flex-none px-4 py-2 text-sm font-bold text-white bg-green-500 rounded-xl hover:bg-green-600 shadow-lg shadow-green-200 transition-all flex items-center justify-center space-x-2">
                                    <FaCheckCircle />
                                    <span>Complete</span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminOrders;
