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
      description: "Brushing, coupe, lissage, soins… Des prestations professionnelles à domicile, pour des cheveux sublimés sans effort.",
      icon: Scissors,
      image: coiffureImg,
      link: "/coiffure",
    },
    {
      title: "Onglerie",
      description: "Manucure russe, gel, capsules, pédicure, nail art… La beauté de vos mains & pieds directement chez vous.",
      icon: Sparkles,
      image: onglesImg,
      link: "/ongles",
    },
    {
      title: "Soins",
      description: "Hydratant, éclat, anti-âge, relaxant… Des soins visage & corps adaptés à votre peau, faits par des expertes certifiées.",
      icon: Heart,
      image: soinsImg,
      link: "/soins",
    },
    {
      title: "Épilation",
      description: "Cire chaude ou orientale, toutes zones : visage, maillot, jambes, bras... Confort & douceur à domicile.",
      icon: Droplet,
      image: epilationImg,
      link: "/epilation",
    },
    {
      title: "Maquillage",
      description: "Jour, soirée, shooting ou mariage… Un maquillage professionnel chez vous pour un look parfait.",
      icon: Palette,
      image: maquillageImg,
      link: "/maquillage",
    },
  ];

  return (
    <section id="services-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
            Nos services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Nos services beauté
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Coiffure, Onglerie, Soins, Épilation, Maquillage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
