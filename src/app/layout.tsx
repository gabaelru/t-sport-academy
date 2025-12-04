import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
// 1. Importar el componente Provider que creamos
import I18nProvider from '@/components/I18nProvider'; 

export const metadata: Metadata = {
  title: 'Toquero Sport Academy',
  description:
    'La academia oficial de Gaizka Toquero. Formando a la próxima generación de estrellas del fútbol.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // NOTA: El atributo lang="es" aquí es estático.
    // Para que cambie dinámicamente con el idioma, necesitarías usar el hook
    // 'useTranslation' en un componente cliente que es más complejo
    // en RootLayout. Por ahora, lo dejaremos estático.
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {/* 2. Envolver el contenido (children) con el I18nProvider */}
        <I18nProvider>
          {children}
        </I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}