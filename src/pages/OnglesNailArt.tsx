import ServicePage from "./ServicePage";
import onglesImg from "@/assets/ongles.jpg";

const OnglesNailArt = () => {
  return (
    <ServicePage
      title="Nail Art & Extensions"
      description="Exprimez votre créativité avec notre service de nail art sur-mesure. Extensions, décors, paillettes, strass... nos artistes créent des ongles uniques qui reflètent votre personnalité."
      image={onglesImg}
      benefits={[
        "Artistes nail art créatives et talentueuses",
        "Portfolio de designs variés",
        "Possibilité de modèle personnalisé",
        "Produits gel de qualité professionnelle",
      ]}
      prestations={[
        "Extensions d'ongles en gel",
        "Extensions en résine",
        "Nail art décoratif",
        "Pose de strass et paillettes",
        "Décors floraux et géométriques",
        "Ongles en gel couleur",
        "Baby boomer et déco french",
      ]}
    />
  );
};

export default OnglesNailArt;
