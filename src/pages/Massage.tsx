import ServicePage from "./ServicePage";
import massageImg from "@/assets/massage.jpg";

const Massage = () => {
  return (
    <ServicePage
      title="Massage à domicile"
      description="Offrez-vous un moment de détente absolue avec nos masseurs professionnels. Massage relaxant, sportif ou thérapeutique, chaque séance est adaptée à vos besoins pour un bien-être optimal dans votre environnement familier."
      image={massageImg}
      benefits={[
        "Masseurs diplômés et certifiés",
        "Table de massage professionnelle fournie",
        "Huiles et produits de qualité premium",
        "Ambiance relaxante créée sur place",
      ]}
      prestations={[
        "Massage relaxant suédois",
        "Massage sportif et récupération",
        "Massage thérapeutique ciblé",
        "Massage aux pierres chaudes",
        "Massage aromathérapie",
        "Réflexologie plantaire",
        "Massage pour femmes enceintes",
      ]}
    />
  );
};

export default Massage;
