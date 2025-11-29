import { Button } from "@/components/ui/button";
import { Sparkles, Car, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-cheveux.jpg";

const HeroCheveux = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Femme avec cheveux brillants et soignés"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Enfin, donnez vie à vos cheveux{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                dès maintenant.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Brushing, coupe, lissage, soins profonds… Une professionnelle certifiée se déplace chez vous, 
              avec tout le matériel nécessaire. Profitez de la beauté sans vous déplacer.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all text-base shadow-soft hover:shadow-elegant"
                onClick={scrollToBooking}
              >
                💖 Prendre RDV
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-accent/50 transition-all text-base"
                onClick={scrollToServices}
              >
                Voir nos services cheveux
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  Professionnelles certifiées
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Car className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  À domicile, partout en Tunisie
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-3 group">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Droplets className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  Matériel & produits fournis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCheveux;
