import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const navigate = useNavigate();

  const handleShopClick = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
    setIsShopOpen(false);
  };

  return (
    <nav className="bg-background/95 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-wide text-foreground hover:text-primary transition-colors">
            coozy home
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Shop
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border shadow-lg rounded-md overflow-hidden">
                  <Link
                    to="/shop"
                    className="block px-6 py-3 text-sm font-light text-foreground hover:bg-muted transition-colors"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/shop/living-room"
                    className="block px-6 py-3 text-sm font-light text-foreground hover:bg-muted transition-colors"
                  >
                    Living Room
                  </Link>
                  <Link
                    to="/shop/bedroom"
                    className="block px-6 py-3 text-sm font-light text-foreground hover:bg-muted transition-colors"
                  >
                    Bedroom
                  </Link>
                  <Link
                    to="/shop/office"
                    className="block px-6 py-3 text-sm font-light text-foreground hover:bg-muted transition-colors"
                  >
                    Office
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              to="/"
              className="block text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div>
              <button
                onClick={() => setIsShopOpen(!isShopOpen)}
                className="w-full text-left text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors py-2 flex items-center justify-between"
              >
                Shop
                <ChevronDown className={`w-4 h-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isShopOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <button
                    onClick={() => handleShopClick('/shop')}
                    className="block text-sm font-light text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    All Products
                  </button>
                  <button
                    onClick={() => handleShopClick('/shop/living-room')}
                    className="block text-sm font-light text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    Living Room
                  </button>
                  <button
                    onClick={() => handleShopClick('/shop/bedroom')}
                    className="block text-sm font-light text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    Bedroom
                  </button>
                  <button
                    onClick={() => handleShopClick('/shop/office')}
                    className="block text-sm font-light text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    Office
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
