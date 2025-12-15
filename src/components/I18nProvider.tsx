'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

// El componente ahora acepta el idioma (lang) como prop
const I18nProvider: React.FC<{ children: React.ReactNode; lang: string }> = ({ children, lang }) => {
  
  // Este efecto se ejecuta cuando el componente se monta o cuando la prop 'lang' cambia
  useEffect(() => {
    // Usamos i18n.changeLanguage() para cambiar el idioma de forma dinámica
    // Esto asegura que las traducciones se carguen para el idioma correcto
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]); // El efecto depende de 'lang', por lo que se ejecuta cada vez que cambia

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;