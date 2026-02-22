import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartModal = () => {
    const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        alert("Order Placed Successfully! (Demo Only)");
        clearCart();
        setIsCartOpen(false);
    };

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Cart Panel */}
            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-xl flex flex-col animate-slide-in">
                    {/* Header */}
                    <div className="px-4 py-6 bg-primary flex items-center justify-between">
                        <h2 className="text-xl font-bold text-dark">Your Cart</h2>
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="text-dark hover:text-accent transition-colors"
                        >
                            <FaTimes size={24} />
                        </button>
                    </div>

                    {/* Items List */}
                    <div className="flex-1 py-6 overflow-y-auto px-4">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                <span className="text-64 mb-4">🛒</span>
                                <p className="text-lg font-medium">Your cart is empty</p>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="mt-4 text-accent font-bold hover:underline"
                                >
                                    Start Ordering
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-bold text-dark">{item.name}</h3>
                                            <p className="text-gray-500">₹{item.price}</p>
                                            <div className="flex items-center mt-2 space-x-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 rounded-full bg-gray-100 hover:bg-primary-dark transition-colors"
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                                <span className="font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 rounded-full bg-gray-100 hover:bg-primary-dark transition-colors"
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-dark">₹{item.price * item.quantity}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 mt-2 hover:text-red-700 transition-colors"
                                            >
                                                <FaTrash size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {cart.length > 0 && (
                        <div className="border-t border-gray-200 px-4 py-6 bg-bg">
                            <div className="flex justify-between text-base font-medium text-dark mb-4">
                                <p>Subtotal</p>
                                <p>₹{totalPrice}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500 mb-6">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <button
                                onClick={handleCheckout}
                                className="w-full bg-primary-dark text-dark font-bold py-3 rounded-xl shadow-lg hover:bg-primary transition-all active:scale-95"
                            >
                                Checkout Now
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default CartModal;
