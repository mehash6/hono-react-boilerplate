import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, ChevronRight } from 'lucide-react';

const designOptions = [
  { name: 'Design 1', imageUrl: 'https://placehold.co/100x100/png?text=Design+1' },
  { name: 'Design 2', imageUrl: 'https://placehold.co/100x100/png?text=Design+2' },
  { name: 'Design 3', imageUrl: 'https://placehold.co/100x100/png?text=Design+3' },
];

export function ActionButtons() {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Select Design</h2>
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
        {/* Left Side: Upload Button */}
        <Button variant="outline" className="w-full md:w-auto">
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </Button>

        {/* Center Area: Design Buttons */}
        <div className="flex justify-center gap-4">
          {designOptions.map((option) => (
            <div key={option.name} className="p-2 border rounded-lg">
              <img src={option.imageUrl} alt={option.name} className="w-16 h-16 object-cover rounded-md" />
              <p className="text-center text-sm mt-1">{option.name}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Expandable Design Button */}
        <Button variant="outline" className="w-full md:w-auto">
          More Designs
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
