import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const coaches = [
  {
    id: 'gaizka-toquero',
    name: 'Gaizka Toquero',
    role: 'Director',
    bio: 'Ex-estrella de La Liga con el Athletic de Bilbao, Gaizka aporta años de experiencia en la élite y una pasión por desarrollar jóvenes talentos.',
  },
  {
    id: 'eneko-reyes',
    name: 'Eneko Reyes',
    role: 'Director Técnico',
    bio: 'Como Director Técnico, Eneko supervisa la metodología de entrenamiento y el desarrollo futbolístico de todas las categorías de la academia.',
  },
  {
    id: 'iban-triviño',
    name: 'Iban Triviño',
    role: 'Entrenador de Porteros',
    bio: 'Experto en el entrenamiento específico de porteros, Iban ayuda a nuestros guardametas a alcanzar su máximo potencial.',
  },
  {
    id: 'pablo-diez',
    name: 'Pablo Diez',
    role: 'Entrenador',
    bio: 'Pablo se especializa en el desarrollo técnico-táctico individual y colectivo de nuestros jugadores, ayudándolos a alcanzar su máximo potencial en el campo.',
  },
  {
    id: 'edu-roldan',
    name: 'Edu Roldán',
    role: 'Fisioterapeuta',
    bio: 'Especializado en lesiones deportivas, Edu ayuda a nuestros jugadores a recuperarse y prevenir futuras lesiones, asegurando su máximo rendimiento en el campo.',
  },
];

export default function CoachesSection() {
  return (
    <section id="coaches" className="w-full py-16 md:py-24 lg:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Conoce a Nuestros Entrenadores</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Un equipo profesional dedicado y comprometido con tu crecimiento deportivo y personal.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => {
            const coachImage = PlaceHolderImages.find(p => p.id === coach.id);
            return (
              <Card key={coach.id} className="text-center transition-all duration-300 hover:bg-background/50 hover:border-primary">
                <CardHeader className="items-center">
                  {coachImage && (
                     <div className="w-48 h-32 relative rounded-md overflow-hidden border-4 border-primary">
                        <Image
                            src={coachImage.imageUrl}
                            alt={coach.name}
                            width={400}
                            height={400}
                            className="object-contain"
                            data-ai-hint={coachImage.imageHint}
                        />
                    </div>
                  )}
                  <div className="pt-4">
                    <CardTitle className="font-headline text-xl">{coach.name}</CardTitle>
                    <p className="text-sm text-primary">{coach.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{coach.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
