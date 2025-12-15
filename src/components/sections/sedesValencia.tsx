"use client";

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const sedesData = [
  {
    id: 'sede-colegio-mayor',
    mapsLink: 'https://maps.app.goo.gl/vLgNvTqJ2Zz5X4hQ6',
    registrationLink: 'https://app.360player.com/registration/toquerosport/334a93c7-ba26-47e3-b5cc-5a50b4efb0d4'
  },
  {
    id: 'sede-saguntino',
    mapsLink: 'https://maps.app.goo.gl/2F8sN7RjKkY6f1t8A',
    registrationLink: 'https://app.360player.com/registration/toquerosport/488f14f0-ed75-4926-af50-094a26bc4076'
  },
];

export default function SedesSection() {
  const { t } = useTranslation();

  return (
    <section id="sedes" className="w-full py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">{t('Sedes.TituloSedes')}</h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('Sedes.SubtituloSedesValencia')}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {sedesData.map((sede) => {
            const sedeImage = PlaceHolderImages.find(p => p.id === sede.id);

            const titleKey = `Sedes.${sede.id}.titulo`;
            const descriptionKey = `Sedes.${sede.id}.descripcion`;
            const detailsKey = `Sedes.${sede.id}.detalles`;
            const translatedTitle = t(titleKey, sede.id);

            const untrustedDetails = t(detailsKey, { returnObjects: true });
            const translatedDetails: string[] = Array.isArray(untrustedDetails) ? untrustedDetails : [];

            return (
              <Card key={sede.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                {sedeImage && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={sedeImage.imageUrl}
                      alt={translatedTitle}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={sedeImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{translatedTitle}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-4">
                  <p>{t(descriptionKey)}</p>
                  <ul className="space-y-2 text-sm">
                    {translatedDetails.map((detail, index) => (
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
                      {t('Sedes.InscribeteBoton')}
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
