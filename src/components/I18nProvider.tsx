// src/components/I18nProvider.tsx

'use client'; // ¡Esto es crucial en Next.js 13+!

import React from 'react';
import '../i18n/i18n'; // Importa la configuración aquí (la carga del backend es asíncrona)
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

// Este componente funciona como un wrapper para la app.
const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export default I18nProvider;