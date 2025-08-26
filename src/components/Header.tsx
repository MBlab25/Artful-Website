import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/artful-advisors-new-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7246f0a2-2cc5-4afe-ac34-88887961ffd6.png"
              alt="Artful Advisors Logo" 
              className="w-24 h-24"
            />
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-primary tracking-tight">Artful Advisors</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider -mt-1">Consulting</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;