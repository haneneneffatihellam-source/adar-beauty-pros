const HowItWorks = () => {
  const columns = [
    {
      title: "DE QUOI AVEZ-VOUS ENVIE ?",
      text: "Une manucure ? Un brushing ? Un lissage ?\nUn maquillage pour une soirée ?\nDécouvrez tous nos services beauté à domicile\net choisissez ce qui vous fait plaisir.",
      link: "Voir tous nos services",
      href: "#services-section"
    },
    {
      title: "ON LE FAIT QUAND ?",
      text: "Demain matin ? Après le travail ?\nOu ce weekend entre amies ?\nSélectionnez simplement la date, l'heure\net l'adresse qui vous arrangent.",
      link: "Réserver un créneau",
      href: "#booking-section"
    },
    {
      title: "DÉTENDEZ-VOUS, ON ARRIVE !",
      text: "Votre réservation est confirmée.\nUne professionnelle certifiée se déplace chez vous\navec tout le matériel nécessaire.\nProfitez, on s'occupe de tout.",
      link: "Prendre rendez-vous",
      href: "#booking-section"
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {columns.map((column, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] mb-6 text-foreground">
                {column.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
                {column.text}
              </p>
              <a 
                href={column.href}
                onClick={(e) => handleScroll(e, column.href)}
                className="text-link hover:underline inline-block transition-all"
              >
                {column.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
