import { type Product } from '../backend';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden rounded-sm bg-muted mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-light tracking-wide text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-light line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-light text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
