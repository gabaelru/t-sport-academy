// src/i18n/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

const backendConfig = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'es', 
    fallbackLng: 'en', 
    
    // 💡 AJUSTE CLAVE: Solo usamos el Namespace 'translation'
    ns: ['translation'], 
    defaultNS: 'translation', // Y lo establecemos como predeterminado
    
    backend: backendConfig,

    react: {
      useSuspense: false, 
    },
    
    debug: true // Mantenlo en 'true' para depurar
  });

export default i18n;