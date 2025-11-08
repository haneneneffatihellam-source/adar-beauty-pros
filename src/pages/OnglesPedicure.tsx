import ServicePage from "./ServicePage";
import onglesImg from "@/assets/ongles.jpg";

const OnglesPedicure = () => {
  return (
    <ServicePage
      title="Pédicure à domicile"
      description="Offrez à vos pieds le soin qu'ils méritent. Pédicure médicale ou esthétique, nos expertes éliminent callosités et peaux mortes pour des pieds doux et soignés, avec vernis si souhaité."
      image={onglesImg}
      benefits={[
        "Pédicures médicales certifiées",
        "Matériel de podologie professionnel",
        "Soins adaptés aux problèmes spécifiques",
        "Hygiène irréprochable garantie",
      ]}
      prestations={[
        "Pédicure médicale complète",
        "Pédicure esthétique spa",
        "Traitement des callosités",
        "Élimination peaux mortes",
        "Soin des ongles incarnés",
        "Pose de vernis semi-permanent pieds",
        "Massage des pieds relaxant",
      ]}
    />
  );
};

export default OnglesPedicure;
