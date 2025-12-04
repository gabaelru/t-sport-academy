"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';
import { useTranslation } from 'react-i18next';

export default function GaleriaPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              {t('Galeria.Titulo')}
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              {t('Galeria.Descripcion')}
            </p>
          </div>
          <div className="container mx-auto px-4 md:px-6 mt-12">
            <Script src="https://elfsightcdn.com/platform.js" data-elfsight-app-lazy />
            <div className="elfsight-app-beeef073-18c5-4e2e-b69d-a07b00e76861" data-elfsight-app-lazy></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
