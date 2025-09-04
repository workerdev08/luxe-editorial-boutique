import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-restaurant-cream/95 backdrop-blur-sm border-b border-restaurant-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-script font-bold text-restaurant-burgundy">
              Lumière
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-serif transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-restaurant-burgundy font-semibold"
                    : "text-restaurant-burgundy/70 hover:text-restaurant-burgundy"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center text-restaurant-burgundy/70 hover:text-restaurant-burgundy transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-serif">Call Us</span>
            </a>
            <Button asChild variant="elegant" size="sm">
              <Link to="/reservations">Reserve Table</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-restaurant-burgundy p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-restaurant-cream border-t border-restaurant-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-serif transition-colors ${
                  isActive(item.path)
                    ? "text-restaurant-burgundy font-semibold bg-restaurant-gold/10"
                    : "text-restaurant-burgundy/70 hover:text-restaurant-burgundy hover:bg-restaurant-gold/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild variant="elegant" size="sm" className="w-full">
                <Link to="/reservations" onClick={() => setIsOpen(false)}>
                  Reserve Table
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;