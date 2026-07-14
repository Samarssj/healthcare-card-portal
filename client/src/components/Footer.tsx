/**
 * Footer Component
 * Design: Clean, minimal footer with links and copyright.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-foreground mb-2">EXL Services: Healthcare Card Portal</h3>
            <p className="text-sm text-muted-foreground">
              Driving business forward with data and AI. Reimagine customer journeys, optimize operations, and leverage data for optimal performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#support"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} EXL Services: Healthcare Card Portal. All rights reserved.
            </p>
            <p className="mt-2">
              Powered by AI Assistant | Secure &bull; Reliable &bull; Always Available
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
