import { Play } from "lucide-react";

const VideoPresentation = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              La beauté professionnelle, directement chez vous
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez comment À Domicile révolutionne les services beauté en Tunisie. 
              Nos professionnels certifiés se déplacent à votre domicile avec tout le matériel nécessaire 
              pour vous offrir une expérience de qualité salon.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Professionnels vérifiés et certifiés</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Matériel professionnel et produits de qualité</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <span className="text-foreground">Réservation en ligne simple et rapide</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-primary rounded-2xl overflow-hidden shadow-elegant">
              <div className="w-full h-full flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPresentation;
