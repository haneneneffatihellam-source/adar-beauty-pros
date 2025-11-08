import ServicePage from "./ServicePage";
import maquillageImg from "@/assets/maquillage.jpg";

const Maquillage = () => {
  return (
    <ServicePage
      title="Maquillage à domicile"
      description="Nos maquilleuses professionnelles révèlent votre beauté naturelle pour toutes occasions. Que ce soit pour une journée de travail, une soirée ou un événement spécial, bénéficiez d'un maquillage parfaitement adapté à vos besoins."
      image={maquillageImg}
      benefits={[
        "Maquilleuses diplômées et créatives",
        "Produits de maquillage professionnels",
        "Techniques adaptées à votre morphologie",
        "Maquillage longue tenue garanti",
      ]}
      prestations={[
        "Maquillage jour naturel",
        "Maquillage soirée glamour",
        "Maquillage mariée (essai inclus)",
        "Maquillage shooting photo",
        "Cours de maquillage personnalisés",
        "Maquillage artistique et créatif",
        "Maquillage permanent (sourcils, eye-liner)",
      ]}
    />
  );
};

export default Maquillage;
