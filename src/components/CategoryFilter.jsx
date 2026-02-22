import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
    return (
        <div className="flex flex-wrap gap-3 py-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${selectedCategory === cat
                            ? 'bg-primary text-dark ring-2 ring-primary ring-offset-2'
                            : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
