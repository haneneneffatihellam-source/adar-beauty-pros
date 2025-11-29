import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, MapPin, Clock, DollarSign, Check, Star, MessageCircle, ShoppingCart, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";
import BookingCalendar from "@/components/BookingCalendar";
import { Link } from "react-router-dom";

export interface Prestation {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  name: string;
  city: string;
  rating: number;
  comment: string;
}

export interface RelatedService {
  name: string;
  category: string;
  price: number;
  link: string;
  image: string;
}

export interface ServicePageTemplateProps {
  // Hero
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  priceMin: number;
  durationMin: string;
  durationMax: string;
  
  // Description
  description: string;
  idealFor: string[];
  youWillLove: string[];
  
  // Prestations
  prestations: Prestation[];
  
  // Ce qui est inclus
  included: string[];
  
  // Comment ça marche (optionnel, par défaut)
  howItWorks?: {
    step1: string;
    step2: string;
    step3: string;
  };
  
  // Avis
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  
  // FAQ
  faqs: FAQ[];
  
  // Services complémentaires
  relatedServices: RelatedService[];
}

const ServicePageTemplate = ({
  id,
  title,
  subtitle,
  category,
  image,
  priceMin,
  durationMin,
  durationMax,
  description,
  idealFor,
  youWillLove,
  prestations,
  included,
  howItWorks = {
    step1: "Sélectionnez la prestation et le sous-service adaptés à vos besoins.",
    step2: "Choisissez la date, l'horaire et l'adresse directement en ligne.",
    step3: "Elle vient avec tout le nécessaire, vous n'avez plus qu'à profiter."
  },
  reviews,
  averageRating,
  totalReviews,
  faqs,
  relatedServices
}: ServicePageTemplateProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();
  const bookingRef = useRef<HTMLDivElement>(null);
  const favorite = isFavorite(id);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToCart = (prestation: Prestation) => {
    addToCart({
      id: `${id}-${prestation.id}-${Date.now()}`,
      serviceName: title,
      prestationName: prestation.name,
      price: prestation.price,
      duration: prestation.duration
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* 1. HERO SERVICE */}
      <section className="relative py-12 md:py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Colonne gauche: Texte */}
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Disponible 7j/7 dans toutes les régions de Tunisie 🇹🇳
              </Badge>
              
              <div className="space-y-2">
                <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                  {category}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {subtitle}
                </p>
              </div>

              <p className="text-muted-foreground">
                Nos professionnelles certifiées se déplacent chez vous, avec tout le matériel nécessaire.
              </p>

              {/* Infos clés */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Prix</p>
                    <p className="font-semibold">À partir de {priceMin} DT</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Durée</p>
                    <p className="font-semibold">{durationMin} – {durationMax}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-card/50 rounded-lg p-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Zone</p>
                    <p className="font-semibold">Disponible partout en Tunisie</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={scrollToBooking}
                >
                  Prendre RDV
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => toggleFavorite({ id, name: title, category, image })}
                  className="group"
                >
                  <Heart className={`w-5 h-5 transition-all ${favorite ? 'fill-primary text-primary' : ''}`} />
                  {favorite ? 'Retiré des favoris' : 'Ajouter aux favoris'}
                </Button>
              </div>
            </div>

            {/* Colonne droite: Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img src={image} alt={title} className="w-full h-auto object-cover" />
                {/* Carte superposée */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <p className="font-semibold mb-1">Professionnelles certifiées</p>
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESCRIPTION & BÉNÉFICES */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">{title} : en quoi ça consiste ?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Idéal si vous voulez :</h3>
                  <ul className="space-y-2">
                    {idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-primary">Ce que vous allez aimer :</h3>
                  <ul className="space-y-2">
                    {youWillLove.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LISTE DES PRESTATIONS & PRIX */}
      <section className="py-16 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-2">
                Nos prestations
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Choisissez votre prestation</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {prestations.map((prestation) => (
                <Card key={prestation.id} className="group hover:shadow-soft transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {prestation.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{prestation.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{prestation.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-primary">
                        <DollarSign className="w-4 h-4" />
                        <span>À partir de {prestation.price} DT</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(prestation)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Ajouter au panier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODULE RÉSERVATION */}
      <section ref={bookingRef} className="py-16 md:py-20 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-2">
              Réservation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Réservez votre créneau</h2>
            <p className="text-muted-foreground">
              Réservez votre prestation en quelques clics
            </p>
          </div>

          <BookingCalendar prestations={prestations} serviceName={title} />
        </div>
      </section>

      {/* 5. CE QUI EST INCLUS */}
      <section className="py-16 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Ce qui est inclus dans votre prestation
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {included.map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground pt-2">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMENT ÇA MARCHE */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Comment ça marche ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "1", title: "Vous choisissez votre service", description: howItWorks.step1 },
                { number: "2", title: "Vous réservez votre créneau", description: howItWorks.step2 },
                { number: "3", title: "Votre pro arrive chez vous", description: howItWorks.step3 }
              ].map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AVIS CLIENTS */}
      <section className="py-16 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">Avis sur ce service</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="font-bold text-xl">{averageRating}/5</span>
                <span className="text-muted-foreground">— {totalReviews} avis</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {reviews.slice(0, 3).map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 text-primary mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.city}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                Voir tous les avis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. QUESTION GÉNÉRALE + CTA FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-hero border-primary/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl mb-3">Comment fonctionne le service À Domicile ?</h3>
                <p className="text-muted-foreground mb-6">
                  Nous vous expliquons le déroulé, la sélection des professionnelles, les conditions d'annulation, et bien plus encore.
                </p>
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Link to="/contact">Consulter la FAQ complète</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 9. FAQ SPÉCIFIQUE */}
      <section className="py-16 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              FAQ — {title}
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-card rounded-lg px-6 border-0">
                  <AccordionTrigger className="hover:no-underline">
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

      {/* 10. SERVICES COMPLÉMENTAIRES */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Vous aimerez aussi
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service, idx) => (
                <Card key={idx} className="group hover:shadow-soft transition-all overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                      {service.category}
                    </p>
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      À partir de {service.price} DT
                    </p>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to={service.link}>
                        Découvrir
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. BESOIN DE CONSEIL */}
      <section className="py-16 md:py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Vous hésitez sur la prestation ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Envoyez-nous un message ou une photo, une experte À Domicile vous aidera à choisir le service le plus adapté.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contacter une experte
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
