import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import servicesImage from "@/assets/about-option-2.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('aboutDescription')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t('artfulStrategy')}</h3>
                  <p className="text-muted-foreground">
                    {t('artfulStrategyDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t('completeSolutions')}</h3>
                  <p className="text-muted-foreground">
                    {t('completeSolutionsDesc')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{t('personalPartnership')}</h3>
                  <p className="text-muted-foreground">
                    {t('personalPartnershipDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={servicesImage} 
                alt="Professional workspace with strategic planning materials" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;