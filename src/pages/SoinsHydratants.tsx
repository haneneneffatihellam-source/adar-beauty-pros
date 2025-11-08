import ServicePage from "./ServicePage";
import soinsImg from "@/assets/soins-visage.jpg";

const SoinsHydratants = () => {
  return (
    <ServicePage
      title="Soins hydratants intensifs"
      description="Offrez à votre peau une cure d'hydratation profonde. Nos soins hydratants redonnent confort, souplesse et éclat aux peaux déshydratées et ternes, pour un teint repulpé et lumineux."
      image={soinsImg}
      benefits={[
        "Esthéticiennes spécialisées en soins hydratants",
        "Produits à l'acide hyaluronique",
        "Protocoles adaptés à chaque saison",
        "Effet repulpant immédiat visible",
      ]}
      prestations={[
        "Nettoyage doux hydratant",
        "Sérum acide hyaluronique",
        "Masque hydratant intensif",
        "Massage hydratant du visage",
        "Application crème nourrissante",
        "Soin contour des yeux",
        "Protection SPF finale",
      ]}
    />
  );
};

export default SoinsHydratants;
