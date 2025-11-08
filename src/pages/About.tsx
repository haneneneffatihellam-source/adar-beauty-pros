import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Nous aimons ce que nous faisons et mettons tout notre cœur à satisfaire nos clientes.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Nos professionnels sont rigoureusement sélectionnés pour leur savoir-faire et leur expérience.",
    },
    {
      icon: Award,
      title: "Qualité",
      description: "Des prestations irréprochables avec des produits et matériels haut de gamme.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Nous révolutionnons l'accès aux services beauté en Tunisie grâce à la technologie.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'À Domicile</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La première plateforme tunisienne dédiée à la beauté et au bien-être à domicile
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Notre histoire</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-primary">À Domicile</span> est née d'une conviction simple : 
                la beauté professionnelle doit être accessible à toutes, où qu'elles soient. Dans notre quotidien 
                trépidant, prendre soin de soi devient un luxe que beaucoup ne peuvent s'offrir par manque de temps.
              </p>
              <p>
                C'est pourquoi nous avons créé la première plateforme tunisienne permettant de réserver des services 
                beauté à domicile en quelques clics. Coiffure, maquillage, soins du visage, massage... Des professionnels 
                certifiés se déplacent chez vous avec tout le matériel nécessaire.
              </p>
              <p>
                Nous sélectionnons rigoureusement chaque expert pour garantir des prestations de qualité salon, 
                dans le confort et l'intimité de votre foyer. Notre mission : rendre la beauté professionnelle 
                accessible à toutes les femmes tunisiennes, en toute sérénité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-soft transition-all">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-foreground">Professionnels certifiés</div>
              <div className="text-sm text-muted-foreground mt-2">
                Experts rigoureusement sélectionnés
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-lg text-foreground">Prestations réalisées</div>
              <div className="text-sm text-muted-foreground mt-2">
                Des milliers de clientes satisfaites
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-lg text-foreground">Note moyenne</div>
              <div className="text-sm text-muted-foreground mt-2">
                Excellence reconnue par nos clientes
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
