const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">Artful Advisors</h3>
              <div className="text-xs uppercase tracking-wider -mt-1 text-gray-400">Consulting</div>
            </div>
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
              <li>info@artfuladvisors.com</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Legal Notice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-center md:text-left">
              &copy; 2024 Artful Advisors. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Cookie Settings</a>
              <a href="#" className="hover:text-accent transition-colors">GDPR Compliance</a>
              <a href="#" className="hover:text-accent transition-colors">Data Protection</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;