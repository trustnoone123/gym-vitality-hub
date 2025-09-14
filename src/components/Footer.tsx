import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">POWERFUEL</h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium supplements for serious athletes. Build muscle, boost energy, achieve greatness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Protein Powders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Pre-Workout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Creatine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  BCAA & Aminos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>1-800-POWERFUEL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@powerfuel.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span>123 Fitness Ave<br />Los Angeles, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 PowerFuel Supplements. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;