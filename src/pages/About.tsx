import { MessageCircle, Heart, Target, Users, Award, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo AR Education, saya tertarik untuk mengetahui lebih lanjut tentang AR Education dan tim pengajar Anda.";
    const whatsappUrl = `https://wa.me/6281328013105?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const values = [
    {
      icon: Heart,
      title: "Dedication",
      description: "We are committed to providing the highest quality education with passion and dedication to each student's success."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence and continuous improvement in our teaching methods and student outcomes."
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Every student is unique, and we provide personalized attention to meet individual learning needs and goals."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We maintain high standards in our curriculum, teaching methods, and educational materials to ensure quality learning."
    }
  ];

  const teamFeatures = [
    {
      icon: BookOpen,
      title: "Qualified Educators",
      description: "Our tutors are carefully selected based on their academic qualifications and teaching experience."
    },
    {
      icon: Star,
      title: "Proven Track Record",
      description: "Years of experience helping students achieve their academic goals and improve their performance."
    },
    {
      icon: Users,
      title: "Student-Centered Approach",
      description: "We focus on understanding each student's learning style and adapting our methods accordingly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About AR Education</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Dedicated to educational excellence in Yogyakarta, guided by our motto "Manjadda Wa Jadda"
          </p>
        </div>
      </section>

      {/* Mission & Motto Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4 italic">
                "Manjadda Wa Jadda"
              </h2>
              <p className="text-2xl text-accent font-semibold mb-4">
                Who is really's, they can get it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This Arabic phrase embodies our core belief that with sincere effort, dedication, and hard work, 
                anyone can achieve their educational goals. It's not just our motto; it's the foundation of our 
                teaching philosophy and the driving force behind everything we do at AR Education.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                AR Education was founded with a simple yet powerful mission: to provide high-quality, 
                accessible private education that empowers students to reach their full academic potential. 
                We believe that every student deserves personalized attention and support to succeed in their studies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Yogyakarta, we serve students of all levels - from primary school 
                to university - offering flexible learning options that accommodate different learning styles, 
                schedules, and preferences.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To be the leading private education provider in Yogyakarta, known for our commitment to 
                academic excellence, innovative teaching methods, and the personal growth of our students.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where every student we serve not only achieves their academic goals 
                but also develops the confidence, critical thinking skills, and love for learning that 
                will serve them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values guide our approach to education and shape every interaction with our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-elegant bg-white border-0">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Educational Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced and passionate educators committed to your academic success
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {teamFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Meet Our Tutors</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team consists of qualified educators with diverse academic backgrounds and extensive 
              teaching experience. Each tutor is carefully selected not only for their subject expertise 
              but also for their ability to connect with students and create engaging learning experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that the right teacher can make all the difference in a student's educational journey. 
              That's why we ensure our tutors receive ongoing training and support to stay current with 
              the latest educational methods and technologies.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Meet Our Team via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Students Choose AR Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="opacity-90 leading-relaxed">
                Our students consistently show improvement in their academic performance and confidence levels.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Flexible Options</h3>
              <p className="opacity-90 leading-relaxed">
                Multiple learning formats to suit different preferences, schedules, and learning styles.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
              <p className="opacity-90 leading-relaxed">
                Deep understanding of the local educational system and requirements in Yogyakarta.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Personal Attention</h3>
              <p className="opacity-90 leading-relaxed">
                Small class sizes and individualized learning plans ensure every student gets the attention they need.
              </p>
            </div>
          </div>
          
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground text-lg px-8 py-4"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Start Your Journey with Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
