import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Ready to Transform?
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Let's Start Your
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our expert consultants 
            and discover how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-2xl backdrop-blur-sm bg-background/80">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-primary mb-2">Get In Touch</CardTitle>
              <CardDescription className="text-lg">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider">First Name</label>
                  <Input placeholder="John" className="h-12 border-2 border-border/50 focus:border-accent transition-colors" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wider">Last Name</label>
                  <Input placeholder="Doe" className="h-12 border-2 border-border/50 focus:border-accent transition-colors" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider">Email</label>
                <Input type="email" placeholder="john@company.com" className="h-12 border-2 border-border/50 focus:border-accent transition-colors" />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</label>
                <Input placeholder="Your Company Name" className="h-12 border-2 border-border/50 focus:border-accent transition-colors" />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wider">Message</label>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..."
                  className="h-40 border-2 border-border/50 focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <div className="pt-4">
                <Button variant="hero" className="w-full text-lg py-4 h-14 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Transformation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;