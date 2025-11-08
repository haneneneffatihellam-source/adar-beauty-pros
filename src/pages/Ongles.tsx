import ServicePage from "./ServicePage";
import onglesImg from "@/assets/ongles.jpg";

const Ongles = () => {
  return (
    <ServicePage
      title="Manucure & Pédicure à domicile"
      description="Des mains et pieds parfaitement soignés sans bouger de chez vous. Nos prothésistes ongulaires viennent à domicile avec tout l'équipement nécessaire pour des soins professionnels et relaxants."
      image={onglesImg}
      benefits={[
        "Prothésistes ongulaires certifiées",
        "Matériel stérilisé et hygiénique",
        "Large choix de couleurs et designs",
        "Respect des normes sanitaires strictes",
      ]}
      prestations={[
        "Manucure classique ou spa",
        "Pédicure médicale et esthétique",
        "Pose de vernis semi-permanent (gel)",
        "Nail art et décoration d'ongles",
        "Extension d'ongles (gel, résine)",
        "Renforcement des ongles naturels",
        "Soins des cuticules et des mains",
      ]}
    />
  );
};

export default Ongles;
