import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Palette, Settings, DollarSign } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Comprehensive marketing strategies that drive growth, increase brand awareness, and generate qualified leads for your business.",
    features: ["Digital Marketing", "Content Strategy", "SEO Optimization", "Social Media Management"]
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Create a powerful brand identity that resonates with your target audience and sets you apart from the competition.",
    features: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"]
  },
  {
    icon: Settings,
    title: "Design Management",
    description: "Streamline your design processes and create cohesive visual experiences across all customer touchpoints.",
    features: ["Design Systems", "UX/UI Strategy", "Creative Operations", "Brand Consistency"]
  },
  {
    icon: DollarSign,
    title: "Financial Planning",
    description: "Strategic financial guidance to optimize your business operations, manage cash flow, and plan for sustainable growth.",
    features: ["Financial Analysis", "Budget Planning", "Investment Strategy", "Risk Management"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive consulting services across four key areas 
            to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;