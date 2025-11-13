import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const StickyBooking = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4">
      <Button
        size="lg"
        className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft rounded-full pr-8"
      >
        <Calendar className="w-5 h-5 mr-2" />
        💖 Prendre RDV
      </Button>
    </div>
  );
};

export default StickyBooking;
