import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Dumbbell className="h-8 w-8 text-accent transform group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold text-primary-foreground tracking-wider">
              POWERFUEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-primary-foreground font-medium transition-all hover:text-accent ${
                  isActive(link.path) ? "text-accent border-b-2 border-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" size="default" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-primary-foreground font-medium transition-all hover:bg-accent/10 ${
                  isActive(link.path) ? "bg-accent/20 border-l-4 border-accent" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button variant="cta" size="default" className="w-full flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;