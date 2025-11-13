import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            La beauté professionnelle, enfin accessible partout en Tunisie.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            À Domicile sélectionne les meilleures professionnelles pour offrir la qualité des salons, 
            directement chez vous. Découvrez notre mission et nos valeurs.
          </p>
          <Link to="/a-propos">
            <Button size="lg" variant="outline" className="text-base">
              🎬 Découvrir qui nous sommes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
