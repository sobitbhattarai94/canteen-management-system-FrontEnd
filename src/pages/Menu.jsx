import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { foodData } from '../data/foodData';
import { categories } from '../data/categories';
import FoodCard from '../components/FoodCard';
import CategoryFilter from '../components/CategoryFilter';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFoods = useMemo(() => {
        return foodData.filter(food => {
            const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
            const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Header & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                    <h1 className="text-4xl font-black text-dark mb-2">Our Menu</h1>
                    <p className="text-gray-500 font-medium">Browse through our delicious offerings</p>
                </div>

                <div className="relative max-w-md w-full">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for food..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>

            {/* Category Filter */}
            <div className="sticky top-16 bg-bg/80 backdrop-blur-md z-30 py-2">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            </div>

            {/* Grid */}
            {filteredFoods.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredFoods.map(food => (
                        <FoodCard key={food.id} product={food} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 space-y-4">
                    <div className="text-64">🔍</div>
                    <h3 className="text-2xl font-bold text-dark">No food found</h3>
                    <p className="text-gray-500">Try adjusting your search or category filters.</p>
                    <button
                        onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                        className="text-accent font-bold hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Menu;
