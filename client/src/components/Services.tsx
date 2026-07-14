import { Card } from "@/components/ui/card";
import { CreditCard, RotateCcw, Edit, AlertCircle } from "lucide-react";

/**
 * Services Section
 * Design: Grid of 4 healthcare service cards with icons, descriptions, and hover effects.
 * Features: Create, Modify, Replace, and Access Issue services.
 */

const services = [
  {
    icon: CreditCard,
    title: "Create New Healthcare Card",
    description: "Apply for a new healthcare card quickly and securely with our AI-assisted process.",
  },
  {
    icon: Edit,
    title: "Modify Card Information",
    description: "Update your personal information and card details with ease and security.",
  },
  {
    icon: AlertCircle,
    title: "Access Related Issues",
    description: "Report and resolve access-related issues with dedicated support.",
  },
  {
    icon: RotateCcw,
    title: "Replace Lost or Damaged Card",
    description: "Report a lost or damaged card and get a replacement delivered promptly.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Healthcare Card Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your healthcare card with ease through our comprehensive services
          </p>
        </div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
