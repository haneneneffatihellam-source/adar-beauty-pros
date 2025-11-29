import ServicePageTemplate from "./ServicePageTemplate";
import coiffureImg from "@/assets/coiffure.jpg";

const CoiffureCoupeBrushing = () => {
  return (
    <ServicePageTemplate
      id="coiffure-coupe-brushing"
      title="Coupe & Brushing à domicile"
      subtitle="Offrez-vous une coupe sur-mesure et un brushing professionnel sans sortir de chez vous."
      category="Coiffure"
      image={coiffureImg}
      priceMin={45}
      durationMin="45 min"
      durationMax="1h30"
      description="Nos coiffeuses expertes maîtrisent toutes les techniques de coupe et de mise en forme pour sublimer votre chevelure. Elles analysent votre type de cheveux, votre morphologie et vos envies pour vous proposer la coupe idéale. Le brushing professionnel qui suit révèle tout l'éclat de votre nouvelle coupe, pour un résultat digne d'un salon."
      idealFor={[
        "Changer de tête sans sortir de chez vous",
        "Rafraîchir votre coupe régulièrement",
        "Un brushing pro pour une occasion spéciale",
        "Des conseils personnalisés de professionnelles"
      ]}
      youWillLove={[
        "Rendez-vous à domicile, zéro déplacement",
        "Produits professionnels de coiffage inclus",
        "Résultat immédiat et impeccable",
        "Conseils d'entretien personnalisés"
      ]}
      prestations={[
        {
          id: "coupe-femme-classique",
          name: "Coupe femme classique",
          description: "Coupe adaptée à votre morphologie et type de cheveux",
          duration: "45 min",
          price: 45
        },
        {
          id: "coupe-degradee",
          name: "Coupe dégradée et effilée",
          description: "Pour donner du volume et du mouvement",
          duration: "1h",
          price: 55
        },
        {
          id: "frange",
          name: "Frange sur-mesure",
          description: "Création ou rafraîchissement de frange",
          duration: "30 min",
          price: 25
        },
        {
          id: "brushing-lisse",
          name: "Brushing lisse",
          description: "Pour des cheveux lisses et brillants",
          duration: "45 min",
          price: 40
        },
        {
          id: "brushing-boucle",
          name: "Brushing bouclé",
          description: "Pour des boucles définies et naturelles",
          duration: "1h",
          price: 50
        },
        {
          id: "coupe-brushing-complet",
          name: "Coupe + Brushing complet",
          description: "Service complet pour un résultat parfait",
          duration: "1h30",
          price: 75
        }
      ]}
      included={[
        "Produits et matériel professionnels",
        "Analyse personnalisée de votre type de cheveux",
        "Conseils sur la coupe adaptée à votre morphologie",
        "Prestation réalisée par une coiffeuse diplômée"
      ]}
      reviews={[
        {
          name: "Salma",
          city: "Tunis",
          rating: 5,
          comment: "Prestation impeccable ! La coiffeuse était très professionnelle et à l'écoute. Je recommande vivement."
        },
        {
          name: "Nesrine",
          city: "Sfax",
          rating: 5,
          comment: "Super expérience, le brushing a tenu toute la soirée. Très pratique de ne pas avoir à se déplacer."
        },
        {
          name: "Leila",
          city: "Sousse",
          rating: 5,
          comment: "J'adore ma nouvelle coupe ! La coiffeuse a su exactement ce qui m'allait. Je referai appel à vous."
        }
      ]}
      averageRating={4.9}
      totalReviews={127}
      faqs={[
        {
          question: "Combien de temps dure la prestation ?",
          answer: "Cela dépend de la prestation choisie : de 30 minutes pour une frange à 1h30 pour une coupe complète avec brushing."
        },
        {
          question: "Que dois-je préparer avant l'arrivée de la coiffeuse ?",
          answer: "Prévoyez simplement un espace confortable avec une chaise, une prise électrique à proximité et si possible une serviette. La coiffeuse apporte tout le matériel nécessaire."
        },
        {
          question: "Les produits utilisés sont-ils adaptés à tous les types de cheveux ?",
          answer: "Oui, nos coiffeuses utilisent des produits professionnels adaptés à tous les types de cheveux : fins, épais, bouclés, colorés ou fragilisés."
        },
        {
          question: "Puis-je annuler ou déplacer mon rendez-vous ?",
          answer: "Vous pouvez annuler ou déplacer votre rendez-vous jusqu'à 24h avant. Au-delà, des frais d'annulation peuvent s'appliquer."
        },
        {
          question: "La coiffeuse peut-elle me conseiller sur ma coupe ?",
          answer: "Absolument ! Nos coiffeuses sont formées pour analyser votre visage, votre type de cheveux et vos habitudes pour vous proposer la coupe la plus adaptée."
        }
      ]}
      relatedServices={[
        {
          name: "Coloration à domicile",
          category: "Coiffure",
          price: 80,
          link: "/coiffure/coloration",
          image: coiffureImg
        },
        {
          name: "Chignons & Coiffures de soirée",
          category: "Coiffure",
          price: 60,
          link: "/coiffure/chignons",
          image: coiffureImg
        },
        {
          name: "Maquillage Jour",
          category: "Maquillage",
          price: 50,
          link: "/maquillage/jour",
          image: coiffureImg
        }
      ]}
    />
  );
};

export default CoiffureCoupeBrushing;
