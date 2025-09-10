import React from 'react';
import { Button } from '@/components/ui/button';

const categories = ['T-shirt', 'Crew', 'Hoodies', 'Pants', 'Crop Top'];

interface ProductCategoriesProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductCategories({ selectedCategory, onCategoryChange }: ProductCategoriesProps) {
  return (
    <section className="py-8">
      <div className="flex justify-center flex-wrap gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`px-6 py-3 text-lg rounded-full transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-slate-900 text-white shadow-lg'
                : 'bg-white text-slate-900 hover:bg-slate-100'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
            {selectedCategory === category && (
              <span className="ml-2 text-xs bg-white text-slate-900 px-2 py-1 rounded-full">
                Current Select
              </span>
            )}
          </Button>
        ))}
      </div>
    </section>
  );
}
