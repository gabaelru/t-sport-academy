import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  // Se elimina 'videoId' ya que no se usa con la etiqueta <video>

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {/*
          *** INICIO: Reemplazo del iframe por la etiqueta <video> ***
          - autoPlay, loop, muted: Esenciales para videos de fondo.
          - playsInline: Necesario para la reproducción automática en iOS.
          - object-cover: Asegura que el video cubra todo el contenedor.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          {/* Asegúrate de que esta ruta '/hero-video.mp4' apunta a tu archivo de video 
            en la carpeta 'public' y que tu video esté optimizado para la web.
          */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Se recomienda añadir un formato adicional (.webm) para mayor compatibilidad: */}
          {/* <source src="/hero-video.webm" type="video/webm" /> */}
          Tu navegador no soporta la etiqueta de video.
        </video>
        {/*
          *** FIN: Reemplazo del iframe por la etiqueta <video> ***
        */}
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Toquero Sport Academy
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
            Nos dedicamos a la formación integral, guiando la próxima generación de futbolistas mediante la dedicación, el respeto y la búsqueda continua de la mejora personal. Te invitamos a compartir la pasión y el conocimiento del juego en un espacio donde el disfrute es la meta principal de cada entrenamiento.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-bold">
              <Link href="https://app.360Player.com/join/ZIZZH8" target="_blank" rel="noopener noreferrer">Únete a la Academia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}