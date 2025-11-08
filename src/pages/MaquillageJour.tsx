import ServicePage from "./ServicePage";
import maquillageImg from "@/assets/maquillage.jpg";

const MaquillageJour = () => {
  return (
    <ServicePage
      title="Maquillage Jour naturel"
      description="Un maquillage frais et naturel pour illuminer votre quotidien. Nos maquilleuses révèlent votre beauté naturelle avec subtilité et élégance pour un look parfait du matin au soir."
      image={maquillageImg}
      benefits={[
        "Maquilleuses professionnelles diplômées",
        "Produits de maquillage hypoallergéniques",
        "Techniques adaptées à votre teint",
        "Résultat naturel et lumineux",
      ]}
      prestations={[
        "Teint unifié et naturel",
        "Maquillage nude",
        "Maquillage bureau discret",
        "Maquillage déjeuner",
        "BB glow naturel",
        "Correction des cernes",
        "Sublimation sourcils naturels",
      ]}
    />
  );
};

export default MaquillageJour;
