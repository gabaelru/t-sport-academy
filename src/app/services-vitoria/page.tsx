"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServicesVitoriaSection from '@/components/sections/servicesVitoria';
import { useTranslation } from 'react-i18next';

export default function ServicesVitoriaPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              {t('Servicios.TituloVitoria')}
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              {t('Servicios.DescripcionVitoria')}
            </p>
          </div>
          <div className="container mx-auto px-4 md:px-6 mt-12">
            <ServicesVitoriaSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
