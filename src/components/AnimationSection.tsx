import { MapPin } from "lucide-react";

const AnimationSection = () => {
  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center animate-bounce">
            <MapPin className="w-10 h-10 text-background" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-2">
              🌍 Disponible 24h/24
            </h2>
            <p className="text-xl text-background/90">
              dans toutes les régions de Tunisie 🇹🇳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;
