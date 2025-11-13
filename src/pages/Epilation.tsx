import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";
import { Check } from "lucide-react";
import epilationImg from "@/assets/epilation.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Epilation = () => {
  const sousServices = [
    "Cire chaude",
    "Cire orientale (sucre)",
    "Épilation corps complet",
    "Jambes / bras",
    "Aisselles",
    "Maillot classique / intégral",
    "Sourcils / visage",
  ];

  const processSteps = [
    "1️⃣ Sélectionnez la zone à épiler",
    "2️⃣ Choisissez la méthode (cire chaude / orientale)",
    "3️⃣ Une experte vous contacte pour vérifier votre type de peau et recommander la meilleure méthode",
    "4️⃣ Une professionnelle certifiée se déplace chez vous",
    "5️⃣ Résultat : une peau douce et sans irritation 🌿",
  ];

  const faqs = [
    {
      question: "Quelle méthode est la moins douloureuse ?",
      answer: "La cire orientale (au sucre) est généralement plus douce et moins douloureuse que la cire chaude. Elle convient particulièrement aux peaux sensibles.",
    },
    {
      question: "Combien de temps avant la repousse ?",
      answer: "En moyenne, les résultats durent de 3 à 4 semaines selon les zones et votre type de pilosité.",
    },
    {
      question: "Les produits conviennent-ils aux peaux sensibles ?",
      answer: "Oui, nous utilisons des produits hypoallergéniques adaptés aux peaux sensibles. L'experte vous contactera avant pour vérifier vos besoins spécifiques.",
    },
    {
      question: "Puis-je faire épilation + soin le même jour ?",
      answer: "Oui, vous pouvez combiner plusieurs prestations. Nous recommandons de faire le soin après l'épilation pour apaiser la peau.",
    },
    {
      question: "Le matériel est-il à usage unique ?",
      answer: "Absolument. Nous respectons des normes d'hygiène strictes et utilisons du matériel à usage unique ou stérilisé.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Épilation à domicile</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Une peau douce et nette, réalisée à domicile par des esthéticiennes expérimentées. 
                Hygiène, confort et efficacité garantis.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                💖 Prendre RDV
              </Button>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img src={epilationImg} alt="Épilation à domicile" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sous-services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nos prestations d'épilation</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sousServices.map((service, index) => (
                <Card key={index} className="hover:shadow-soft transition-all">
                  <CardContent className="p-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-foreground">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Comment ça fonctionne ?</h2>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                💖 Prendre RDV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Epilation;
