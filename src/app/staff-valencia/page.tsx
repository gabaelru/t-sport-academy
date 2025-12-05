import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CoachesSection from '@/components/sections/coaches-valencia';

export default function StaffValenciaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <CoachesSection />
      </main>
      <Footer />
    </div>
  );
}
