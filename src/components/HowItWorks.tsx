import { Sparkles, Calendar, Heart } from "lucide-react";

const HowItWorks = () => {
  const columns = [
    {
      icon: Sparkles,
      number: "01",
      title: "DE QUOI AVEZ-VOUS ENVIE ?",
      text: "Une manucure ? Un brushing ? Un lissage ?\nUn maquillage pour une soirée ?\nDécouvrez tous nos services beauté à domicile\net choisissez ce qui vous fait plaisir.",
      link: "Voir tous nos services",
      href: "#services-section"
    },
    {
      icon: Calendar,
      number: "02",
      title: "ON LE FAIT QUAND ?",
      text: "Demain matin ? Après le travail ?\nOu ce weekend entre amies ?\nSélectionnez simplement la date, l'heure\net l'adresse qui vous arrangent.",
      link: "Réserver un créneau",
      href: "#booking-section"
    },
    {
      icon: Heart,
      number: "03",
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
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Titre et sous-texte */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
            Comment ça marche ?
          </h2>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            Réserver votre moment beauté n'a jamais été aussi simple.
            En trois étapes, profitez d'un service professionnel à domicile.
          </p>
        </div>

        {/* Les 3 colonnes */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {columns.map((column, index) => {
            const Icon = column.icon;
            return (
              <div 
                key={index} 
                className="relative text-center animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Numéro décoratif */}
                <div className="absolute -top-4 -left-4 font-serif text-6xl text-primary/10 font-bold">
                  {column.number}
                </div>
                
                {/* Icône */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Titre */}
                <h3 className="font-serif text-lg md:text-xl tracking-[0.15em] mb-4 text-foreground uppercase">
                  {column.title}
                </h3>

                {/* Texte */}
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
                  {column.text}
                </p>

                {/* Lien */}
                <a 
                  href={column.href}
                  onClick={(e) => handleScroll(e, column.href)}
                  className="font-sans text-link hover:underline inline-block transition-all text-sm font-medium"
                >
                  {column.link} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
