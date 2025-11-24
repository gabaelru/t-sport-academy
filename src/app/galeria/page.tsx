import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Script from 'next/script';

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Galería
            </h1>
            <p className="mt-4 max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Sigue nuestros momentos en Instagram.
            </p>
          </div>
          <div className="container mx-auto px-4 md:px-6 mt-12">
            <Script src="https://elfsightcdn.com/platform.js" data-elfsight-app-lazy />
            <div className="elfsight-app-c365a470-fb7c-4a23-a5fd-dec068f42ae1" data-elfsight-app-lazy></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
