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

const ServiceCard = ({ title, description, icon: Icon, image, link }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden hover:shadow-soft transition-all duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-soft">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceCard;
