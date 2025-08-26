import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    
    // Hero
    transformYour: 'Transform Your',
    businessSuccess: 'Business Success',
    heroDescription: 'Expert consulting in marketing, branding, design management, and finance. We help businesses achieve extraordinary growth through strategic excellence.',
    startConsultation: 'Start Your Consultation',
    scrollDown: 'Scroll Down',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive solutions for your business growth',
    
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'Professional expertise you can trust',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'Ready to transform your business?',
  },
  es: {
    // Header
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contacto',
    getStarted: 'Comenzar',
    
    // Hero
    transformYour: 'Transforma Tu',
    businessSuccess: 'Éxito Empresarial',
    heroDescription: 'Consultoría experta en marketing, branding, gestión de diseño y finanzas. Ayudamos a las empresas a lograr un crecimiento extraordinario a través de la excelencia estratégica.',
    startConsultation: 'Iniciar Tu Consultoría',
    scrollDown: 'Desplázate',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Soluciones integrales para el crecimiento de tu negocio',
    
    // About
    aboutTitle: 'Nosotros',
    aboutSubtitle: 'Experiencia profesional en la que puedes confiar',
    
    // Contact
    contactTitle: 'Contáctanos',
    contactSubtitle: '¿Listo para transformar tu negocio?',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};