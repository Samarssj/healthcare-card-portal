import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component
 * Professional EXL Healthcare Card Portal header with logo and navigation.
 * Design: Clean, professional with EXL branding and CTA button.
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* EXL Logo */}
            <div className="text-2xl font-bold">
              <span className="text-primary">EXL</span>
              <span className="text-primary ml-1" style={{ fontSize: "0.6em" }}>•</span>
            </div>
            {/* Healthcare Card Portal Text */}
            <div>
              <p className="text-xs font-semibold text-foreground tracking-wide">Healthcare</p>
              <p className="text-xs font-semibold text-foreground tracking-wide">CARD PORTAL</p>
            </div>
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
            href="#services"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#expertise"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Expertise
          </a>
        </nav>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-semibold px-6"
          >
            GET STARTED
          </Button>

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
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#expertise"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expertise
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-semibold w-full"
            >
              GET STARTED
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
