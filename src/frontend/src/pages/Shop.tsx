import { useState } from 'react';
import { Category } from '../backend';
import { useProductsByCategory } from '../hooks/useQueries';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  
  const { data: livingRoomProducts } = useProductsByCategory(Category.livingRoom);
  const { data: bedroomProducts } = useProductsByCategory(Category.bedroom);
  const { data: officeProducts } = useProductsByCategory(Category.office);
  const { data: diningProducts } = useProductsByCategory(Category.dining);

  const allProducts = [
    ...(livingRoomProducts || []),
    ...(bedroomProducts || []),
    ...(officeProducts || []),
    ...(diningProducts || []),
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : selectedCategory === Category.livingRoom 
    ? livingRoomProducts || []
    : selectedCategory === Category.bedroom
    ? bedroomProducts || []
    : selectedCategory === Category.office
    ? officeProducts || []
    : diningProducts || [];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: Category.livingRoom, label: 'Living Room' },
    { id: Category.bedroom, label: 'Bedroom' },
    { id: Category.office, label: 'Office' },
    { id: Category.dining, label: 'Dining' },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">
            Shop All
          </h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Explore our complete collection of premium furniture
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as Category | 'all')}
              className={`px-6 py-3 rounded-sm font-light tracking-wide transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/30 text-foreground hover:bg-muted'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground font-light">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
