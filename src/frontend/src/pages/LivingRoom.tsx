import { Category } from '../backend';
import { useProductsByCategory } from '../hooks/useQueries';
import ProductCard from '../components/ProductCard';

export default function LivingRoom() {
  const { data: products, isLoading } = useProductsByCategory(Category.livingRoom);

  return (
    <div className="min-h-screen">
      {/* Category Banner */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/generated/living-room-banner.dim_1200x400.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-left">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
            Living Room
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Create a welcoming space with our collection of sofas, coffee tables, and TV units
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-square bg-muted rounded-sm animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground font-light">
                No products available in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
