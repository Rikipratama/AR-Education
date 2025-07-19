import { Link } from "react-router-dom";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik dengan layanan les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">AR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AR Education</h3>
                <p className="text-sm italic opacity-90">Manjadda Wa Jadda</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              "Who is really's, they can get it." - Providing quality private education 
              services in Yogyakarta with dedication to academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm opacity-90 hover:opacity-100 transition-elegant hover:text-accent"
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block text-sm opacity-90 hover:opacity-100 transition-elegant hover:text-accent"
              >
                Our Services
              </Link>
              <Link 
                to="/about" 
                className="block text-sm opacity-90 hover:opacity-100 transition-elegant hover:text-accent"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-sm opacity-90 hover:opacity-100 transition-elegant hover:text-accent"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>Gg. Lesmana, Mantrijeron</p>
                  <p>Yogyakarta, Indonesia</p>
                </div>
              </div>
              
              <Button
                onClick={handleWhatsAppClick}
                variant="secondary"
                size="sm"
                className="w-full justify-start bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} AR Education. All rights reserved.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Manjadda Wa Jadda - Excellence in Private Education
          </p>
        </div>
      </div>
    </footer>
  );
};
