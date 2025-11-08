import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
          <a href="tel:+21612345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+216 12 345 678</span>
          </a>
          <a href="mailto:contact@adomicile.tn" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>contact@adomicile.tn</span>
          </a>
          <a href="https://wa.me/21612345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
