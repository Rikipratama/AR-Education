import { useState } from "react";
import { MessageCircle, MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik dengan layanan les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message from form data
    const whatsappMessage = `Halo AR Education,

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}

Pesan:
${formData.message}

Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "You'll be redirected to WhatsApp to send your message.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact AR Education</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Ready to start your learning journey? Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're here to answer your questions and help you find the perfect learning solution. 
                  Contact us through WhatsApp for the fastest response, or use the form to send us a detailed message.
                </p>
              </div>

              {/* Primary Contact - WhatsApp */}
              <Card className="shadow-elegant border-2 border-whatsapp/20 bg-whatsapp/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-whatsapp">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    WhatsApp - Primary Contact
                  </CardTitle>
                  <CardDescription>
                    The fastest way to reach us and get immediate responses
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground font-medium"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact via WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Location Information */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">AR Education</p>
                    <p className="text-muted-foreground">Gg. Lesmana, Mantrijeron</p>
                    <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Operating Hours: Monday - Saturday, 8:00 AM - 8:00 PM
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Phone inquiries available via WhatsApp
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="text-center hover:shadow-soft transition-elegant">
                  <CardContent className="p-6">
                    <MessageCircle className="w-8 h-8 text-whatsapp mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Inquiry</h3>
                    <p className="text-sm text-muted-foreground">
                      Fast response for general questions
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center hover:shadow-soft transition-elegant">
                  <CardContent className="p-6">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Schedule Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed discussion about your needs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out this form and we'll respond via WhatsApp with your details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812 3456 7890"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your learning needs, preferred subjects, schedule, or any questions you have..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message via WhatsApp
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      This form will open WhatsApp with your message pre-filled for easy sending.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us on the Map</h2>
            <p className="text-lg text-muted-foreground">
              Located in Mantrijeron, Yogyakarta - Easy to reach from anywhere in the city
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5234827847227!2d110.36284531477471!3d-7.817532694378746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a577b00000000%3A0x0!2sGg.%20Lesmana%2C%20Mantrijeron%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AR Education Location - Gg. Lesmana, Mantrijeron, Yogyakarta"
              />
            </div>
            <div className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">AR Education</h3>
                  <p className="text-muted-foreground">Gg. Lesmana, Mantrijeron, Yogyakarta</p>
                </div>
                <Button
                  onClick={() => window.open('https://maps.google.com/?q=Gg.+Lesmana,+Mantrijeron,+Yogyakarta', '_blank')}
                  variant="outline"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Don't wait to begin your educational journey. Contact us today and let's discuss 
            how we can help you achieve your academic goals.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Start Now via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
