import { Shield, Clock, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Professionnels certifiés",
      description: "Tous nos experts sont rigoureusement sélectionnés et certifiés pour garantir des prestations de qualité.",
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Plus besoin de vous déplacer. Profitez de vos services beauté sans quitter votre domicile.",
    },
    {
      icon: Heart,
      title: "Confort absolu",
      description: "Recevez vos soins dans votre environnement familier, en toute tranquillité et intimité.",
    },
    {
      icon: Award,
      title: "Satisfaction garantie",
      description: "Notre engagement : des prestations irréprochables et un service client à votre écoute.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir À Domicile ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La beauté professionnelle, accessible à toutes, partout en Tunisie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
