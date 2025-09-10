import React from 'react';

const categories = [
  { name: 'T-shirt', label: 'T-shirt', imageUrl: 'https://placehold.co/400x400/png?text=T-shirt' },
  { name: 'Crew', label: 'Crew', imageUrl: 'https://placehold.co/400x400/png?text=Crew' },
  { name: 'Hoodies', label: 'Hoodies', imageUrl: 'https://placehold.co/400x400/png?text=Hoodie' },
  { name: 'Pants', label: 'Pants', imageUrl: 'https://placehold.co/400x400/png?text=Pants' },
  { name: 'Crop Top', label: 'Crop Top', imageUrl: 'https://placehold.co/400x400/png?text=Crop+Top' },
];

interface ProductCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductCategories({ selectedCategory, onCategoryChange }: ProductCategoriesProps) {
  return (
    <section className="py-8">
      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`relative rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 ${
              selectedCategory === category.name ? 'ring-2 ring-slate-900 shadow-lg' : 'ring-1 ring-gray-200'
            }`}
            onClick={() => onCategoryChange(category.name)}
          >
            <img
              src={category.imageUrl}
              alt={category.label}
              className="w-40 h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
              <p className="text-white font-semibold text-lg pb-2">{category.label}</p>
            </div>
            {selectedCategory === category.name && (
              <div className="absolute top-2 right-2 bg-slate-900 text-white text-xs px-2 py-1 rounded-full">
                Current Select
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
