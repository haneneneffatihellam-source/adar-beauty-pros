import { Calendar, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choisissez votre service",
      description: "Sélectionnez la prestation beauté qui vous convient parmi notre large catalogue.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Sélectionnez la date et le lieu",
      description: "Choisissez votre créneau horaire et l'adresse où vous souhaitez recevoir le service.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Recevez votre professionnel",
      description: "Un expert certifié se déplace chez vous avec tout le matériel nécessaire.",
      icon: MapPin,
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="h-full hover:shadow-soft transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
