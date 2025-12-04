"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    id: 'service-nutrition',
    href: 'https://app.360player.com/registration/toquerosport/ae3abfb2-6cf1-42f6-a8af-7de58a3dd340',
  },
  {
    id: 'service-organizations',
    href: 'https://forms.360player.com/toquerosport/form/fc9933f6-d5e1-4baf-a076-5ea19a369a6a',
  },
];

export default function ServicesVitoriaSection() {
  const { t } = useTranslation();

  return (
    <section id="services-valencia" className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {servicesData.map((service) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.id);

            const titleKey = `Servicios.${service.id}.titulo`;
            const descriptionKey = `Servicios.${service.id}.descripcion`;
            const translatedTitle = t(titleKey, service.id);

            return (
              <Card key={service.id} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                {serviceImage && (
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={translatedTitle}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{translatedTitle}</CardTitle>
                  <CardDescription>{t(descriptionKey)}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                        <Link href={service.href} target="_blank" rel="noopener noreferrer">
                            {t('Servicios.Boton')}
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
