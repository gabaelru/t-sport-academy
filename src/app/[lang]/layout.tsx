import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import I18nProvider from '@/components/I18nProvider';

// 1. Este layout recibe `params` con el idioma.
export default function LangLayout({ 
  children,
  params: { lang }
}: { 
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    // 2. Usa el idioma para configurar el proveedor de internacionalización.
    <I18nProvider lang={lang}>
      <div className="flex flex-col min-h-screen">
        {/* Los componentes hijos como Header ahora tienen el contexto de i18n correcto */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
