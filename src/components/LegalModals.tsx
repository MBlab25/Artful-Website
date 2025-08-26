import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | 'legal-notice';
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal = ({ type, isOpen, onClose }: LegalModalProps) => {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: "Privacy Policy",
          content: (
            <div className="space-y-4 text-sm">
              <section>
                <h3 className="font-semibold mb-2">Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you contact us through our website or request our services.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>To provide and improve our consulting services</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Cookies and Tracking</h3>
                <p>We use cookies and similar technologies to analyze website traffic and improve user experience. You can control cookie settings through your browser.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Data Security</h3>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p>If you have questions about this Privacy Policy, please contact us at info@artfuladvisors.com</p>
              </section>
            </div>
          )
        };
        
      case 'terms':
        return {
          title: "Terms of Service",
          content: (
            <div className="space-y-4 text-sm">
              <section>
                <h3 className="font-semibold mb-2">Acceptance of Terms</h3>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Services</h3>
                <p>Artful Advisors provides strategic consulting services including marketing strategy, branding, design management, and financial planning.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Intellectual Property</h3>
                <p>All content, materials, and intellectual property on this website are owned by Artful Advisors and protected by applicable copyright and trademark laws.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                <p>Artful Advisors shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of our services.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Governing Law</h3>
                <p>These terms shall be governed by and construed in accordance with applicable local laws.</p>
              </section>
            </div>
          )
        };
        
      case 'cookies':
        return {
          title: "Cookie Policy",
          content: (
            <div className="space-y-4 text-sm">
              <section>
                <h3 className="font-semibold mb-2">What Are Cookies</h3>
                <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
                  <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant advertisements</li>
                </ul>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Managing Cookies</h3>
                <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
              </section>
            </div>
          )
        };
        
      case 'legal-notice':
        return {
          title: "Legal Notice",
          content: (
            <div className="space-y-4 text-sm">
              <section>
                <h3 className="font-semibold mb-2">Company Information</h3>
                <p>Artful Advisors Consulting</p>
                <p>Email: info@artfuladvisors.com</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Professional Indemnity</h3>
                <p>Our consulting services are provided with professional indemnity insurance coverage.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                <p>We comply with all applicable professional standards and regulatory requirements in our jurisdictions of operation.</p>
              </section>
              
              <section>
                <h3 className="font-semibold mb-2">Dispute Resolution</h3>
                <p>Any disputes arising from our services will be resolved through appropriate legal channels in accordance with applicable law.</p>
              </section>
            </div>
          )
        };
        
      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          {content}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;