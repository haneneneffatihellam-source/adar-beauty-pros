import ServicePageTemplate from "@/components/ServicePageTemplate";
import coiffureImg from "@/assets/coiffure.jpg";
import soinsImg from "@/assets/soins-visage.jpg";
import massageImg from "@/assets/massage.jpg";

const CoiffureLissage = () => {
  return (
    <ServicePageTemplate
      title="Lissage brésilien à domicile"
      category="Coiffure à domicile"
      image={coiffureImg}
      price="À partir de 180 TND (Paiement sécurisé après la session)"
      rating="★ 4,9/5 – 132 avis vérifiés"
      duration="2h30 à 3h selon la longueur"
      description="Offrez à vos cheveux le meilleur du lissage à domicile. Nos professionnelles certifiées utilisent des produits de haute qualité pour un résultat durable, souple et brillant, sans abîmer la fibre capillaire. Le tout, sans quitter votre confort."
      highlights={[
        "Produits professionnels vegan & sans formol",
        "Résultat durable jusqu'à 3 mois",
        "Adapté à tous types de cheveux",
        "Diagnostic personnalisé avant prestation",
      ]}
      faqs={[
        {
          question: "Quels produits sont utilisés pour le lissage ?",
          answer: "Nous utilisons uniquement des produits professionnels de haute qualité, vegan et sans formol. Les produits sont adaptés selon votre type de cheveux lors du diagnostic personnalisé.",
        },
        {
          question: "Le lissage est-il compatible avec les cheveux colorés ?",
          answer: "Oui, nos lissages sont compatibles avec les cheveux colorés. Nous prenons en compte l'historique de vos cheveux lors du diagnostic pour adapter le traitement.",
        },
        {
          question: "Combien de temps dure le résultat ?",
          answer: "Le résultat peut durer de 2 à 3 mois selon votre type de cheveux et l'entretien que vous leur apportez. Nos professionnelles vous donneront tous les conseils nécessaires.",
        },
        {
          question: "Puis-je me laver les cheveux juste après ?",
          answer: "Non, il est recommandé d'attendre 48 à 72 heures avant le premier shampoing pour garantir la meilleure tenue du lissage. Votre professionnelle vous donnera les instructions précises.",
        },
        {
          question: "Est-ce que la coiffeuse apporte son matériel ?",
          answer: "Absolument ! La professionnelle arrive avec tout le matériel professionnel nécessaire et les produits adaptés à vos cheveux.",
        },
      ]}
      relatedServices={[
        {
          title: "Brushing professionnel",
          description: "Idéal après un soin capillaire ou un lissage",
          price: "À partir de 45 TND",
          image: coiffureImg,
          link: "/coiffure/coupe-brushing",
        },
        {
          title: "Soin du visage",
          description: "Parfait pour compléter une journée bien-être",
          price: "À partir de 80 TND",
          image: soinsImg,
          link: "/soins/hydratants",
        },
        {
          title: "Head Spa",
          description: "Un moment de détente absolue pour votre cuir chevelu",
          price: "À partir de 90 TND",
          image: massageImg,
          link: "/massage",
        },
      ]}
      reviews={[
        {
          name: "Amira K.",
          rating: 5,
          comment: "Résultat incroyable ! Mes cheveux n'ont jamais été aussi lisses et brillants. La professionnelle était très à l'écoute.",
          date: "Il y a 2 semaines",
        },
        {
          name: "Leila M.",
          rating: 5,
          comment: "Service impeccable, produits de qualité et un résultat qui dure vraiment. Je recommande à 100% !",
          date: "Il y a 1 mois",
        },
        {
          name: "Sarra B.",
          rating: 4,
          comment: "Très satisfaite du résultat. Le diagnostic avant la prestation est vraiment un plus.",
          date: "Il y a 3 semaines",
        },
      ]}
    />
  );
};

export default CoiffureLissage;
