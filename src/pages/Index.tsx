import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import VideoPresentation from "@/components/VideoPresentation";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
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
      <VideoPresentation />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyBooking />
    </div>
  );
};

export default Index;
