import ServicePage from "./ServicePage";
import coiffureImg from "@/assets/coiffure.jpg";

const Coiffure = () => {
  return (
    <ServicePage
      title="Coiffure à domicile"
      description="Nos coiffeuses professionnelles se déplacent chez vous avec tout le matériel nécessaire pour sublimer votre chevelure. Coupe, coloration, brushing, chignons... profitez d'un service salon dans le confort de votre foyer."
      image={coiffureImg}
      benefits={[
        "Coiffeuses diplômées et expérimentées",
        "Matériel professionnel de qualité",
        "Produits haut de gamme adaptés à votre type de cheveux",
        "Conseils personnalisés pour l'entretien",
      ]}
      prestations={[
        "Coupe femme et brushing",
        "Coloration complète ou mèches",
        "Balayage et tie and dye",
        "Soins capillaires (masques, kératine)",
        "Chignons pour occasions spéciales",
        "Lissage brésilien",
        "Extensions capillaires",
      ]}
    />
  );
};

export default Coiffure;
