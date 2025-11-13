import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AnimationSection from "@/components/AnimationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CompanySection from "@/components/CompanySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <AnimationSection />
      <WhyChooseUs />
      <CompanySection />
      <FAQ />
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
