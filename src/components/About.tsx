import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target } from "lucide-react";
import servicesImage from "@/assets/services-overview.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Why Choose Artful Advisors?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We don't just give advice – we partner with you to create artful solutions that 
                drive real results. Our unique blend of creative thinking and strategic expertise 
                helps businesses not just grow, but flourish with distinction.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Artful Strategy</h3>
                  <p className="text-muted-foreground">
                    We blend creative thinking with analytical precision to craft strategies that 
                    are both innovative and practical, ensuring your business stands out beautifully.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Complete Solutions</h3>
                  <p className="text-muted-foreground">
                    From marketing and branding to design and finance, we provide comprehensive 
                    solutions that work together seamlessly to elevate every aspect of your business.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Personal Partnership</h3>
                  <p className="text-muted-foreground">
                    You're not just another client – we invest in your success as true partners, 
                    providing dedicated attention and customized solutions for your unique vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={servicesImage} 
                alt="Business strategy and analytics" 
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