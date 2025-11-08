import ServicePage from "./ServicePage";
import evenementsImg from "@/assets/evenements.jpg";

const Evenements = () => {
  return (
    <ServicePage
      title="Beauté pour événements"
      description="Pour vos moments exceptionnels, faites confiance à nos experts beauté. Mariage, fiançailles, anniversaire ou soirée de gala, nous vous préparons de la tête aux pieds pour être resplendissante lors de vos occasions spéciales."
      image={evenementsImg}
      benefits={[
        "Équipe complète de professionnels",
        "Essai préalable pour les mariées",
        "Coordination parfaite le jour J",
        "Service disponible pour groupes",
      ]}
      prestations={[
        "Prestation mariée complète (coiffure + maquillage)",
        "Préparation demoiselles d'honneur",
        "Maquillage et coiffure pour soirées",
        "Beauté pour shooting photo professionnel",
        "Forfaits groupes pour événements",
        "Service beauté à domicile pour fêtes privées",
        "Consultation et essais avant événement",
      ]}
    />
  );
};

export default Evenements;
