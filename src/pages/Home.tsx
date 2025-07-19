import { Link } from "react-router-dom";
import { MessageCircle, BookOpen, Users, Monitor, MapPin, Star, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-education.jpg";
import onlineIcon from "@/assets/online-lesson-icon.jpg";
import offlineIcon from "@/assets/offline-lesson-icon.jpg";
import groupIcon from "@/assets/group-lesson-icon.jpg";

const Home = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik dengan layanan les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: "Regular Lessons",
      description: "Structured curriculum with proven teaching methods for consistent learning progress.",
      icon: BookOpen,
      color: "primary"
    },
    {
      title: "Private Group",
      description: "Small group sessions with personalized attention and collaborative learning.",
      icon: Users,
      image: groupIcon,
      color: "accent"
    },
    {
      title: "Online Lessons (Daring)",
      description: "Flexible remote learning with interactive digital tools and real-time support.",
      icon: Monitor,
      image: onlineIcon,
      color: "primary-light"
    },
    {
      title: "Offline Lessons (Luring)",
      description: "Traditional face-to-face instruction in comfortable classroom environment.",
      icon: GraduationCap,
      image: offlineIcon,
      color: "accent"
    }
  ];

  const features = [
    {
      title: "Experienced Tutors",
      description: "Qualified educators with proven track records",
      icon: Star
    },
    {
      title: "Flexible Scheduling",
      description: "Learn at your own pace and preferred time",
      icon: BookOpen
    },
    {
      title: "Personalized Approach",
      description: "Customized learning plans for each student",
      icon: Users
    },
    {
      title: "Local Expertise",
      description: "Based in Yogyakarta with deep local knowledge",
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AR Education
            </h1>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-white/90 italic font-semibold mb-2">
                "Manjadda Wa Jadda"
              </p>
              <p className="text-lg md:text-xl text-white/80">
                Who is really's, they can get it.
              </p>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Excellence in Private Education Services in Yogyakarta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4 shadow-elegant"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Contact Us Now
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/30"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Educational Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning solutions tailored to your academic needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-elegant bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-elegant">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/services">
                View All Services
                <BookOpen className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose AR Education?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in the motto "Manjadda Wa Jadda" - with dedication and hard work, 
              success is achievable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-elegant shadow-soft">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Join thousands of students who have achieved their academic goals with AR Education. 
            Contact us today to discuss your learning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Get Started via WhatsApp
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
