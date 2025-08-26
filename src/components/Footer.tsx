const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Artful Advisors</h3>
            <p className="text-primary-foreground/80">
              Transforming businesses through expert consulting in marketing, 
              branding, design, and finance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Marketing Strategy</li>
              <li>Branding & Identity</li>
              <li>Design Management</li>
              <li>Financial Planning</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About</li>
              <li>Our Process</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>hello@artfuladvisors.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave<br />New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Artful Advisors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;