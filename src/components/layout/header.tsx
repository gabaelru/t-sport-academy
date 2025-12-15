'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // 💡 1. Importar el hook useParams
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const getNavLinks = (t: (key: string) => string) => [
  {
    label: t('Navigation.AcademyVitoria'),
    isDropdown: true,
    items: [
      { href: '/services-vitoria', label: t('Navigation.ToqueroSportServicios') },
      { href: '/sedes-vitoria', label: t('Navigation.Sedes') },
      { href: '/staff-vitoria', label: t('Navigation.Staff') },
      { href: 'https://www.latiendademiclub.com/toquerosportacademy/', label: t('Navigation.Tienda'), isExternal: true },
    ],
  },
  {
    label: t('Navigation.AcademyValencia'),
    isDropdown: true,
    items: [
      { href: '/services-valencia', label: t('Navigation.ToqueroSportServicios') },
      { href: '/sedes-valencia', label: t('Navigation.Sedes') },
      { href: '/staff-valencia', label: t('Navigation.Staff') },
    ],
  },
  { href: '/galeria', label: t('Navigation.Galeria') },
  { href: '/noticias', label: t('Navigation.Noticias') },
  { href: '/contact', label: t('Navigation.Contacto') },
];

// 💡 2. NavLink ahora obtiene el idioma con el hook useParams
const NavLink = ({ href, label, isExternal, onClick, className }: { href: string; label: string; isExternal?: boolean; onClick?: () => void; className?: string; }) => {
  const params = useParams();
  const lang = params.lang as string;
  const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  // La lógica para construir la URL ahora es más fiable
  const finalHref = !isExternal && lang ? `/${lang}${href}` : href;

  return (
    <Link href={finalHref} {...linkProps} onClick={onClick} className={cn("font-medium text-white transition-colors hover:text-gray-200", className)}>
      {label}
    </Link>
  );
};

// 💡 3. Los dropdowns ya no necesitan recibir ni pasar el idioma
const DesktopDropdown = ({ link }: { link: any }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
       <Button variant="ghost" className="flex items-center gap-1 font-medium text-white transition-colors hover:text-gray-200 hover:bg-accent/50 px-3 py-2 h-auto">
        {link.label}
        <ChevronDown className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <div className="flex flex-col gap-2 p-1">
        {link.items?.map((item:any) => (
          <DropdownMenuItem key={item.label} asChild>
            <NavLink href={item.href} label={item.label} isExternal={item.isExternal} className="w-full text-left justify-start" />
          </DropdownMenuItem>
        ))}
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
);

const MobileDropdown = ({ link, closeMenu }: { link: any, closeMenu: () => void }) => (
  <Accordion type="single" collapsible className="w-full" disabled={!link.items || link.items.length === 0}>
    <AccordionItem value={link.label} className="border-b-0">
      <AccordionTrigger className="text-lg font-medium text-white transition-colors hover:text-gray-200 hover:no-underline py-2">
        <span className="w-full text-left">{link.label}</span>
      </AccordionTrigger>
      <AccordionContent className="pt-2 pl-4">
        <nav className="flex flex-col gap-4">
          {link.items?.map((item:any) => (
             <NavLink key={item.label} href={item.href} label={item.label} isExternal={item.isExternal} onClick={closeMenu} />
          ))}
        </nav>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// 💡 4. El Header ya no necesita la propiedad lang
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation(); 
  const params = useParams();
  const lang = params.lang as string;
  const navLinks = getNavLinks(t);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* El enlace del logo también usa el idioma del hook */}
        <Link href={`/${lang}`} className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Image src="/images/logo-toquero-sport.png" alt="Toquero Sport Academy" width={32} height={32} className="h-8 w-auto" />
          <span className="font-headline text-xl font-bold text-white">
            TOQUERO SPORT ACADEMY
          </span>
        </Link>
        
        {isClient && (
          <div className='flex items-center gap-2'> 
            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => 
                link.isDropdown 
                  ? <DesktopDropdown key={link.label} link={link} />
                  : <Button key={link.href} variant="ghost" asChild className="font-medium text-white px-3 py-2 h-auto"><NavLink href={link.href!} label={link.label} /></Button>
              )}
            </nav>

            <LanguageSwitcher />

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">{t('Navigation.OpenMenu')}</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-background p-0">
                    <SheetHeader className="p-6 border-b">
                       <SheetTitle className="text-lg font-semibold text-left">{t('Navigation.MenuTitle')}</SheetTitle>
                    </SheetHeader>
                  <div className="flex h-full flex-col pt-0 p-6">
                    <nav className="flex flex-col items-start gap-2">
                      {navLinks.map((link) => 
                        link.isDropdown
                          ? <MobileDropdown key={link.label} link={link} closeMenu={closeMobileMenu} />
                          : <NavLink key={link.href} href={link.href!} label={link.label} onClick={closeMobileMenu} className="w-full py-2 text-lg" />
                      )}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
