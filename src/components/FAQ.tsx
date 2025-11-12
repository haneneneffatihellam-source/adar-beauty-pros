import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment réserver un service ?",
      answer: "C'est très simple ! Choisissez votre service, sélectionnez la date et l'heure qui vous conviennent, indiquez votre adresse et validez votre réservation. Vous recevrez une confirmation par SMS et email."
    },
    {
      question: "Les professionnels sont-ils certifiés ?",
      answer: "Oui, absolument. Tous nos professionnels sont soigneusement sélectionnés, diplômés et expérimentés. Nous vérifions leurs certifications et leurs antécédents avant de les intégrer à notre plateforme."
    },
    {
      question: "Dans quelles villes êtes-vous disponibles ?",
      answer: "Nous sommes actuellement présents dans 24 villes en Tunisie, incluant Tunis, Sfax, Sousse, Monastir, Nabeul, Bizerte et bien d'autres. Nous continuons d'étendre notre couverture régulièrement."
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer: "Nous acceptons le paiement en espèces à la fin de la prestation, ainsi que les paiements par carte bancaire en ligne lors de la réservation. Vous pouvez choisir l'option qui vous convient le mieux."
    },
    {
      question: "Puis-je annuler ou modifier ma réservation ?",
      answer: "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 24 heures avant l'heure prévue sans frais. Pour les annulations dans un délai plus court, des frais peuvent s'appliquer."
    },
    {
      question: "Le matériel est-il fourni par le professionnel ?",
      answer: "Oui, nos professionnels arrivent avec tout le matériel et les produits nécessaires pour réaliser votre prestation dans les meilleures conditions. Vous n'avez rien à préparer."
    },
    {
      question: "Comment devenir professionnel partenaire ?",
      answer: "Si vous êtes un professionnel de la beauté certifié, vous pouvez créer un compte professionnel (B2B) sur notre plateforme. Notre équipe examinera votre candidature et vous contactera dans les 48 heures."
    },
    {
      question: "Proposez-vous des forfaits pour événements ?",
      answer: "Oui ! Nous proposons des forfaits spéciaux pour mariages, soirées, enterrements de vie de jeune fille et autres événements. Contactez-nous pour recevoir un devis personnalisé."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Toutes les réponses à vos questions sur nos services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
