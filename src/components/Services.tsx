import ServiceCard from "./ServiceCard";
import { Scissors, Sparkles, Heart, Droplet, Palette } from "lucide-react";
import coiffureImg from "@/assets/coiffure.jpg";
import onglesImg from "@/assets/ongles.jpg";
import soinsImg from "@/assets/soins-visage.jpg";
import epilationImg from "@/assets/epilation.jpg";
import maquillageImg from "@/assets/maquillage.jpg";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Coiffure",
      description: "Coupe, brushing, coloration, lissage, chignons... Nos coiffeuses viennent avec tout le matériel professionnel.",
      icon: Scissors,
      image: coiffureImg,
      link: "/coiffure",
    },
    {
      title: "Onglerie",
      description: "Manucure, pédicure, nail art, pose de gel... Des ongles parfaits sans quitter votre domicile.",
      icon: Sparkles,
      image: onglesImg,
      link: "/ongles",
    },
    {
      title: "Soins",
      description: "Soins du visage, des mains, des pieds et du corps. Une peau éclatante et soignée à domicile.",
      icon: Heart,
      image: soinsImg,
      link: "/soins",
    },
    {
      title: "Épilation",
      description: "Cire chaude ou orientale, toutes zones. Une peau douce et nette réalisée par des esthéticiennes expérimentées.",
      icon: Droplet,
      image: epilationImg,
      link: "/epilation",
    },
    {
      title: "Maquillage",
      description: "Maquillage jour, soirée, mariée... Nos maquilleuses révèlent votre beauté pour toutes occasions.",
      icon: Palette,
      image: maquillageImg,
      link: "/maquillage",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos services beauté
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des prestations professionnelles réalisées chez vous par des experts certifiés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            💖 Prendre RDV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
