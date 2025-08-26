import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            {t('contactTitle')}{' '}
            <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              {t('contactSubtitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            {t('contactDescription')}
          </p>
          
          <div className="space-y-6">
            <Button 
              variant="hero" 
              size="lg"
              className="text-xl px-12 py-6 h-16 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.location.href = 'mailto:info@artfuladvisors.com'}
            >
              {t('emailUsNow')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;