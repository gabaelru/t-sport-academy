import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const videoId = 'lPKu73QIqfI';

  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vh] transform -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube video background"
        ></iframe>
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
