import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amira Ben Salem",
      role: "Cliente fidèle",
      content: "Service exceptionnel ! La coiffeuse était très professionnelle et à l'écoute. Je recommande vivement À Domicile.",
      rating: 5,
    },
    {
      name: "Leila Mansouri",
      role: "Mariée heureuse",
      content: "Pour mon mariage, l'équipe a été parfaite. Maquillage et coiffure impeccables. Un grand merci !",
      rating: 5,
    },
    {
      name: "Sonia Trabelsi",
      role: "Maman comblée",
      content: "Avec deux enfants, difficile d'aller au salon. À Domicile a changé ma vie ! Pratique et de qualité.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leur satisfaction est notre plus belle récompense
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
