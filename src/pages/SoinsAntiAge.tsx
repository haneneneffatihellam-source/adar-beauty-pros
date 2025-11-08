import ServicePage from "./ServicePage";
import soinsImg from "@/assets/soins-visage.jpg";

const SoinsAntiAge = () => {
  return (
    <ServicePage
      title="Soins anti-âge & raffermissants"
      description="Luttez contre les signes du temps avec nos soins anti-âge professionnels. Protocoles raffermissants, liftants et régénérants pour retrouver une peau tonique, lisse et rajeunie."
      image={soinsImg}
      benefits={[
        "Esthéticiennes expertes en soins anti-âge",
        "Produits à base de rétinol et peptides",
        "Techniques de massage liftant",
        "Résultats visibles dès la première séance",
      ]}
      prestations={[
        "Nettoyage et préparation de la peau",
        "Peeling doux anti-âge",
        "Sérum concentré anti-rides",
        "Masque collagène et élastine",
        "Massage liftant japonais",
        "Soin contour yeux anti-âge",
        "Crème raffermissante haute performance",
      ]}
    />
  );
};

export default SoinsAntiAge;
