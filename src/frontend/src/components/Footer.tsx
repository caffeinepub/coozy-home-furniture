import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'coozy-home-furniture';

  return (
    <footer className="bg-muted/30 border-t border-border mt-24">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-wide">coozy home</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Premium furniture crafted with care for modern living spaces.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop/living-room" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/shop/bedroom" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/shop/office" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground font-light">
                123 Furniture Street
              </li>
              <li className="text-sm text-muted-foreground font-light">
                New York, NY 10001
              </li>
              <li className="text-sm text-muted-foreground font-light">
                (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} coozy home Furniture. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-light flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
