import { Card } from "@/components/ui/card";
import { Shield, Zap, Clock } from "lucide-react";

/**
 * Features Section
 * Design: Three prominent feature cards with icons and descriptions.
 * Features: Secure Verification, Fast AI Assistance, 24/7 Support.
 */

const features = [
  {
    icon: Shield,
    title: "Data-Driven Insights",
    description: "Leverage advanced analytics and AI to make informed decisions and optimize performance.",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Streamline operations with cutting-edge automation and process optimization.",
    color: "from-accent/20 to-accent/10",
  },
  {
    icon: Clock,
    title: "Customer-Centric Solutions",
    description: "Reimagine customer journeys with digital interventions that drive measurable improvements.",
    color: "from-blue-200/20 to-blue-100/10",
  },
];

export default function Features() {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose EXL</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business with EXL's data and AI-powered solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
