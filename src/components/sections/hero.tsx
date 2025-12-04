"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';


export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 lg:py-20 min-h-[70vh] flex items-center">
      
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
        
        {/* COLUMNA 1: Contenido (Texto y CTA) - Sin cambios */}
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
            Toquero Sport Academy
          </h1>
          <p className="mx-auto lg:mx-0 mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
            {t('Hero.Resumen')}
          </p>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="https://app.360Player.com/join/ZIZZH8" target="_blank" rel="noopener noreferrer">{t('Hero.Boton')}</Link>
            </Button>
          </div>
        </div>

        {/* COLUMNA 2: Media (Video de YouTube) - MODIFICADA */}
        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
            {/*
              *** CAMBIOS CLAVE en la URL: Se añadieron 'rel=0' y 'showinfo=0'.
            */}
            <iframe
              // Parámetros: autoplay=1, mute=1, loop=1, playlist=ID, controls=0, modestbranding=1, rel=0, showinfo=0, playsinline=1
              src="https://www.youtube.com/embed/IVkd45lSuF8?autoplay=1&mute=1&loop=1&playlist=IVkd45lSuF8&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1"
              title="Toquero Sport Academy Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              // *** CAMBIO CLAVE en CSS: 'pointer-events-none' evita toda interacción del ratón con el iframe.
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}