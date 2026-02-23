import { Leaf, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/brand-story.dim_1200x600.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            At coozy home, we believe that furniture is more than just functional pieces—it's an expression of your lifestyle and values.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-8">
              Crafting Comfort Since Day One
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Founded with a passion for exceptional design and quality craftsmanship, coozy home has been transforming living spaces with furniture that combines timeless elegance and modern functionality. Every piece we create is thoughtfully designed to enhance your daily life.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Our journey began with a simple vision: to make premium furniture accessible to everyone who values quality and design. Today, we continue to uphold that vision by partnering with skilled artisans and using sustainable materials to create furniture that stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-foreground">
                Our Mission
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                To deliver exceptional furniture that enhances everyday living through thoughtful design, superior craftsmanship, and sustainable practices. We strive to create pieces that bring comfort, style, and joy to every home.
              </p>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-foreground">
                Our Vision
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                To become the most trusted name in premium furniture by consistently exceeding expectations and setting new standards for quality, design, and customer satisfaction. We envision a world where beautiful, sustainable furniture is accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
              <Leaf className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-light tracking-tight text-foreground">
              Commitment to Sustainability
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We take our environmental responsibility seriously. From sourcing sustainable materials to implementing eco-friendly manufacturing processes, every decision we make considers its impact on our planet. Our commitment to quality means creating furniture that lasts for generations, reducing waste and promoting a more sustainable future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <h3 className="text-xl font-light text-foreground">Sustainable Materials</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Responsibly sourced wood and eco-friendly fabrics
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-light text-foreground">Quality First</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Built to last, reducing the need for replacement
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-light text-foreground">Ethical Production</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Fair labor practices and safe working conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
