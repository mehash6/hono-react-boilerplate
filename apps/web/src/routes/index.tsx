import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { getSession } from '@/lib/auth-client';
import {
  Header,
  ProductCategories,
  ColorSelector,
  ActionButtons,
  PrimaryActions,
} from '@/components/dots-drip';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    const session = await getSession();
    if (session.data) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: Index,
});

const initialCategory = 'Crew';
const initialColor = '#FF0000';

function Index() {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const navigate = useNavigate();

  const handleReset = () => {
    setSelectedCategory(initialCategory);
    setSelectedColor(initialColor);
  };

  const handleProceed = () => {
    navigate({ to: '/design' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ColorSelector
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
        <ActionButtons />
        <PrimaryActions onReset={handleReset} onProceed={handleProceed} />
      </main>
    </div>
  );
}
