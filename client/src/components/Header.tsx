import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Professional healthcare portal header with logo and navigation.
 * Design: Clean, minimal, professional with healthcare blue accent.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Medical cross + chat bubble merged */}
              <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
              <path d="M12 6v12M6 12h12" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Healthcare Card</h1>
            <p className="text-xs text-muted-foreground">Portal</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#benefits"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Benefits
          </a>
          <a
            href="#support"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Support
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-secondary/50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#home"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#support"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
