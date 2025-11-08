import ServicePage from "./ServicePage";
import coiffureImg from "@/assets/coiffure.jpg";

const CoiffureLissage = () => {
  return (
    <ServicePage
      title="Lissage & Soins capillaires"
      description="Dites adieu aux frisottis avec nos traitements de lissage professionnel. Lissage brésilien, soins à la kératine, botox capillaire... retrouvez des cheveux lisses, brillants et en pleine santé."
      image={coiffureImg}
      benefits={[
        "Spécialistes du lissage certifiées",
        "Produits à la kératine de qualité premium",
        "Résultats durables (3 à 6 mois)",
        "Cheveux nourris et réparés en profondeur",
      ]}
      prestations={[
        "Lissage brésilien à la kératine",
        "Lissage japonais permanent",
        "Botox capillaire",
        "Soin à la kératine profond",
        "Traitement anti-frisottis",
        "Soin réparateur cheveux abîmés",
        "Masque nutritif intensif",
      ]}
    />
  );
};

export default CoiffureLissage;
