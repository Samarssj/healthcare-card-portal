import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section
 * Design: Asymmetric layout with text on left, hero background on right.
 * Features: Large heading, description, dual CTAs, and generated background image.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/manus-storage/healthcare-hero-bg_f420c07b.png"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />\n      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Manage Your Healthcare Card with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI Assistance
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Get help with card creation, replacement, modifications, status tracking, and account support through our AI assistant.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                onClick={() => {
                  const messenger = document.querySelector("chat-messenger-container");
                  if (messenger) {
                    messenger.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Chat with Assistant
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative card illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-3xl" />
              <div className="relative bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Healthcare Card</p>
                    <p className="text-xs text-muted-foreground">Secure • Digital • Always Available</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">Powered by AI Assistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
