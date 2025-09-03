import { useState } from "react";
import { Heart, Eye, Star, ShoppingBag, Sparkles } from "lucide-react";
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

interface ModernProductCardProps {
  product: Product;
}

const ModernProductCard = ({ product }: ModernProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="product-card group p-6 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-midnight/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="luxury-badge animate-bounce-in">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="luxury-badge animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="h-3 w-3 mr-1 inline" />
              Bestseller
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`glass-card w-10 h-10 rounded-full transition-all duration-300 ${
              isWishlisted ? 'text-luxury-rose-gold' : 'text-white hover:text-luxury-rose-gold'
            } ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className={`glass-card w-10 h-10 rounded-full text-white hover:text-luxury-rose-gold transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add Button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button className="btn-gold w-full text-sm py-3 shimmer">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-modern font-medium text-luxury-charcoal uppercase tracking-wider">
            {product.brand}
          </p>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-luxury-gold fill-current'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-luxury font-medium text-accent mb-3 group-hover:text-luxury-rose-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Fragrance Notes */}
        <div className="mb-4 flex-1">
          <p className="text-xs font-modern text-muted-foreground uppercase tracking-wide mb-2">
            Notes
          </p>
          <div className="flex flex-wrap gap-1">
            {product.notes.map((note, index) => (
              <span
                key={note}
                className="glass-card px-3 py-1 text-xs font-modern text-luxury-charcoal rounded-full border border-luxury-rose-gold/20"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isHovered ? 'fade-in 0.3s ease-out forwards' : 'none'
                }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-lg font-luxury text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-luxury font-medium bg-gradient-to-r from-luxury-rose-gold to-luxury-gold bg-clip-text text-transparent">
              ${product.price}
            </span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="magnetic-btn text-luxury-charcoal hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full transition-all duration-300"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModernProductCard;