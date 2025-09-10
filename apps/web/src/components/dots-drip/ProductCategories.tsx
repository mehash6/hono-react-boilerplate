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
      <h2 className="text-center text-2xl font-bold mb-4">Select Apparel</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`cursor-pointer p-2 rounded-lg ${
              selectedCategory === category.name ? 'bg-slate-200' : 'bg-white'
            }`}
          >
            <img
              src={category.imageUrl}
              alt={category.label}
              className="w-40 h-40 object-cover rounded-md"
            />
            <p className="text-center mt-2 font-semibold">{category.label}</p>
            {selectedCategory === category.name && (
              <p className="text-center text-sm text-slate-900 font-bold">
                Current Select
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
