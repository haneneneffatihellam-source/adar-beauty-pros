import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";
import { Check } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  prestations: string[];
}

const ServicePage = ({ title, description, image, benefits, prestations }: ServicePageProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Réserver maintenant
              </Button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img src={image} alt={title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Les avantages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prestations Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos prestations</h2>
            <div className="space-y-3">
              {prestations.map((prestation, index) => (
                <Card key={index} className="hover:shadow-soft transition-all">
                  <CardContent className="p-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground">{prestation}</p>
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

export default ServicePage;
