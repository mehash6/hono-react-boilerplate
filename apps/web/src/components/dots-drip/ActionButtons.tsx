import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Palette, ChevronRight } from 'lucide-react';

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
        <div className="flex justify-center gap-2">
          <Button variant="outline">
            <Palette className="mr-2 h-4 w-4" />
            Design
          </Button>
          <Button variant="outline">
            <Palette className="mr-2 h-4 w-4" />
            Design
          </Button>
          <Button variant="outline">
            <Palette className="mr-2 h-4 w-4" />
            Design
          </Button>
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
