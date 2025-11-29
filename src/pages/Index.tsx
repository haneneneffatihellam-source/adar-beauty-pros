import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanySection from "@/components/CompanySection";
import TeamSection from "@/components/TeamSection";
import AppPromotion from "@/components/AppPromotion";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <CompanySection />
      <TeamSection />
      <AppPromotion />
      <FAQ />
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
