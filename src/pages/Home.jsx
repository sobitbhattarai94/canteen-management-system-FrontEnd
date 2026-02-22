import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaTruck, FaUtensils } from 'react-icons/fa';
import { foodData } from '../data/foodData';
import FoodCard from '../components/FoodCard';

const Home = () => {
    const featuredFoods = foodData.slice(0, 4);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
                    <div className="space-y-8 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-black text-dark leading-tight">
                            Fuel Your <span className="text-white drop-shadow-lg">Hunger</span> with Every Bite!
                        </h1>
                        <p className="text-xl text-dark/70 font-medium max-w-lg">
                            Freshly prepared meals, snacks, and drinks available at your favorite canteen. Fast service, great taste!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="/menu"
                                className="bg-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all shadow-xl hover:shadow-dark/20 active:scale-95"
                            >
                                <span>Order Now</span>
                                <FaArrowRight />
                            </Link>
                            <Link
                                to="/menu"
                                className="bg-white text-dark px-8 py-4 rounded-2xl font-bold border-2 border-dark/5 hover:bg-gray-50 transition-all"
                            >
                                View Menu
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block relative animate-bounce-slow">
                        <img
                            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop"
                            alt="Delicious Burger"
                            className="w-full h-auto rounded-[3rem] shadow-2xl rotate-3"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center space-x-4 border border-gray-100">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">🔥</div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase">Hottest Item</p>
                                <p className="font-bold text-dark text-lg">Crispy Chicken Burger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                {[
                    { icon: <FaClock />, title: "Quick Prep", desc: "Get your food ready in under 15 minutes." },
                    { icon: <FaUtensils />, title: "Fresh Quality", desc: "Only the freshest ingredients from local vendors." },
                    { icon: <FaTruck />, title: "Table Service", desc: "Relax at your table, we'll bring it to you." },
                ].map((f, i) => (
                    <div key={i} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-bg flex items-center justify-center text-3xl text-accent mx-auto rounded-2xl">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-bold text-dark">{f.title}</h3>
                        <p className="text-gray-500">{f.desc}</p>
                    </div>
                ))}
            </section>

            {/* Featured Items */}
            <section className="max-w-7xl mx-auto px-4 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-4xl font-black text-dark mb-2">Popular Dishes</h2>
                        <p className="text-gray-500">Most ordered items this week</p>
                    </div>
                    <Link to="/menu" className="text-accent font-bold flex items-center space-x-2 hover:underline">
                        <span>Explore all menu</span>
                        <FaArrowRight />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredFoods.map(product => (
                        <FoodCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Home;
