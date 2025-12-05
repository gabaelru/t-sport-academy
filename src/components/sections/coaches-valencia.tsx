"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTranslation } from 'react-i18next';

const coaches = [
  { id: 'gaizka-toquero-valencia', name: 'Gaizka Toquero' },
];

export default function CoachesValenciaSection() {
  const { t } = useTranslation();

  const titleKey = 'Coaches.Titulo';
  const subtitleKey = 'Coaches.Subtitulo';

  return (
    <section id="coaches" className="w-full py-16 md:py-24 lg:py-32 bg-card scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">{t(titleKey)}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {t(subtitleKey)}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach) => {
            const coachImage = PlaceHolderImages.find(p => p.id === coach.id);

            const roleKey = `Coaches.${coach.id}.role`;
            const bioKey = `Coaches.${coach.id}.bio`;

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
                      <CardTitle 
                          className="
                              font-headline 
                              text-xl 
                              bg-clip-text 
                              text-transparent 
                              bg-gradient-to-r 
                              from-[#6ed1db] 
                              via-[#90adc1] 
                              via-[#b08aa3] 
                              to-[#ce688b]
                          "
                      >
                          {coach.name}
                      </CardTitle>
                      <p className="text-sm text-primary">{t(roleKey)}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t(bioKey)}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
