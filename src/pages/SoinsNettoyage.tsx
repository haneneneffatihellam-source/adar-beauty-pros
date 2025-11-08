import ServicePage from "./ServicePage";
import soinsImg from "@/assets/soins-visage.jpg";

const SoinsNettoyage = () => {
  return (
    <ServicePage
      title="Nettoyage de peau profond"
      description="Purifiez votre peau en profondeur avec nos soins nettoyants professionnels. Élimination des impuretés, extraction des points noirs, et oxygénation de la peau pour un teint frais et lumineux."
      image={soinsImg}
      benefits={[
        "Esthéticiennes diplômées et expérimentées",
        "Protocole adapté à votre type de peau",
        "Produits cosmétiques dermatologiques",
        "Extraction minutieuse et non agressive",
      ]}
      prestations={[
        "Démaquillage et nettoyage doux",
        "Gommage enzymatique",
        "Extraction points noirs",
        "Vaporisation et ouverture des pores",
        "Masque purifiant à l'argile",
        "Tonification et apaisement",
        "Hydratation finale",
      ]}
    />
  );
};

export default SoinsNettoyage;
