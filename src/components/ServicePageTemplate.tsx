import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";
import { Check, Clock, DollarSign, Star, Phone, Package, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceDetail {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ServicePageTemplateProps {
  title: string;
  category: string;
  image: string;
  price: string;
  rating: string;
  duration: string;
  description: string;
  highlights: string[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
  reviews?: Review[];
}

const ServicePageTemplate = ({
  title,
  category,
  image,
  price,
  rating,
  duration,
  description,
  highlights,
  faqs,
  relatedServices,
  reviews = [],
}: ServicePageTemplateProps) => {
  const serviceDetails: ServiceDetail[] = [
    {
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      label: "Prix indicatif",
      value: price,
    },
    {
      icon: <Star className="w-5 h-5 text-primary" />,
      label: "Avis / Note",
      value: rating,
    },
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      label: "Durée moyenne",
      value: duration,
    },
    {
      icon: <Package className="w-5 h-5 text-primary" />,
      label: "Matériel inclus",
      value: "Le matériel professionnel nécessaire est apporté par la pro (produits inclus).",
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Diagnostic",
      value: "Avant chaque prestation, un expert vous contacte pour un diagnostic personnalisé.",
    },
  ];

  const processSteps = [
    { number: "1️⃣", text: "Choisissez votre service" },
    { number: "2️⃣", text: "Réservez votre créneau (calendrier interactif)" },
    { number: "3️⃣", text: "Un expert vous contacte pour comprendre vos besoins et confirmer la prestation" },
    { number: "4️⃣", text: "Votre professionnelle certifiée se déplace avec tout le matériel" },
    { number: "5️⃣", text: "Profitez de votre moment beauté à domicile 💆‍♀️" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Image principale */}
            <div className="lg:col-span-3">
              <div className="relative rounded-3xl overflow-hidden shadow-soft">
                <img src={image} alt={title} className="w-full h-[500px] object-cover" />
              </div>
            </div>

            {/* Bloc d'infos essentielles */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{category}</p>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                </div>

                <Card className="shadow-soft">
                  <CardContent className="p-6 space-y-4">
                    {serviceDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {detail.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground mb-1">{detail.label}</p>
                          <p className="text-sm text-muted-foreground">{detail.value}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  💖 Prendre RDV maintenant
                </Button>

                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5"
                >
                  🤝 Devenir partenaire beauté
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Description</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
            
            <h3 className="text-xl font-semibold mb-4">✅ Points forts</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Comment ça fonctionne ?</h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <span className="text-2xl">{step.number}</span>
                    <p className="text-foreground flex-1">{step.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
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
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">💡 Vous aimerez aussi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-soft transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <p className="text-lg font-bold text-primary mb-4">{service.price}</p>
                    <Button variant="outline" className="w-full">
                      Découvrir
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloc B2B */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Vous êtes professionnelle de la beauté ? 💇‍♀️💅💆‍♀️
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Rejoignez la première plateforme tunisienne de beauté à domicile.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                "Augmentez votre visibilité",
                "Recevez des réservations directement",
                "Bénéficiez d'un accompagnement marketing"
              ].map((benefit, index) => (
                <Card key={index} className="bg-background/10 border-none backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-foreground" />
                    <p className="text-sm text-primary-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button size="lg" variant="secondary" className="shadow-soft">
              ✨ Rejoindre le réseau À Domicile
            </Button>
          </div>
        </div>
      </section>

      {/* Avis clients */}
      {reviews.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Avis clients</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {reviews.slice(0, 3).map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-primary fill-primary" : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline">Voir tous les avis</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Conditions & rappels */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Annulation gratuite jusqu'à 24h avant le RDV",
                "Moins de 24h → frais 50 %",
                "Paiement sur place ou en ligne",
                "Produits fournis par la professionnelle",
                "Disponible 7j/7 – 8h à 22h",
                "Sur toutes les régions 🇹🇳"
              ].map((condition, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">{condition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBooking />
    </div>
  );
};

export default ServicePageTemplate;
