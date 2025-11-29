import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const CompanySection = () => {
  return (
    <section className="py-20 bg-[#FBF5EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Vidéo / Image à gauche */}
            <div className="relative group">
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
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground font-bold">
                Qui sommes-nous ?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                À Domicile, c'est la première plateforme tunisienne dédiée aux services beauté directement chez vous.
              </p>

              <ul className="space-y-4 text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>
                    <strong className="text-foreground font-semibold">Simplifier</strong> l'accès aux prestations beauté professionnelles, où que vous soyez.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>
                    <strong className="text-foreground font-semibold">Révéler</strong> le talent des expertes beauté qui se déplacent à domicile.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>
                    <strong className="text-foreground font-semibold">Créer</strong> une expérience fluide, sécurisée et respectueuse du temps de chacune.
                  </span>
                </li>
              </ul>

              <p className="text-base text-muted-foreground italic">
                Voilà ce qui nous anime chaque jour.
              </p>

              <Link to="/a-propos">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full border-foreground/70 hover:bg-primary/10 transition-colors mt-4"
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
