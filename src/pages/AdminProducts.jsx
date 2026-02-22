import React from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminProducts = ({ products, onDelete }) => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-dark">Manage Products</h1>
                    <p className="text-gray-500 font-medium">Total {products.length} items in menu</p>
                </div>
                <Link
                    to="/admin/add-product"
                    className="bg-primary text-dark px-6 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
                >
                    <FaPlus />
                    <span>Add New Product</span>
                </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-bold text-dark text-sm">Product</th>
                                <th className="px-6 py-4 font-bold text-dark text-sm text-center">Category</th>
                                <th className="px-6 py-4 font-bold text-dark text-sm text-center">Price</th>
                                <th className="px-6 py-4 font-bold text-dark text-sm text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.image} alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                                            <div>
                                                <p className="font-bold text-dark text-sm">{item.name}</p>
                                                <p className="text-xs text-gray-400">ID: #{item.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="px-3 py-1 bg-bg text-accent rounded-full text-[10px] font-bold uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="font-bold text-dark">₹{item.price}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end space-x-2">
                                            <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                                                <FaEdit size={16} />
                                            </button>
                                            <button
                                                onClick={() => onDelete(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                            >
                                                <FaTrash size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminProducts;
