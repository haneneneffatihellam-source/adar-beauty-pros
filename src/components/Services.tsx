import { Scissors, Palette, Hand, HeartPulse, Sparkles, PartyPopper } from "lucide-react";
import ServiceCard from "./ServiceCard";
import coiffureImg from "@/assets/coiffure.jpg";
import maquillageImg from "@/assets/maquillage.jpg";
import onglesImg from "@/assets/ongles.jpg";
import massageImg from "@/assets/massage.jpg";
import soinsImg from "@/assets/soins-visage.jpg";
import evenementsImg from "@/assets/evenements.jpg";

const Services = () => {
  const services = [
    {
      title: "Coiffure",
      description: "Coupe, brushing, coloration, chignons... Nos coiffeuses expertes subliment votre chevelure.",
      icon: Scissors,
      image: coiffureImg,
      link: "/coiffure",
    },
    {
      title: "Maquillage",
      description: "Maquillage jour, soirée ou professionnel. Révélez votre beauté naturelle.",
      icon: Palette,
      image: maquillageImg,
      link: "/maquillage",
    },
    {
      title: "Ongles",
      description: "Manucure, pédicure, pose de vernis semi-permanent et nail art créatif.",
      icon: Hand,
      image: onglesImg,
      link: "/ongles",
    },
    {
      title: "Massage",
      description: "Massage relaxant, sportif ou thérapeutique pour votre bien-être absolu.",
      icon: HeartPulse,
      image: massageImg,
      link: "/massage",
    },
    {
      title: "Soins",
      description: "Nettoyage de peau, hydratation, anti-âge... Des soins sur-mesure pour votre peau.",
      icon: Sparkles,
      image: soinsImg,
      link: "/soins",
    },
    {
      title: "Événements",
      description: "Mariage, anniversaire, soirée... Nous vous préparons pour vos occasions spéciales.",
      icon: PartyPopper,
      image: evenementsImg,
      link: "/evenements",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos services beauté</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des prestations complètes réalisées par des professionnels certifiés, dans le confort de votre domicile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
