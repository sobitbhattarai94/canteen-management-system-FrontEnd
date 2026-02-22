import React from 'react';
import { FaPlus, FaTag } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const FoodCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark flex items-center shadow-sm">
                    <FaTag className="mr-1 text-accent" />
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-dark group-hover:text-accent transition-colors">
                        {product.name}
                    </h3>
                    <span className="font-bold text-accent text-lg">₹{product.price}</span>
                </div>

                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    Delicious freshly prepared {product.name.toLowerCase()} made with premium ingredients.
                </p>

                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-primary flex items-center justify-center space-x-2 py-3 rounded-2xl font-bold text-dark hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
                >
                    <FaPlus size={14} />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
