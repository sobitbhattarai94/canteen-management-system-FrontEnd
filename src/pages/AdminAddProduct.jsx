import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaSave, FaArrowLeft } from 'react-icons/fa';
import { categories } from '../data/categories';

const AdminAddProduct = ({ onAdd }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: 'Meals',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price || !formData.image) {
            alert("Please fill all fields!");
            return;
        }

        const newProduct = {
            ...formData,
            id: Date.now(),
            price: Number(formData.price)
        };

        onAdd(newProduct);
        alert("Product Added Successfully!");
        navigate('/admin/products');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-400 hover:text-dark transition-all"
                >
                    <FaArrowLeft />
                </button>
                <div>
                    <h1 className="text-2xl font-black text-dark">Add New Product</h1>
                    <p className="text-gray-500 font-medium">Create a new item for your canteen menu</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-dark mb-2">Product Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Spicy Chicken Burger"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-dark mb-2">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                            >
                                {categories.filter(c => c !== "All").map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-dark mb-2">Price (₹)</label>
                            <input
                                type="number"
                                placeholder="0.00"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-dark mb-2">Image URL</label>
                            <input
                                type="text"
                                placeholder="https://images.unsplash.com/..."
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 flex flex-col items-center justify-center text-center space-y-4">
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded-2xl" />
                            ) : (
                                <>
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl text-gray-300">
                                        <FaCloudUploadAlt />
                                    </div>
                                    <p className="text-gray-400 text-sm font-medium">Image preview will appear here</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="md:col-span-2 pt-6">
                        <button
                            type="submit"
                            className="w-full bg-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all shadow-xl active:scale-95"
                        >
                            <FaSave />
                            <span>Save Product</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminAddProduct;
