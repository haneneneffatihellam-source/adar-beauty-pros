import { Globe, UserCheck, Sparkles } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Disponible partout en Tunisie",
      description: "Nos professionnelles se déplacent dans toutes les régions, 7j/7."
    },
    {
      icon: UserCheck,
      title: "Professionnelles certifiées",
      description: "Formées, sélectionnées et expertes dans leurs métiers."
    },
    {
      icon: Sparkles,
      title: "Matériel & produits inclus",
      description: "Votre prestataire apporte tout le nécessaire pour votre prestation."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#F2AEC9] via-[#F3B7D0] to-[#F4C6D8]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <p className="text-white font-semibold uppercase tracking-[0.2em] text-sm">
              Nos atouts
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group">
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-105 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-white font-semibold">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
