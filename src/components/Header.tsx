import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ContactBar from "./ContactBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const coiffureItems = [
    { label: "Coupe & Brushing", path: "/coiffure/coupe-brushing" },
    { label: "Coloration", path: "/coiffure/coloration" },
    { label: "Chignons", path: "/coiffure/chignons" },
    { label: "Lissage", path: "/coiffure/lissage" },
  ];

  const maquillageItems = [
    { label: "Maquillage Jour", path: "/maquillage/jour" },
    { label: "Maquillage Soirée", path: "/maquillage/soiree" },
    { label: "Maquillage Mariée", path: "/maquillage/mariee" },
  ];

  const onglesItems = [
    { label: "Manucure", path: "/ongles/manucure" },
    { label: "Pédicure", path: "/ongles/pedicure" },
    { label: "Nail Art", path: "/ongles/nail-art" },
  ];

  const soinsItems = [
    { label: "Nettoyage de peau", path: "/soins/nettoyage" },
    { label: "Soins hydratants", path: "/soins/hydratants" },
    { label: "Soins anti-âge", path: "/soins/anti-age" },
  ];

  return (
    <>
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
                <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2">
                  Accueil
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Coiffure</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/coiffure" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {coiffureItems.map((item) => (
                      <li key={item.path}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Maquillage</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/maquillage" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {maquillageItems.map((item) => (
                      <li key={item.path}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Ongles</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/ongles" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les services
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {onglesItems.map((item) => (
                      <li key={item.path}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/massage" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2">
                  Massage
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Soins</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/soins" className="block px-4 py-2 hover:bg-accent rounded-md">
                          Tous les soins
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {soinsItems.map((item) => (
                      <li key={item.path}>
                        <NavigationMenuLink asChild>
                          <Link to={item.path} className="block px-4 py-2 hover:bg-accent rounded-md text-sm">
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/evenements" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2">
                  Événements
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/a-propos" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2">
                  À propos
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Réserver maintenant
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                  Accueil
                </Link>
                
                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Coiffure</div>
                  <Link to="/coiffure" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {coiffureItems.map((item) => (
                    <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Maquillage</div>
                  <Link to="/maquillage" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {maquillageItems.map((item) => (
                    <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Ongles</div>
                  <Link to="/ongles" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les services
                  </Link>
                  {onglesItems.map((item) => (
                    <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link to="/massage" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                  Massage
                </Link>

                <div className="border-b border-border pb-2">
                  <div className="text-sm font-semibold text-foreground mb-2">Soins</div>
                  <Link to="/soins" className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                    Tous les soins
                  </Link>
                  {soinsItems.map((item) => (
                    <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary py-1 block pl-4" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Link to="/evenements" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                  Événements
                </Link>
                <Link to="/a-propos" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                  À propos
                </Link>
                <Link to="/contact" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity mt-2">
                  Réserver maintenant
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
