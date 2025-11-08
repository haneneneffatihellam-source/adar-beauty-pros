import ServicePage from "./ServicePage";
import maquillageImg from "@/assets/maquillage.jpg";

const MaquillageSoiree = () => {
  return (
    <ServicePage
      title="Maquillage Soirée glamour"
      description="Pour briller lors de vos soirées, faites confiance à nos maquilleuses expertes. Smoky eyes, nude sophistiqué ou look audacieux, un maquillage longue tenue qui vous mettra en valeur toute la nuit."
      image={maquillageImg}
      benefits={[
        "Maquilleuses spécialisées en maquillage soirée",
        "Produits longue tenue waterproof",
        "Éclats et paillettes pour un look festif",
        "Techniques contouring et strobing",
      ]}
      prestations={[
        "Smoky eyes classique ou coloré",
        "Maquillage nude sophistiqué",
        "Cat eye et liner graphique",
        "Lèvres glamour (rouge, nude, gloss)",
        "Contouring et highlight",
        "Faux cils pose",
        "Maquillage paillettes et strass",
      ]}
    />
  );
};

export default MaquillageSoiree;
