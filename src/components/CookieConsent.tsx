import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <Card className="bg-background border shadow-lg">
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-sm">Cookie Consent</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMinimize}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {!isMinimized && (
            <>
              <p className="text-xs text-muted-foreground mb-4">
                We use cookies to enhance your experience, analyze site traffic, and provide personalized content. 
                By continuing to use our site, you agree to our use of cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptCookies}
                  size="sm"
                  className="flex-1"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={declineCookies}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  Decline
                </Button>
              </div>
              
              <div className="mt-2">
                <a 
                  href="#privacy" 
                  className="text-xs text-muted-foreground hover:text-primary underline"
                >
                  Privacy Policy
                </a>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;