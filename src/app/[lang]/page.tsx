
import React from 'react';
import HeroSection from '@/components/sections/hero';

export default function HomePage({ params }: { params: { lang: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
      </main>
    </div>
  );
}
