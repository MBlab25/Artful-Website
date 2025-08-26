import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/93aa5acc-a35d-47db-adcf-f322d9c48f99.png"
              alt="Artful Advisors Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('services')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('about')}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('contact')}
            </a>
          </nav>
          
          {/* Desktop Language Dropdown + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors font-medium p-2 rounded-lg hover:bg-muted/50"
              >
                <Globe size={18} />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
              </button>
              
              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-border/20 z-10">
                  <div className="py-2">
                    <button
                      onClick={() => toggleLanguage('es')}
                      className={`w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors flex items-center space-x-2 ${language === 'es' ? 'bg-muted text-primary font-medium' : ''}`}
                    >
                      <span>🇪🇸</span>
                      <span>Español</span>
                    </button>
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`w-full text-left px-4 py-2 hover:bg-muted/50 transition-colors flex items-center space-x-2 ${language === 'en' ? 'bg-muted text-primary font-medium' : ''}`}
                    >
                      <span>🇺🇸</span>
                      <span>English</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('services')}
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('about')}
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;