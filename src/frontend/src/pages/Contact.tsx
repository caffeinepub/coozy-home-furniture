import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-light tracking-tight text-foreground mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-light resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-sm font-light tracking-wide hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-600 font-light text-center">
                  Thank you! We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-destructive font-light text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-light tracking-tight text-foreground mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-light text-foreground mb-1">Visit Our Showroom</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      123 Furniture Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-light text-foreground mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-light text-foreground mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      hello@coozyhome.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-xl font-light tracking-tight text-foreground mb-4">
                Find Us
              </h3>
              <div className="aspect-video w-full rounded-sm overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
