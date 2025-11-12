import { Users, Star, MapPin, Clock } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Clientes satisfaites" },
    { icon: Star, value: "4.9/5", label: "Note moyenne" },
    { icon: MapPin, value: "24", label: "Villes couvertes" },
    { icon: Clock, value: "15 min", label: "Temps de réponse moyen" },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
