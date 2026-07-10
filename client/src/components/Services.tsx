import { Card } from "@/components/ui/card";
import { CreditCard, RotateCcw, Edit, CheckCircle } from "lucide-react";

/**
 * Services Section
 * Design: Grid of service cards with icons, descriptions, and hover effects.
 * Features: Four main healthcare card services with smooth interactions.
 */

const services = [
  {
    icon: CreditCard,
    title: "Create New Healthcare Card",
    description: "Apply for a new healthcare card quickly and securely with our AI-assisted process.",
  },
  {
    icon: RotateCcw,
    title: "Replace Lost or Damaged Card",
    description: "Report a lost or damaged card and get a replacement delivered to you promptly.",
  },
  {
    icon: Edit,
    title: "Modify Card Information",
    description: "Update your personal information and card details with ease and security.",
  },
  {
    icon: CheckCircle,
    title: "Track Card Status",
    description: "Monitor your card application and delivery status in real-time.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your healthcare card in one place
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
