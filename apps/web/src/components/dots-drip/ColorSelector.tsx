import React from 'react';

const presetColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

export function ColorSelector({ selectedColor, onColorChange }: ColorSelectorProps) {
  return (
    <section className="py-8">
      <div className="flex justify-center items-center gap-4">
        {/* Color Swatches */}
        <div className="flex gap-2">
          {presetColors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 transition-transform duration-200 ${
                selectedColor === color ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>

        {/* Color Slider/Picker */}
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-10 h-10 p-0 border-none cursor-pointer"
            aria-label="Custom color picker"
          />
          <span className="text-sm text-gray-600">Custom</span>
        </div>
      </div>
    </section>
  );
}
