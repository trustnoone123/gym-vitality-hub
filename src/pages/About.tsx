import { Target, Users, Beaker, Award, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower athletes worldwide with premium supplements that deliver real results and support their fitness journey.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We're more than a brand - we're a community of fitness enthusiasts supporting each other's goals.",
    },
    {
      icon: Beaker,
      title: "Science-Backed",
      description: "Every product is formulated based on the latest scientific research and tested for quality and efficacy.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "GMP certified facilities, third-party tested, and made with the highest quality ingredients available.",
    },
  ];

  const milestones = [
    { year: "2015", event: "PowerFuel founded by fitness enthusiasts" },
    { year: "2017", event: "Launched our signature whey protein line" },
    { year: "2019", event: "Expanded to 50+ products" },
    { year: "2021", event: "Reached 100,000 happy customers" },
    { year: "2023", event: "Opened state-of-the-art facility" },
    { year: "2024", event: "Leading supplement brand nationwide" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            About PowerFuel
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Building champions since 2015. We're dedicated to providing the highest quality supplements to fuel your fitness journey.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                PowerFuel was born from a simple frustration: the lack of transparent, high-quality supplements in the market. As athletes ourselves, we knew there had to be a better way.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded in 2015 by a group of fitness enthusiasts and nutrition experts, we set out to create supplements that we would trust for our own training. No proprietary blends, no fillers, just pure, effective ingredients.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, PowerFuel serves over 100,000 athletes worldwide, from weekend warriors to professional competitors. We're proud to be part of their journey to greatness.
              </p>
              <Link to="/products">
                <Button variant="cta" size="lg">
                  Explore Our Products
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">100K+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">50+</h3>
                <p className="text-muted-foreground">Products</p>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">9+ Years</h3>
                <p className="text-muted-foreground">In Business</p>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">100%</h3>
                <p className="text-muted-foreground">Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-fade-up" 
                style={{ animationDelay: `${index * 100}ms` }}>
                <value.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones that shaped PowerFuel</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 animate-fade-up" 
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-muted pl-6 -ml-6">
                  <h3 className="text-xl font-bold text-accent">{milestone.year}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the PowerFuel Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference quality makes. Start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="bg-transparent border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;