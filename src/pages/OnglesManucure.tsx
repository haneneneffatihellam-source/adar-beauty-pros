import ServicePageTemplate from "@/components/ServicePageTemplate";
import onglesImg from "@/assets/ongles.jpg";
import soinsImg from "@/assets/soins-visage.jpg";
import maquillageImg from "@/assets/maquillage.jpg";

const OnglesManucure = () => {
  return (
    <ServicePageTemplate
      title="Manucure russe à domicile"
      category="Onglerie à domicile"
      image={onglesImg}
      price="À partir de 70 TND (Paiement sécurisé après la session)"
      rating="★ 4,8/5 – 98 avis vérifiés"
      duration="1h15"
      description="Des mains parfaites sans quitter votre domicile. Nos stylistes ongles professionnelles réalisent la manucure russe avec précision et expertise. Un résultat impeccable, des cuticules parfaitement traitées et une tenue exceptionnelle."
      highlights={[
        "Technique russe professionnelle",
        "Matériel stérilisé à usage unique",
        "Produits de qualité salon",
        "Résultat longue durée",
      ]}
      faqs={[
        {
          question: "Quelle est la différence entre manucure classique et russe ?",
          answer: "La manucure russe est une technique plus précise qui travaille en profondeur les cuticules avec des fraises électriques, offrant un résultat plus net et durable (4-5 semaines vs 2-3 semaines pour la classique).",
        },
        {
          question: "Combien de temps dure la tenue ?",
          answer: "Avec la manucure russe et un vernis semi-permanent de qualité, la tenue peut aller jusqu'à 3-4 semaines sans écaillage.",
        },
        {
          question: "Le matériel est-il stérilisé ?",
          answer: "Absolument ! Nous respectons des normes d'hygiène strictes. Les outils sont soit à usage unique, soit stérilisés selon les protocoles professionnels.",
        },
        {
          question: "Puis-je montrer une photo du style que je veux ?",
          answer: "Bien sûr ! N'hésitez pas à montrer des photos de référence à votre styliste ongles. C'est même recommandé pour obtenir exactement le résultat souhaité.",
        },
        {
          question: "Proposez-vous un combo mains + pieds ?",
          answer: "Oui ! Vous pouvez réserver une manucure et une pédicure en même temps. Contactez-nous pour un tarif préférentiel combo.",
        },
      ]}
      relatedServices={[
        {
          title: "Pédicure complète",
          description: "Des pieds parfaits et soignés",
          price: "À partir de 65 TND",
          image: onglesImg,
          link: "/ongles/pedicure",
        },
        {
          title: "Nail Art",
          description: "Sublimez vos ongles avec des designs uniques",
          price: "À partir de 15 TND (en supplément)",
          image: onglesImg,
          link: "/ongles/nail-art",
        },
        {
          title: "Soin des mains",
          description: "Hydratation et beauté pour vos mains",
          price: "À partir de 40 TND",
          image: soinsImg,
          link: "/soins",
        },
      ]}
      reviews={[
        {
          name: "Yasmine H.",
          rating: 5,
          comment: "La meilleure manucure russe que j'ai jamais eue ! Très professionnelle et un résultat qui dure vraiment.",
          date: "Il y a 1 semaine",
        },
        {
          name: "Nesrine T.",
          rating: 5,
          comment: "Impeccable ! Les cuticules sont parfaites et le vernis tient super bien. Je recommande vivement.",
          date: "Il y a 2 semaines",
        },
        {
          name: "Meriem L.",
          rating: 4,
          comment: "Très bon service, travail soigné. J'aurais juste aimé un peu plus de choix de couleurs.",
          date: "Il y a 3 semaines",
        },
      ]}
    />
  );
};

export default OnglesManucure;
