import ServicePage from "./ServicePage";
import maquillageImg from "@/assets/maquillage.jpg";

const MaquillageMariee = () => {
  return (
    <ServicePage
      title="Maquillage Mariée"
      description="Le jour le plus important de votre vie mérite un maquillage parfait. Nos maquilleuses spécialisées créent un look sur-mesure qui vous sublimera du matin au soir, avec un essai préalable inclus."
      image={maquillageImg}
      benefits={[
        "Maquilleuses spécialistes mariages",
        "Essai maquillage inclus (1 à 2 semaines avant)",
        "Produits ultra longue tenue",
        "Résistant aux larmes et à la chaleur",
      ]}
      prestations={[
        "Consultation et essai maquillage",
        "Maquillage mariée complet",
        "Teint parfait HD",
        "Yeux sublimés (selon votre style)",
        "Lèvres longue tenue",
        "Retouches jour J",
        "Maquillage demoiselles d'honneur",
      ]}
    />
  );
};

export default MaquillageMariee;
