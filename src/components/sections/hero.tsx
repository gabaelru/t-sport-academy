import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  // Se ha adaptado el componente para usar un iframe de YouTube

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {/*
          *** INICIO: Reemplazo de <video> por <iframe> de YouTube ***
          - Se utiliza la URL de embed de YouTube: https://www.youtube.com/embed/IVkd45lSuF8
          - Parámetros clave para el efecto de fondo:
            - autoplay=1: Inicia la reproducción automática.
            - mute=1: Silencia el video (necesario para que 'autoplay' funcione en la mayoría de los navegadores).
            - loop=1 y playlist=IVkd45lSuF8: Configura el video para que se repita en bucle.
            - controls=0: Oculta los controles del reproductor.
            - playsinline=1: Importante para la reproducción automática en dispositivos iOS.
          - La clase CSS (min-w y min-h) asegura que el video cubra todo el contenedor, simulando 'object-cover'.
          - pointer-events-none evita que el iframe interfiera con los clics en la capa superior.
        */}
        <iframe
          src="https://www.youtube.com/embed/IVkd45lSuF8?autoplay=1&mute=1&loop=1&playlist=IVkd45lSuF8&controls=0&modestbranding=1&playsinline=1"
          title="Toquero Sport Academy Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        {/*
          *** FIN: Reemplazo de <video> por <iframe> de YouTube ***
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