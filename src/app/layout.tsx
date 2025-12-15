import type { Metadata } from 'next';
import { PT_Sans, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const ptSans = PT_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Toquero Sport Academy',
  description: 'Academia de fútbol Toquero Sport Academy en Vitoria y Valencia',
};

// El layout raíz es agnóstico al idioma y no recibe `params`
export default function RootLayout({ 
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    // Solo define la estructura HTML básica.
    <html suppressHydrationWarning className='dark'>
      <body className={`${ptSans.variable} ${poppins.variable} font-body`}>
        {/* No hay I18nProvider aquí */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
