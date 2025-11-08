import ServicePage from "./ServicePage";
import onglesImg from "@/assets/ongles.jpg";

const OnglesManucure = () => {
  return (
    <ServicePage
      title="Manucure à domicile"
      description="Des mains impeccables sans bouger de chez vous. Nos prothésistes ongulaires prennent soin de vos ongles et cuticules avec des produits professionnels pour un résultat parfait et durable."
      image={onglesImg}
      benefits={[
        "Prothésistes ongulaires diplômées",
        "Matériel stérilisé à chaque prestation",
        "Large palette de couleurs tendance",
        "Respect strict des normes d'hygiène",
      ]}
      prestations={[
        "Manucure classique avec vernis",
        "Manucure spa avec gommage",
        "Pose de vernis semi-permanent",
        "Soins des cuticules",
        "Limage et polissage",
        "Massage des mains",
        "French manucure",
      ]}
    />
  );
};

export default OnglesManucure;
