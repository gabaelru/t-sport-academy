import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CheckCircle2 } from 'lucide-react';

const sedesData = [
  {
    id: 'sede-olabide',
    title: 'Olabide Ikastola',
    description: 'Un completo programa de perfeccionamiento de capacidades futbolísticas para todos los niveles, en unas instalaciones de primer nivel.',
    details: [
      'Ubicación: Olabide Ikastola (Campo de Fútbol 11)',
      'Podrá asistir el alumnado de la Ikastola Olabide, así como de otros centros educativos y entidades deportivas.',
      'Horario: Lunes a Jueves, 18:00 - 19:15',
      'Edades: 2007-2019 (consultar grupos)',
      'Sesiones: Existe la flexibilidad de elegir entre una, dos o tres sesiones a la semana',
      'Inicio: 3 de Noviembre de 2025',
      'Uso obligatorio de la equipación oficial',
    ],
    mapsLink: 'https://maps.app.goo.gl/vLgNvTqJ2Zz5X4hQ6',
    registrationLink: 'https://app.360player.com/registration/toquerosport/81169601-671a-443f-a501-9e685962c409'
  },
  {
    id: 'sede-estadio',
    title: 'Fundación Estadio',
    description: 'Un complejo deportivo completo con múltiples campos y equipamiento moderno para un entrenamiento integral.',
    details: [
      'Ubicación: Fundación Estadio',
      'Acceso: Solo para abonados de la Fundación Estadio',
      'Jueves (16:30-17:30): 2012-2013',
      'Lunes y Miércoles (17:45-18:45): 2014-2015',
      'Sesiones: Existe la flexibilidad de elegir entre una, dos o tres sesiones a la semana',
      'Inicio: 3 de Noviembre de 2025',
      'Uso obligatorio de la equipación oficial',
    ],
    mapsLink: 'https://maps.app.goo.gl/2F8sN7RjKkY6f1t8A',
    registrationLink: 'https://app.360player.com/registration/toquerosport/66da72ae-fbcd-469c-8359-433a41e8fc9a'
  },
];

export default function SedesSection() {
  return (
    <section id="sedes" className="w-full py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Nuestras Sedes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Contamos con dos sedes en Vitoria. Hemos cuidado la selección de instalaciones para asegurar un entorno de entrenamiento de alta calidad.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {sedesData.map((sede) => {
            const sedeImage = PlaceHolderImages.find(p => p.id === sede.id);
            return (
              <Card key={sede.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                {sedeImage && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={sedeImage.imageUrl}
                      alt={sede.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={sedeImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{sede.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-4">
                  <p className="text-muted-foreground">{sede.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {sede.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button asChild className="w-full font-bold">
                    <Link href={sede.registrationLink} target="_blank" rel="noopener noreferrer">
                      Inscríbete
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
