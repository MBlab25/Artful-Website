import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LegalModal from "./LegalModals";

const Footer = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'cookies' | 'legal-notice' | null>(null);

  const openModal = (type: 'privacy' | 'terms' | 'cookies' | 'legal-notice') => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footerServices')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{t('marketingStrategy')}</li>
              <li>{t('brandingIdentity')}</li>
              <li>{t('designManagement')}</li>
              <li>{t('financialPlanning')}</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footerCompany')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{t('about')}</li>
              <li>{t('ourProcess')}</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footerContact')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a 
                  href="mailto:info@artfuladvisors.com" 
                  className="hover:text-accent transition-colors"
                >
                  info@artfuladvisors.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footerLegal')}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><button onClick={() => openModal('privacy')} className="hover:text-accent transition-colors text-left">{t('privacyPolicy')}</button></li>
              <li><button onClick={() => openModal('terms')} className="hover:text-accent transition-colors text-left">{t('termsOfService')}</button></li>
              <li><button onClick={() => openModal('cookies')} className="hover:text-accent transition-colors text-left">{t('cookiePolicy')}</button></li>
              <li><button onClick={() => openModal('legal-notice')} className="hover:text-accent transition-colors text-left">{t('legalNotice')}</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-center md:text-left">
              &copy; 2024 Artful Advisors. {t('allRightsReserved')}
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-primary-foreground/60">
              <button onClick={() => openModal('cookies')} className="hover:text-accent transition-colors">{t('cookieSettings')}</button>
              <button onClick={() => openModal('privacy')} className="hover:text-accent transition-colors">{t('gdprCompliance')}</button>
              <button onClick={() => openModal('privacy')} className="hover:text-accent transition-colors">{t('dataProtection')}</button>
            </div>
          </div>
        </div>
      </div>
      
      {activeModal && (
        <LegalModal 
          type={activeModal} 
          isOpen={true} 
          onClose={closeModal} 
        />
      )}
    </footer>
  );
};

export default Footer;