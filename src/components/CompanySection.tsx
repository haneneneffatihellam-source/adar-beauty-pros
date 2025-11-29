import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const CompanySection = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
              À propos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Qui sommes-nous ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Vidéo / Image à gauche */}
            <div className="relative group animate-fade-in">
              <div className="relative rounded-[20px] overflow-hidden shadow-elegant aspect-video bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
                <img 
                  src="/placeholder.svg" 
                  alt="À Domicile - Services beauté" 
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors">
                  <button className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Texte à droite */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                À Domicile, c'est la première plateforme tunisienne dédiée aux services beauté directement chez vous.
              </p>

              <ul className="space-y-5 text-base md:text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Simplifier</strong> l'accès aux prestations beauté professionnelles, où que vous soyez.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Révéler</strong> le talent des expertes beauté qui se déplacent à domicile.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">•</span>
                  <span className="leading-relaxed">
                    <strong className="text-foreground font-semibold">Créer</strong> une expérience fluide, sécurisée et respectueuse du temps de chacune.
                  </span>
                </li>
              </ul>

              <Link to="/a-propos">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full shadow-elegant transition-all duration-200 hover:scale-105 mt-2"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
