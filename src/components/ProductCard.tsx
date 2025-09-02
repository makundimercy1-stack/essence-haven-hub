import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  notes: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl h-80">
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-luxury-gold text-accent px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="btn-gold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="mb-2">
          <p className="text-sm font-modern text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </p>
          <h3 className="text-lg font-luxury font-medium text-foreground mb-2">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-luxury-gold text-luxury-gold"
                    : "text-border"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        {/* Fragrance Notes */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">
            Notes
          </p>
          <p className="text-sm font-modern text-foreground">
            {product.notes.join(", ")}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-luxury font-medium text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;