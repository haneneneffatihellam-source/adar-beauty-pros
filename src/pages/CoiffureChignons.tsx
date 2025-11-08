import ServicePage from "./ServicePage";
import coiffureImg from "@/assets/coiffure.jpg";

const CoiffureChignons = () => {
  return (
    <ServicePage
      title="Chignons & Coiffures de soirée"
      description="Pour vos occasions spéciales, confiez votre coiffure à nos expertes. Chignons élégants, tresses sophistiquées, coiffures de mariée... un savoir-faire artistique pour vous rendre inoubliable."
      image={coiffureImg}
      benefits={[
        "Coiffeuses spécialisées en coiffures événementielles",
        "Portfolio de styles variés",
        "Essai préalable possible pour les mariées",
        "Tenue garantie toute la journée/soirée",
      ]}
      prestations={[
        "Chignon bas classique",
        "Chignon haut sophistiqué",
        "Tresse cascade",
        "Tresse couronne",
        "Coiffure bohème",
        "Coiffure mariée complète",
        "Demi-queue travaillée",
      ]}
    />
  );
};

export default CoiffureChignons;
