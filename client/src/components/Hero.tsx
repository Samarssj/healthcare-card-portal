import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Hero Section
 * Design: Asymmetric layout with text on left, hero card on right.
 * Features: Large heading with color variation, description, dual CTAs, and digital health card visual with scanning animation.
 */
export default function Hero() {
  const handleScrollToChat = () => {
    const chatMessenger = document.querySelector("chat-messenger");
    if (chatMessenger) {
      chatMessenger.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Scanning line animation for healthcare automation theme
  const scanningVariants = {
    animate: {
      y: [0, 60, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Pulse animation for the status badge
  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold tracking-wide">NEXT-GEN HEALTHCARE SOLUTIONS</span>
            </div>

            {/* Headline with color variation */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Transforming</span>
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
                Healthcare Card
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Management
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              EXL combines deep domain expertise with data-led insights to reimagine your healthcare journey through intelligent automation and digital interventions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
                onClick={handleScrollToChat}
              >
                CONNECT WITH AN AGENT
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold rounded-lg border-2 border-foreground text-foreground hover:bg-foreground/5 transition-all duration-200"
              >
                OUR CAPABILITIES
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-xs text-muted-foreground tracking-wide pt-4">
              TRUSTED BY GLOBAL LEADERS
            </p>
          </div>

          {/* Right: Digital Health Card Visual */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-2xl text-white overflow-hidden">
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-white/80 tracking-wide">EXL HEALTHCARE</p>
                      <h3 className="text-2xl font-bold mt-1">Digital Health Card</h3>
                    </div>
                    <div className="w-10 h-6 bg-white/20 rounded"></div>
                  </div>

                  {/* Card Details with Scanning Animation */}
                  <div className="space-y-3 relative">
                    {/* Scanning line animation */}
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded"
                      variants={scanningVariants}
                      animate="animate"
                      style={{ top: "0px" }}
                    />
                    
                    <div className="h-3 bg-white/30 rounded w-full"></div>
                    <div className="h-3 bg-white/30 rounded w-3/4"></div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/20 flex justify-between items-end">
                    <div>
                      <p className="text-xs text-white/80">CARD MEMBER</p>
                      <p className="text-sm font-bold">VALUED CLIENT</p>
                    </div>
                    {/* Status Badge with Pulse Animation */}
                    <motion.div
                      className="bg-primary/20 rounded-full p-3 flex items-center justify-center"
                      variants={pulseVariants}
                      animate="animate"
                    >
                      <div className="text-center">
                        <p className="text-xs font-semibold">STATUS</p>
                        <p className="text-lg font-bold">99.9%</p>
                        <p className="text-xs">EFFICIENCY</p>
                      </div>
                    </motion.div>
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
