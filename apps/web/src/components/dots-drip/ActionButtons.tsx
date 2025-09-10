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
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
        {/* Left Side: Upload Button */}
        <Button variant="outline" className="w-full md:w-auto">
          <Upload className="mr-2 h-4 w-4" />
          Upload Image
        </Button>

        {/* Center Area: Design Buttons */}
        <div className="flex justify-center gap-4">
          {designOptions.map((option) => (
            <Button key={option.name} variant="outline" className="flex flex-col h-24 w-24 p-2">
              <img src={option.imageUrl} alt={option.name} className="w-12 h-12 object-cover mb-1 rounded-sm" />
              <span className="text-xs">{option.name}</span>
            </Button>
          ))}
        </div>

        {/* Right Side: Expandable Design Button */}
        <Button variant="outline" className="w-full md:w-auto">
          Design
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
