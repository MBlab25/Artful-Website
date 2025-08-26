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
    servicesTitle: 'Our Expertise',
    servicesSubtitle: 'We provide comprehensive consulting services across four key areas to help your business thrive in today\'s competitive landscape.',
    marketingStrategy: 'Marketing Strategy',
    marketingDescription: 'Comprehensive marketing strategies that drive growth, increase brand awareness, and generate qualified leads for your business.',
    digitalMarketing: 'Digital Marketing',
    contentStrategy: 'Content Strategy',
    seoOptimization: 'SEO Optimization',
    socialMediaManagement: 'Social Media Management',
    
    brandingIdentity: 'Branding & Identity',
    brandingDescription: 'Create a powerful brand identity that resonates with your target audience and sets you apart from the competition.',
    brandStrategy: 'Brand Strategy',
    visualIdentity: 'Visual Identity',
    logoDesign: 'Logo Design',
    brandGuidelines: 'Brand Guidelines',
    
    designManagement: 'Design Management',
    designDescription: 'Streamline your design processes and create cohesive visual experiences across all customer touchpoints.',
    designSystems: 'Design Systems',
    uxuiStrategy: 'UX/UI Strategy',
    creativeOperations: 'Creative Operations',
    brandConsistency: 'Brand Consistency',
    
    financialPlanning: 'Financial Planning',
    financialDescription: 'Strategic financial guidance to optimize your business operations, manage cash flow, and plan for sustainable growth.',
    financialAnalysis: 'Financial Analysis',
    budgetPlanning: 'Budget Planning',
    investmentStrategy: 'Investment Strategy',
    riskManagement: 'Risk Management',
    
    // About
    aboutTitle: 'Why Choose Artful Advisors?',
    aboutDescription: 'We don\'t just give advice – we partner with you to create artful solutions that drive real results. Our unique blend of creative thinking and strategic expertise helps businesses not just grow, but flourish with distinction.',
    artfulStrategy: 'Artful Strategy',
    artfulStrategyDesc: 'We blend creative thinking with analytical precision to craft strategies that are both innovative and practical, ensuring your business stands out beautifully.',
    completeSolutions: 'Complete Solutions',
    completeSolutionsDesc: 'From marketing and branding to design and finance, we provide comprehensive solutions that work together seamlessly to elevate every aspect of your business.',
    personalPartnership: 'Personal Partnership',
    personalPartnershipDesc: 'You\'re not just another client – we invest in your success as true partners, providing dedicated attention and customized solutions for your unique vision.',
    
    // Contact
    contactTitle: 'Let\'s Start Your',
    contactSubtitle: 'Journey',
    contactDescription: 'Ready to transform your business? Get in touch with our expert consultants and discover how we can help you achieve your goals.',
    emailUsNow: 'Email Us Now',
    
    // Footer
    footerServices: 'Services',
    footerCompany: 'Company',
    footerContact: 'Contact',
    footerLegal: 'Legal',
    ourProcess: 'Our Process',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    legalNotice: 'Legal Notice',
    allRightsReserved: 'All rights reserved.',
    cookieSettings: 'Cookie Settings',
    gdprCompliance: 'GDPR Compliance',
    dataProtection: 'Data Protection',
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
    servicesTitle: 'Nuestra Experiencia',
    servicesSubtitle: 'Ofrecemos servicios de consultoría integral en cuatro áreas clave para ayudar a tu negocio a prosperar en el panorama competitivo actual.',
    marketingStrategy: 'Estrategia de Marketing',
    marketingDescription: 'Estrategias de marketing integrales que impulsan el crecimiento, aumentan el conocimiento de marca y generan clientes potenciales calificados para tu negocio.',
    digitalMarketing: 'Marketing Digital',
    contentStrategy: 'Estrategia de Contenido',
    seoOptimization: 'Optimización SEO',
    socialMediaManagement: 'Gestión de Redes Sociales',
    
    brandingIdentity: 'Branding e Identidad',
    brandingDescription: 'Crea una identidad de marca poderosa que resuene con tu audiencia objetivo y te distinga de la competencia.',
    brandStrategy: 'Estrategia de Marca',
    visualIdentity: 'Identidad Visual',
    logoDesign: 'Diseño de Logo',
    brandGuidelines: 'Guías de Marca',
    
    designManagement: 'Gestión de Diseño',
    designDescription: 'Optimiza tus procesos de diseño y crea experiencias visuales cohesivas en todos los puntos de contacto con el cliente.',
    designSystems: 'Sistemas de Diseño',
    uxuiStrategy: 'Estrategia UX/UI',
    creativeOperations: 'Operaciones Creativas',
    brandConsistency: 'Consistencia de Marca',
    
    financialPlanning: 'Planificación Financiera',
    financialDescription: 'Orientación financiera estratégica para optimizar las operaciones de tu negocio, gestionar el flujo de caja y planificar un crecimiento sostenible.',
    financialAnalysis: 'Análisis Financiero',
    budgetPlanning: 'Planificación de Presupuesto',
    investmentStrategy: 'Estrategia de Inversión',
    riskManagement: 'Gestión de Riesgos',
    
    // About
    aboutTitle: '¿Por Qué Elegir Artful Advisors?',
    aboutDescription: 'No solo damos consejos: nos asociamos contigo para crear soluciones ingeniosas que generen resultados reales. Nuestra combinación única de pensamiento creativo y experiencia estratégica ayuda a las empresas no solo a crecer, sino a florecer con distinción.',
    artfulStrategy: 'Estrategia Ingeniosa',
    artfulStrategyDesc: 'Combinamos el pensamiento creativo con la precisión analítica para crear estrategias que son tanto innovadoras como prácticas, asegurando que tu negocio destaque bellamente.',
    completeSolutions: 'Soluciones Completas',
    completeSolutionsDesc: 'Desde marketing y branding hasta diseño y finanzas, proporcionamos soluciones integrales que funcionan juntas sin problemas para elevar cada aspecto de tu negocio.',
    personalPartnership: 'Asociación Personal',
    personalPartnershipDesc: 'No eres solo otro cliente: invertimos en tu éxito como verdaderos socios, brindando atención dedicada y soluciones personalizadas para tu visión única.',
    
    // Contact
    contactTitle: 'Hablemos de tu',
    contactSubtitle: 'proyecto',
    contactDescription: '¿Listo para transformar tu negocio? Ponte en contacto con nuestros consultores expertos y descubre cómo podemos ayudarte a lograr tus objetivos.',
    emailUsNow: 'Escríbenos Ahora',
    
    // Footer
    footerServices: 'Servicios',
    footerCompany: 'Empresa',
    footerContact: 'Contacto',
    footerLegal: 'Legal',
    ourProcess: 'Nuestro Proceso',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    cookiePolicy: 'Política de Cookies',
    legalNotice: 'Aviso Legal',
    allRightsReserved: 'Todos los derechos reservados.',
    cookieSettings: 'Configuración de Cookies',
    gdprCompliance: 'Cumplimiento GDPR',
    dataProtection: 'Protección de Datos',
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