import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactSection from '@/components/sections/contact';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
