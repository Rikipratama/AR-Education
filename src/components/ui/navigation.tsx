import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik dengan layanan les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AR</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">AR Education</h1>
              <p className="text-xs text-muted-foreground italic">Manjadda Wa Jadda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-elegant hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium transition-elegant",
                    location.pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
