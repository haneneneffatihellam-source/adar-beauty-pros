import ServicePage from "./ServicePage";
import coiffureImg from "@/assets/coiffure.jpg";

const CoiffureColoration = () => {
  return (
    <ServicePage
      title="Coloration à domicile"
      description="Changez de look avec nos services de coloration professionnelle à domicile. Coloration complète, mèches, balayage... nos coloristes utilisent des produits haut de gamme pour un résultat éclatant et durable."
      image={coiffureImg}
      benefits={[
        "Coloristes certifiées et créatives",
        "Produits de coloration professionnels sans ammoniaque",
        "Test de sensibilité avant application",
        "Garantie de la tenue de la couleur",
      ]}
      prestations={[
        "Coloration complète ton sur ton",
        "Coloration permanente",
        "Mèches et balayage",
        "Tie and dye",
        "Ombré hair",
        "Retouche racines",
        "Patine et gloss",
      ]}
    />
  );
};

export default CoiffureColoration;
