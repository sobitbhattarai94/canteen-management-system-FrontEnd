import React from 'react';
import { FaBoxOpen, FaClipboardList, FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';
import StatsCard from '../components/StatsCard';
import { foodData } from '../data/foodData';
import { categories } from '../data/categories';

const AdminDashboard = () => {
    // Dummy stats
    const stats = [
        { title: "Total Products", value: foodData.length, icon: <FaBoxOpen />, color: "bg-blue-100 text-blue-600" },
        { title: "Total Orders", value: "128", icon: <FaClipboardList />, color: "bg-yellow-100 text-yellow-600" },
        { title: "Revenue", value: "₹24,500", icon: <FaMoneyBillWave />, color: "bg-green-100 text-green-600" },
        { title: "Categories", value: categories.length - 1, icon: <FaLayerGroup />, color: "bg-purple-100 text-purple-600" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-dark">Dashboard Overview</h1>
                <p className="text-gray-500 font-medium">Quick summary of your canteen performance</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                    <StatsCard key={i} {...s} />
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Orders Preview */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-dark">Recent Orders</h3>
                        <button className="text-accent font-bold text-sm hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                        {[1021, 1022, 1023].map(id => (
                            <div key={id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-xs">#{id}</div>
                                    <div>
                                        <p className="font-bold text-dark text-sm">Customer Order</p>
                                        <p className="text-xs text-gray-400">2 items • Today, 12:45 PM</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-dark text-sm">₹240</p>
                                    <span className="text-[10px] px-2 py-1 bg-green-100 text-green-600 rounded-full font-bold uppercase">Paid</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Products Preview */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg text-dark">Top Selling Items</h3>
                        <span className="text-xs text-gray-400 font-medium">This month</span>
                    </div>
                    <div className="space-y-4">
                        {foodData.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                                    <div>
                                        <p className="font-bold text-dark text-sm">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-dark text-sm">{85 - i * 10} sales</p>
                                    <p className="text-xs text-green-500 font-bold">+12%</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
