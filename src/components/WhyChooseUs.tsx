import { Card, CardContent } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const WhyChooseUs = () => {
  const comparisons = [
    {
      pain: "Je ne sais pas si la pro sera compétente.",
      solution: "Professionnelles certifiées & notées ★★★★★",
    },
    {
      pain: "Je manque de temps pour aller en salon.",
      solution: "Gain de temps & confort absolu à domicile.",
    },
    {
      pain: "J'ai peur d'un résultat aléatoire.",
      solution: "Diagnostic personnalisé avant chaque prestation.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi nous choisir</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La beauté professionnelle, accessible à toutes, partout en Tunisie
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {comparisons.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-soft transition-all">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Pain Point */}
                  <div className="p-6 bg-muted/30 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <p className="text-foreground/80 italic">{item.pain}</p>
                  </div>
                  
                  {/* Solution */}
                  <div className="p-6 bg-primary/5 flex items-center gap-4 border-l-4 border-primary">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
