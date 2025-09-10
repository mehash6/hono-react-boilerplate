import React from 'react';
import { Button } from '@/components/ui/button';

interface PrimaryActionsProps {
  onReset: () => void;
  onProceed: () => void;
}

export function PrimaryActions({ onReset, onProceed }: PrimaryActionsProps) {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
        {/* Left Side: Reset Button */}
        <Button variant="outline" size="lg" className="px-10 py-6 text-lg w-full md:w-auto" onClick={onReset}>
          Reset
        </Button>

        {/* Right Side: Proceed Button */}
        <Button variant="default" size="lg" className="px-10 py-6 text-lg bg-slate-900 hover:bg-slate-800 w-full md:w-auto" onClick={onProceed}>
          Proceed
        </Button>
      </div>
    </section>
  );
}
