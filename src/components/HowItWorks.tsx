import { Search, Calendar, Phone, Home, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choisissez votre service",
      description: "Sélectionnez la prestation souhaitée.",
      icon: Search,
    },
    {
      number: "2",
      title: "Réservez votre créneau",
      description: "Calendrier interactif (type Calendly).",
      icon: Calendar,
    },
    {
      number: "3",
      title: "Diagnostic personnalisé",
      description: "Un expert beauté vous contacte pour comprendre vos besoins avant d'envoyer une professionnelle certifiée.",
      icon: Phone,
    },
    {
      number: "4",
      title: "Votre pro arrive chez vous",
      description: "Matériel & produits professionnels inclus.",
      icon: Home,
    },
    {
      number: "5",
      title: "Profitez de votre moment beauté",
      description: "Service de qualité salon dans le confort de votre foyer. 💖",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réserver votre moment beauté n'a jamais été aussi simple
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="h-full hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary mb-4">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
                  <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-gradient-primary z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            💖 Prendre RDV maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
