import { MessageCircle, BookOpen, Users, Monitor, GraduationCap, Clock, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import onlineIcon from "@/assets/online-lesson-icon.jpg";
import offlineIcon from "@/assets/offline-lesson-icon.jpg";
import groupIcon from "@/assets/group-lesson-icon.jpg";

const Services = () => {
  const handleWhatsAppClick = (serviceType?: string) => {
    const baseMessage = "Halo AR Education, saya tertarik dengan layanan";
    const message = serviceType 
      ? `${baseMessage} ${serviceType}. Bisakah saya mendapatkan informasi lebih lanjut?`
      : `${baseMessage} les privat Anda. Bisakah saya mendapatkan informasi lebih lanjut?`;
    
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: "Regular Lessons",
      subtitle: "Structured Learning Program",
      description: "Our regular lessons provide a comprehensive and structured approach to learning with carefully designed curriculum for consistent academic progress.",
      icon: BookOpen,
      features: [
        "Structured curriculum based on educational standards",
        "Regular progress assessments and feedback",
        "Flexible subject selection",
        "Experienced and qualified tutors",
        "Small class sizes for better attention",
        "Homework support and guidance"
      ],
      benefits: [
        "Consistent learning progress",
        "Strong foundation building", 
        "Improved academic performance",
        "Better study habits development"
      ],
      color: "bg-primary"
    },
    {
      title: "Private Group Lessons",
      subtitle: "Collaborative Learning Experience", 
      description: "Private group lessons combine the benefits of personalized attention with collaborative learning in small groups of 3-5 students.",
      icon: Users,
      image: groupIcon,
      features: [
        "Small groups of 3-5 students maximum",
        "Customized curriculum for group needs",
        "Interactive learning activities",
        "Peer-to-peer learning opportunities",
        "Group projects and discussions",
        "Affordable shared cost structure"
      ],
      benefits: [
        "Enhanced social learning",
        "Motivation through peer interaction",
        "Cost-effective quality education",
        "Improved communication skills"
      ],
      color: "bg-accent"
    },
    {
      title: "Online Lessons (Daring)",
      subtitle: "Digital Learning Excellence",
      description: "Experience modern education through our comprehensive online learning platform with interactive tools and real-time instructor support.",
      icon: Monitor,
      image: onlineIcon,
      features: [
        "Interactive video conferencing platform",
        "Digital whiteboard and screen sharing",
        "Recorded sessions for review",
        "Online homework submission",
        "Digital learning materials",
        "24/7 platform accessibility"
      ],
      benefits: [
        "Learn from anywhere, anytime",
        "Safe and convenient learning",
        "Access to digital resources",
        "Flexible scheduling options"
      ],
      color: "bg-primary-light"
    },
    {
      title: "Offline Lessons (Luring)", 
      subtitle: "Traditional Classroom Excellence",
      description: "Traditional face-to-face instruction in our comfortable and well-equipped learning environment with direct teacher-student interaction.",
      icon: GraduationCap,
      image: offlineIcon,
      features: [
        "Comfortable and well-equipped classrooms",
        "Direct face-to-face interaction",
        "Hands-on learning activities",
        "Immediate feedback and clarification",
        "Physical learning materials provided",
        "Safe and conducive learning environment"
      ],
      benefits: [
        "Enhanced concentration and focus",
        "Better teacher-student relationship",
        "Immediate doubt clarification", 
        "Traditional learning experience"
      ],
      color: "bg-accent"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Educational Services</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Comprehensive learning solutions designed to help you achieve academic excellence. 
            Choose the learning method that best fits your needs and schedule.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="shadow-elegant border-0 gradient-card">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-lg text-accent">
                            {service.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Button
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="w-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground font-medium"
                        size="lg"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Get Info via WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-accent" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">All Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground">Choose times that work best for your schedule</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personalized Approach</h3>
              <p className="text-muted-foreground">Customized learning plans for each student</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">Regular progress monitoring and feedback</p>
            </div>
          </div>
          
          <Button
            onClick={() => handleWhatsAppClick()}
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Discuss Your Learning Needs
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
