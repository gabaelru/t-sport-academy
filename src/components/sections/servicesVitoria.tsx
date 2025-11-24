import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

const servicesData = [
  {
    id: 'service-gym',
    title: 'Gimnasio',
    description: 'Accede a nuestras instalaciones de vanguardia para mejorar tu fuerza, agilidad y resistencia. Planes de entrenamiento personalizados disponibles.',
    href: 'https://app.360player.com/registration/toquerosport/c60627de-1ff3-4202-bd8f-4d7b5fa2523a',
  },
  {
    id: 'service-nutrition',
    title: 'Nutrición',
    description: 'Nuestros nutricionistas deportivos te ayudarán a optimizar tu dieta para alcanzar el máximo rendimiento y una recuperación más rápida.',
    href: 'https://app.360player.com/registration/toquerosport/ae3abfb2-6cf1-42f6-a8af-7de58a3dd340',
  },
  {
    id: 'service-physiotherapy',
    title: 'Fisioterapia',
    description: 'Servicios de fisioterapia especializados en la prevención y tratamiento de lesiones deportivas para mantenerte en el campo.',
    href: 'https://app.360player.com/registration/toquerosport/735d2797-0c32-4e1e-8627-7d2b8fdc9c5c',
  },
  {
    id: 'service-organizations',
    title: 'Consultoría clubes',
    description: 'Impulsamos el desarrollo de personas con servicios personalizados para organizaciones y clubes.',
    href: 'https://forms.360player.com/toquerosport/form/fc9933f6-d5e1-4baf-a076-5ea19a369a6a',
  },
];

export default function ServicesVitoriaSection() {
  return (
    <section id="services-vitoria" className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {servicesData.map((service) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                {serviceImage && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                        <Link href={service.href} target="_blank" rel="noopener noreferrer">
                            Contratar
                        </Link>
                    </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
