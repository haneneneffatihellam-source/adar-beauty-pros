import ServicePage from "./ServicePage";
import coiffureImg from "@/assets/coiffure.jpg";

const CoiffureCoupeBrushing = () => {
  return (
    <ServicePage
      title="Coupe & Brushing à domicile"
      description="Offrez-vous une coupe sur-mesure et un brushing professionnel sans sortir de chez vous. Nos coiffeuses expertes maîtrisent toutes les techniques de coupe et de mise en forme pour sublimer votre chevelure."
      image={coiffureImg}
      benefits={[
        "Coiffeuses diplômées avec plusieurs années d'expérience",
        "Analyse personnalisée de votre type de cheveux",
        "Conseils sur la coupe adaptée à votre morphologie",
        "Produits professionnels de coiffage inclus",
      ]}
      prestations={[
        "Coupe femme classique",
        "Coupe dégradée et effilée",
        "Frange sur-mesure",
        "Brushing lisse ou bouclé",
        "Mise en plis volumineuse",
        "Conseil et entretien capillaire",
      ]}
    />
  );
};

export default CoiffureCoupeBrushing;
