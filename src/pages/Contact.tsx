import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["1-800-POWERFUEL", "Mon-Fri 9AM-6PM PST"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@powerfuel.com", "orders@powerfuel.com"],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Avenue", "Los Angeles, CA 90210"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up">Contact Us</h1>
          <p className="text-xl animate-fade-up animation-delay-200">
            We're here to help with your fitness journey
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-xl text-muted-foreground">Come see our products in person</p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">PowerFuel Flagship Store</h3>
                <p className="text-muted-foreground">123 Fitness Avenue, Los Angeles, CA 90210</p>
                <Button variant="cta" size="lg" className="mt-6">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">What is your return policy?</h3>
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee on all unopened products. If you're not satisfied, simply return the product for a full refund.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">How long does shipping take?</h3>
              <p className="text-muted-foreground">
                Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout. Free shipping on orders over $50.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Are your products third-party tested?</h3>
              <p className="text-muted-foreground">
                Yes! All PowerFuel products are third-party tested for purity, potency, and safety. We're committed to transparency and quality.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Do you offer wholesale pricing?</h3>
              <p className="text-muted-foreground">
                Yes, we offer competitive wholesale pricing for gyms, retailers, and fitness professionals. Contact our sales team for more information.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;