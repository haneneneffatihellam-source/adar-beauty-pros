import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  link: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-xl transition-all duration-500 h-full rounded-2xl">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay dégradé */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          
          {/* Contenu */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
            <h3 className="font-serif text-2xl md:text-3xl mb-3">
              {title}
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
              {description}
            </p>
            <button className="self-start px-6 py-3 bg-background/90 hover:bg-background text-foreground rounded-full font-medium transition-all group-hover:scale-105 text-sm">
              Découvrir →
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
