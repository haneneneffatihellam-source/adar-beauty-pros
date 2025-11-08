import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Coiffure from "./pages/Coiffure";
import CoiffureCoupeBrushing from "./pages/CoiffureCoupeBrushing";
import CoiffureColoration from "./pages/CoiffureColoration";
import CoiffureChignons from "./pages/CoiffureChignons";
import CoiffureLissage from "./pages/CoiffureLissage";
import Maquillage from "./pages/Maquillage";
import MaquillageJour from "./pages/MaquillageJour";
import MaquillageSoiree from "./pages/MaquillageSoiree";
import MaquillageMariee from "./pages/MaquillageMariee";
import Ongles from "./pages/Ongles";
import OnglesManucure from "./pages/OnglesManucure";
import OnglesPedicure from "./pages/OnglesPedicure";
import OnglesNailArt from "./pages/OnglesNailArt";
import Massage from "./pages/Massage";
import Soins from "./pages/Soins";
import SoinsNettoyage from "./pages/SoinsNettoyage";
import SoinsHydratants from "./pages/SoinsHydratants";
import SoinsAntiAge from "./pages/SoinsAntiAge";
import Evenements from "./pages/Evenements";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/coiffure" element={<Coiffure />} />
          <Route path="/coiffure/coupe-brushing" element={<CoiffureCoupeBrushing />} />
          <Route path="/coiffure/coloration" element={<CoiffureColoration />} />
          <Route path="/coiffure/chignons" element={<CoiffureChignons />} />
          <Route path="/coiffure/lissage" element={<CoiffureLissage />} />
          
          <Route path="/maquillage" element={<Maquillage />} />
          <Route path="/maquillage/jour" element={<MaquillageJour />} />
          <Route path="/maquillage/soiree" element={<MaquillageSoiree />} />
          <Route path="/maquillage/mariee" element={<MaquillageMariee />} />
          
          <Route path="/ongles" element={<Ongles />} />
          <Route path="/ongles/manucure" element={<OnglesManucure />} />
          <Route path="/ongles/pedicure" element={<OnglesPedicure />} />
          <Route path="/ongles/nail-art" element={<OnglesNailArt />} />
          
          <Route path="/massage" element={<Massage />} />
          
          <Route path="/soins" element={<Soins />} />
          <Route path="/soins/nettoyage" element={<SoinsNettoyage />} />
          <Route path="/soins/hydratants" element={<SoinsHydratants />} />
          <Route path="/soins/anti-age" element={<SoinsAntiAge />} />
          
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
