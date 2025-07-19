import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingWhatsAppProps {
  className?: string;
}

export const FloatingWhatsApp = ({ className }: FloatingWhatsAppProps) => {
  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik dengan layanan les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={cn(
        "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-floating",
        "bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground",
        "whatsapp-float transition-elegant z-50",
        "flex items-center justify-center p-0",
        className
      )}
      aria-label="Contact us via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};
