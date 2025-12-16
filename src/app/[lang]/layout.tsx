import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import I18nProvider from '@/components/I18nProvider';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params; // ✅ CLAVE en Next 16

  return (
    <I18nProvider lang={lang}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
