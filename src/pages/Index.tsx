import { ArrowRight, Truck, Shield, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import productWhey from "@/assets/product-whey.jpg";
import productPreworkout from "@/assets/product-preworkout.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import productBcaa from "@/assets/product-bcaa.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Index = () => {
  const featuredProducts = [
    {
      name: "100% Whey Protein Isolate",
      category: "Protein",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 1542,
      image: productWhey,
      badge: "Best Seller",
    },
    {
      name: "Explosive Pre-Workout Formula",
      category: "Pre-Workout",
      price: 39.99,
      rating: 4.6,
      reviews: 892,
      image: productPreworkout,
      badge: "30% OFF",
    },
    {
      name: "Micronized Creatine Monohydrate",
      category: "Creatine",
      price: 29.99,
      rating: 4.9,
      reviews: 2103,
      image: productCreatine,
    },
    {
      name: "BCAA + Recovery Complex",
      category: "Amino Acids",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 673,
      image: productBcaa,
    },
  ];

  const testimonials = [
    {
      name: "Mike Johnson",
      role: "Professional Bodybuilder",
      content: "PowerFuel's whey protein has been a game-changer for my recovery. The quality is unmatched and the results speak for themselves.",
      rating: 5,
      image: testimonial1,
    },
    {
      name: "Sarah Davis",
      role: "Fitness Coach",
      content: "I recommend PowerFuel to all my clients. Their pre-workout gives me the energy I need for intense training sessions without any crash.",
      rating: 5,
      image: testimonial2,
    },
    {
      name: "Alex Chen",
      role: "Amateur Athlete",
      content: "The creatine from PowerFuel helped me break through my plateau. I've gained strength and muscle mass consistently.",
      rating: 5,
      image: testimonial3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            FUEL YOUR
            <span className="text-accent block">PERFORMANCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Premium supplements designed for serious athletes. Build muscle, boost energy, and achieve your fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Link to="/products">
              <Button variant="hero" size="xl" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $50</p>
            </div>
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">100% authentic products</p>
            </div>
            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Brand</h3>
              <p className="text-muted-foreground">Over 100,000 happy customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">Top-selling supplements for peak performance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="cta" size="lg" className="group">
                View All Products
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real athletes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Fitness?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who trust PowerFuel for their supplement needs.
          </p>
          <Link to="/products">
            <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;