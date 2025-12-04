"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
    const { t } = useTranslation();

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{t('Contacto.Titulo')}</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                    {t('Contacto.Descripcion')}
                </p>
                <div className="mt-8 space-y-4 text-left sm:flex sm:justify-center sm:gap-8 sm:space-y-0">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">{t('Contacto.Telefono')}</h3>
                            <p className="text-muted-foreground">(+34) 690 97 11 85</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold">{t('Contacto.Email')}</h3>
                            <p className="text-muted-foreground">info@toquerosport.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
