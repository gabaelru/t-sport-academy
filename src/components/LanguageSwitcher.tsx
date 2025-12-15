'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'es', name: 'Español' },
  { code: 'eu', name: 'Euskera' },
  { code: 'en', name: 'English' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = async (lng: string) => {
    i18n.changeLanguage(lng);

    const newsArticleRegex = /^\/(es|en|eu)\/noticias\/(.+)/;
    const match = pathname.match(newsArticleRegex);
    let newPath;

    // Check if the current page is a news article page
    if (match) {
      const currentLang = match[1];
      const currentSlug = match[2];

      try {
        // Fetch the translated slugs for the current article from the API route
        const response = await fetch(`/api/translations?slug=${currentSlug}&lang=${currentLang}`);
        if (response.ok) {
          const translatedSlugs = await response.json();
          if (translatedSlugs[lng]) {
            // If a translation exists for the new language, build the correct path
            newPath = `/${lng}/noticias/${translatedSlugs[lng]}`;
          } else {
            // If no translation exists, fall back to the news list page for that language
            newPath = `/${lng}/noticias`;
          }
        } else {
          // If the API call fails, fall back to the news list page
          newPath = `/${lng}/noticias`;
        }
      } catch (error) {
        console.error('Failed to fetch translations', error);
        // If there's a network error, fall back to the news list page
        newPath = `/${lng}/noticias`;
      }
    }

    // For any other page, use the original logic of just replacing the language code
    if (!newPath) {
      newPath = pathname.replace(/^\/(es|en|eu)/, `/${lng}`);
    }

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Cambiar idioma" className="h-9 w-9">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lng) => (
          <DropdownMenuItem
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
            disabled={i18n.language === lng.code}
          >
            {lng.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
