import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Clock } from "lucide-react";
import servicesImage from "@/assets/services-overview.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Target, value: "98%", label: "Success Rate" },
  { icon: Clock, value: "24/7", label: "Support" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Why Choose ConsultPro?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With over 15 years of combined expertise in business consulting, we've helped 
                hundreds of companies transform their operations, strengthen their brands, and 
                achieve sustainable growth.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Strategic Approach</h3>
                  <p className="text-muted-foreground">
                    We don't just offer solutions – we partner with you to understand your unique 
                    challenges and create customized strategies that deliver measurable results.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Proven Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team combines deep industry knowledge with cutting-edge methodologies 
                    to ensure your business stays ahead of the competition.
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
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;