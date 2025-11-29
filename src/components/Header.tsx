import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, ShoppingCart } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import ContactBar from "./ContactBar";
import SearchDialog from "./SearchDialog";
import AuthDialog from "./AuthDialog";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/contexts/CartContext";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  const handleCartCheckout = () => {
    // Scroll to booking section on current page if available
    const bookingSection = document.querySelector('[data-booking-section]');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const coiffureItems = [{
    label: "Coupe",
    path: "/coiffure/coupe-brushing"
  }, {
    label: "Brushing",
    path: "/coiffure/coupe-brushing"
  }, {
    label: "Soin / Traitement capillaire",
    path: "/coiffure/lissage"
  }, {
    label: "Lissage (tanin, botox, kératine)",
    path: "/coiffure/lissage"
  }, {
    label: "Tresses africaines",
    path: "/coiffure/chignons"
  }, {
    label: "Coloration",
    path: "/coiffure/coloration"
  }, {
    label: "Balayage",
    path: "/coiffure/coloration"
  }, {
    label: "Extensions",
    path: "/coiffure/coupe-brushing"
  }, {
    label: "Head Spa",
    path: "/coiffure/lissage"
  }, {
    label: "Coiffure mariée",
    path: "/coiffure/chignons"
  }, {
    label: "Coiffure soirée",
    path: "/coiffure/chignons"
  }];
  const onglerieItems = [{
    label: "Manucure simple",
    path: "/ongles/manucure"
  }, {
    label: "Manucure russe",
    path: "/ongles/manucure"
  }, {
    label: "Pédicure complète",
    path: "/ongles/pedicure"
  }, {
    label: "Pose vernis classique",
    path: "/ongles/manucure"
  }, {
    label: "Gainage / Renforcement",
    path: "/ongles/manucure"
  }, {
    label: "Pose Capsules + Gel",
    path: "/ongles/manucure"
  }, {
    label: "Pose Gel sur chablon",
    path: "/ongles/manucure"
  }, {
    label: "Remplissage",
    path: "/ongles/manucure"
  }, {
    label: "Dépose faux ongles",
    path: "/ongles/manucure"
  }, {
    label: "French / Babyboomer",
    path: "/ongles/manucure"
  }, {
    label: "Nail Art",
    path: "/ongles/nail-art"
  }];
  const soinsItems = [{
    label: "Soin du visage",
    path: "/soins/nettoyage"
  }, {
    label: "Soin des mains",
    path: "/soins/hydratants"
  }, {
    label: "Soin des pieds",
    path: "/soins/hydratants"
  }, {
    label: "Soin du corps",
    path: "/soins/hydratants"
  }, {
    label: "Masques & sérums",
    path: "/soins/anti-age"
  }, {
    label: "Micro-dermabrasion",
    path: "/soins/anti-age"
  }];
  const epilationItems = [{
    label: "Cire chaude",
    path: "/epilation"
  }, {
    label: "Cire orientale",
    path: "/epilation"
  }, {
    label: "Jambes / bras",
    path: "/epilation"
  }, {
    label: "Aisselles",
    path: "/epilation"
  }, {
    label: "Maillot",
    path: "/epilation"
  }, {
    label: "Sourcils / visage",
    path: "/epilation"
  }];
  const maquillageItems = [{
    label: "Maquillage mariée",
    path: "/maquillage/mariee"
  }, {
    label: "Maquillage jour",
    path: "/maquillage/jour"
  }, {
    label: "Maquillage soirée",
    path: "/maquillage/soiree"
  }, {
    label: "Maquillage shooting",
    path: "/maquillage/soiree"
  }, {
    label: "Forfait coiffure + maquillage",
    path: "/maquillage/mariee"
  }];
  return <>
      <ContactBar />
      <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              À Domicile
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Coiffure</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/coiffure" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {coiffureItems.map(item => <li key={item.path + item.label}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>)}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Onglerie</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ongles" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {onglerieItems.map(item => <li key={item.path + item.label}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>)}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Soins</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/soins" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les soins
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {soinsItems.map(item => <li key={item.path + item.label}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>)}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Épilation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/epilation" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {epilationItems.map(item => <li key={item.path + item.label}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>)}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Maquillage</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-56 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/maquillage" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {maquillageItems.map(item => <li key={item.path + item.label}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>)}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Icons and CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <AuthDialog />
            <button 
              className="relative p-2 hover:bg-accent rounded-full transition-colors"
              onClick={() => setIsCartOpen(true)}
              aria-label="Ouvrir le panier"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </button>
            
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <nav className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-3">
                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Coiffure</div>
                  <Link to="/coiffure" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {coiffureItems.slice(0, 5).map(item => <Link key={item.path + item.label} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Onglerie</div>
                  <Link to="/ongles" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {onglerieItems.slice(0, 5).map(item => <Link key={item.path + item.label} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Soins</div>
                  <Link to="/soins" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les soins
                  </Link>
                  {soinsItems.map(item => <Link key={item.path + item.label} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Épilation</div>
                  <Link to="/epilation" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {epilationItems.map(item => <Link key={item.path + item.label} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Maquillage</div>
                  <Link to="/maquillage" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {maquillageItems.map(item => <Link key={item.path + item.label} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>)}
                </div>
                
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity mt-2">
                  💖 Prendre RDV
                </Button>
              </div>
            </nav>}
        </div>
      </header>
      
      <CartSidebar 
        open={isCartOpen} 
        onOpenChange={setIsCartOpen}
        onCheckout={handleCartCheckout}
      />
    </>;
};
export default Header;