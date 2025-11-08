import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Coiffure from "./pages/Coiffure";
import Maquillage from "./pages/Maquillage";
import Ongles from "./pages/Ongles";
import Massage from "./pages/Massage";
import SoinsVisage from "./pages/SoinsVisage";
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
          <Route path="/maquillage" element={<Maquillage />} />
          <Route path="/ongles" element={<Ongles />} />
          <Route path="/massage" element={<Massage />} />
          <Route path="/soins-visage" element={<SoinsVisage />} />
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
