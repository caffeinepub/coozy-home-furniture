import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, Package, Shield, DollarSign, Truck, Star } from 'lucide-react';
import { useState } from 'react';
import { useFeaturedProducts, useTestimonials, useNewsletterSubscription } from '../hooks/useQueries';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { data: featuredProducts, isLoading: productsLoading } = useFeaturedProducts();
  const { data: testimonials, isLoading: testimonialsLoading } = useTestimonials();
  const subscribeNewsletter = useNewsletterSubscription();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await subscribeNewsletter.mutateAsync(email);
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    } catch (error) {
      setSubscriptionStatus('error');
      setTimeout(() => setSubscriptionStatus('idle'), 5000);
    }
  };

  const values = [
    {
      icon: Package,
      title: 'Quality',
      description: 'Premium materials and expert craftsmanship in every piece',
    },
    {
      icon: Shield,
      title: 'Durability',
      description: 'Built to last with rigorous quality standards',
    },
    {
      icon: DollarSign,
      title: 'Affordable Luxury',
      description: 'High-end design at accessible prices',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/hero-banner.dim_1920x800.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 leading-tight">
            Elevate Your Living Space
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-10 leading-relaxed max-w-xl">
            Discover premium craftsmanship and modern design. Transform your home with furniture that combines elegance, comfort, and timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate({ to: '/shop' })}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-light tracking-wide hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate({ to: '/shop' })}
              className="px-8 py-4 bg-transparent border border-foreground text-foreground rounded-sm font-light tracking-wide hover:bg-foreground hover:text-background transition-colors"
            >
              Explore Collections
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Handpicked pieces that define modern elegance
            </p>
          </div>

          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-square bg-muted rounded-sm animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {featuredProducts?.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-light tracking-wide text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Real experiences from real people
            </p>
          </div>

          {testimonialsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="p-8 bg-muted/30 rounded-sm space-y-4">
                  <div className="h-4 bg-muted rounded animate-pulse w-full" />
                  <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
                  <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {testimonials?.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="p-8 bg-muted/30 rounded-sm space-y-6">
                  <div className="flex gap-1">
                    {[...Array(Number(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base text-foreground font-light leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    — {testimonial.customerName}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Subscribe to our newsletter for exclusive offers and design inspiration
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-light"
                required
              />
              <button
                type="submit"
                disabled={subscribeNewsletter.isPending}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-sm font-light tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {subscribeNewsletter.isPending ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {subscriptionStatus === 'success' && (
              <p className="text-sm text-green-600 font-light">
                Thank you for subscribing!
              </p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="text-sm text-destructive font-light">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
