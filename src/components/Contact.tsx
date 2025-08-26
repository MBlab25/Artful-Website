import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@artfuladvisors.com",
      description: "Send us an email anytime"
    },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Business Ave, Suite 100\nNew York, NY 10001",
    description: "Our headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Friday: 8am - 6pm\nWeekends: By appointment",
    description: "We're here to help"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Let's Start Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our expert consultants 
            and discover how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..."
                  className="h-32"
                />
              </div>
              
              <Button variant="hero" className="w-full text-lg py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">{info.title}</h3>
                    <p className="text-foreground font-medium whitespace-pre-line mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;