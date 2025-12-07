import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SedesSection from '@/components/sections/sedesValencia';

export default function SedesValenciaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <SedesSection />
      </main>
      <Footer />
    </div>
  );
}
