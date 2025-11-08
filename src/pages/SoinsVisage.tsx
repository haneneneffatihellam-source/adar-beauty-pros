import ServicePage from "./ServicePage";
import soinsImg from "@/assets/soins-visage.jpg";

const SoinsVisage = () => {
  return (
    <ServicePage
      title="Soins visage à domicile"
      description="Prenez soin de votre peau avec nos esthéticiennes expertes. Nettoyage de peau en profondeur, soins anti-âge, hydratation... Des protocoles personnalisés pour révéler l'éclat naturel de votre visage."
      image={soinsImg}
      benefits={[
        "Esthéticiennes diplômées et spécialisées",
        "Produits cosmétiques professionnels",
        "Diagnostic de peau personnalisé",
        "Protocoles adaptés à votre type de peau",
      ]}
      prestations={[
        "Nettoyage de peau profond",
        "Soin hydratant intensif",
        "Soin anti-âge et raffermissant",
        "Soin éclat et anti-taches",
        "Gommage et peeling doux",
        "Masque purifiant ou nourrissant",
        "Épilation visage (sourcils, lèvre)",
      ]}
    />
  );
};

export default SoinsVisage;
