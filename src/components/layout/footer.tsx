import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2">
                  <Image src="/images/logo-toquero-sport.png" alt="Toquero Sport Academy" width={32} height={32} className="h-8 w-auto" />
                  <span className="font-headline text-xl font-bold">
                  TOQUERO SPORT ACADEMY
                  </span>
              </Link>
              <p className="mt-4 text-muted-foreground">
              ¿Todo listo para tu inscripción o tienes alguna duda? Haz clic aquí. ¡Te estamos esperando!
              </p>
            </div>
             <Button asChild className="w-full sm:w-auto font-bold mt-6" size="lg">
              <Link href="https://app.360Player.com/join/ZIZZH8" target="_blank" rel="noopener noreferrer">
                Inscríbete Ahora
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 text-sm md:col-span-6 md:col-start-8 md:grid-cols-2">
            <div className="grid gap-1">
              <h3 className="font-headline font-semibold">Enlaces</h3>
              <Link href="/galeria" className="text-muted-foreground transition-colors hover:text-foreground">Galería</Link>
              <Link href="https://www.latiendademiclub.com/toquerosportacademy/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">Tienda</Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">Contacto</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Academia de Fútbol Toquero. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary"><Facebook size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
