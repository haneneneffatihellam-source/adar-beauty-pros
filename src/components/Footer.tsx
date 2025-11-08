import { Link } from "react-router-dom";
import { Sparkles, Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                À Domicile
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              La première plateforme tunisienne dédiée à la beauté et au bien-être à domicile.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos services</h3>
            <ul className="space-y-2">
              <li><Link to="/coiffure" className="text-sm text-muted-foreground hover:text-primary transition-colors">Coiffure</Link></li>
              <li><Link to="/maquillage" className="text-sm text-muted-foreground hover:text-primary transition-colors">Maquillage</Link></li>
              <li><Link to="/ongles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ongles</Link></li>
              <li><Link to="/massage" className="text-sm text-muted-foreground hover:text-primary transition-colors">Massage</Link></li>
              <li><Link to="/soins" className="text-sm text-muted-foreground hover:text-primary transition-colors">Soins</Link></li>
              <li><Link to="/evenements" className="text-sm text-muted-foreground hover:text-primary transition-colors">Événements</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="/a-propos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Qui sommes-nous</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Devenir professionnel</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+216 XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contact@adomicile.tn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 À Domicile. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
