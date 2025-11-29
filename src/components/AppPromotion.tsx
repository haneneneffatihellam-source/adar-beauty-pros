import { Apple, Smartphone } from "lucide-react";

const AppPromotion = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-primary/80 to-accent shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left: Text & Buttons */}
            <div className="text-white space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
                Plus simple avec l'application
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Réservez, modifiez ou annulez vos prestations beauté où que vous soyez, en toute simplicité.
              </p>
              
              {/* Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center gap-3 bg-foreground/90 hover:bg-foreground text-background px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-sm">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Télécharger dans</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-3 bg-foreground/90 hover:bg-foreground text-background px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-sm">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponible sur</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Right: App Visual */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-fade-in">
                <Smartphone className="w-24 h-24 md:w-32 md:h-32 text-white/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
