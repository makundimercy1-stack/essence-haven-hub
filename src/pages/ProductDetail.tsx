import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Check,
  Minus,
  Plus,
  Sparkles,
  ShieldCheck,
  Truck,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModernProductCard from "@/components/ModernProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("50ml");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data - in real app, this would come from API
  const product = {
    id: id || "1",
    name: "Midnight Elegance",
    brand: "Noir Luxe",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=700&fit=crop",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=700&fit=crop"
    ],
    sizes: [
      { size: "30ml", price: 125 },
      { size: "50ml", price: 185 },
      { size: "100ml", price: 285 }
    ],
    description: "A captivating evening fragrance that embodies sophistication and mystery. Midnight Elegance opens with fresh bergamot and sparkling pink pepper, evolving into a heart of romantic rose and jasmine, before settling into a warm base of sandalwood, vanilla, and musk.",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Mandarin"],
      middle: ["Rose", "Jasmine", "Lily of the Valley"],
      base: ["Sandalwood", "Vanilla", "White Musk"]
    },
    features: [
      "Long-lasting 8-12 hours",
      "Cruelty-free formulation",
      "Premium glass bottle",
      "Gift box included"
    ],
    inStock: true,
    category: "For Her"
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Golden Sunrise",
      brand: "Bloom & Co",
      price: 165,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      rating: 4.9,
      reviewCount: 89,
      notes: ["Citrus", "Jasmine", "Amber"],
      isNew: true,
    },
    {
      id: "3",
      name: "Ocean Breeze",
      brand: "Azure Dreams",
      price: 145,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
      rating: 4.7,
      reviewCount: 156,
      notes: ["Sea Salt", "Lily", "Cedar"],
    },
    {
      id: "4",
      name: "Royal Oud",
      brand: "Essence Royale",
      price: 295,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop",
      rating: 5.0,
      reviewCount: 67,
      notes: ["Oud", "Rose", "Saffron"],
      isBestseller: true,
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Absolutely stunning fragrance! The longevity is incredible and I get compliments everywhere I go. Perfect for evening wear.",
      verified: true
    },
    {
      id: 2,
      name: "Emma L.",
      rating: 5,
      date: "1 month ago",
      comment: "This has become my signature scent. The rose and sandalwood blend beautifully. Highly recommend!",
      verified: true
    },
    {
      id: 3,
      name: "Jennifer K.",
      rating: 4,
      date: "2 months ago", 
      comment: "Beautiful fragrance with great projection. The bottle is also gorgeous and looks amazing on my vanity.",
      verified: true
    }
  ];

  const currentPrice = product.sizes.find(s => s.size === selectedSize)?.price || product.price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const tabs = [
    { id: "description", label: "Description" },
    { id: "notes", label: "Fragrance Notes" },
    { id: "reviews", label: "Reviews" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 py-6 animate-fade-in">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-luxury-rose-gold transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/shop" className="text-muted-foreground hover:text-luxury-rose-gold transition-colors">
              Shop
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-luxury-rose-gold">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Images */}
            <div className="animate-slide-in-left">
              {/* Main Image */}
              <div className="relative mb-6 overflow-hidden rounded-3xl glass-card">
                <img
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-luxury-rose-gold transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-white hover:text-luxury-rose-gold transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === selectedImageIndex 
                          ? 'bg-luxury-rose-gold scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      index === selectedImageIndex 
                        ? 'ring-2 ring-luxury-rose-gold scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-slide-in-right">
              {/* Brand & Rating */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-modern font-medium text-luxury-charcoal uppercase tracking-wider">
                  {product.brand}
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-luxury-gold fill-current'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-4xl font-luxury font-medium text-accent mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                {product.originalPrice && (
                  <span className="text-2xl font-luxury text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-luxury font-medium bg-gradient-to-r from-luxury-rose-gold to-luxury-gold bg-clip-text text-transparent">
                  ${currentPrice}
                </span>
                {product.originalPrice && (
                  <span className="luxury-badge">
                    Save ${product.originalPrice - currentPrice}
                  </span>
                )}
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-modern font-medium text-accent mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((sizeOption) => (
                    <button
                      key={sizeOption.size}
                      onClick={() => setSelectedSize(sizeOption.size)}
                      className={`glass-card p-4 rounded-xl text-center transition-all duration-300 ${
                        selectedSize === sizeOption.size
                          ? 'ring-2 ring-luxury-rose-gold bg-luxury-rose-gold/10'
                          : 'hover:bg-luxury-rose-gold/5'
                      }`}
                    >
                      <div className="font-medium text-accent">{sizeOption.size}</div>
                      <div className="text-sm text-muted-foreground">${sizeOption.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-accent">Quantity</span>
                  <div className="flex items-center glass-card rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:text-luxury-rose-gold transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 font-medium text-accent">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:text-luxury-rose-gold transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button className="btn-gold flex-1 py-4 text-base shimmer">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart - ${currentPrice * quantity}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`magnetic-btn glass-card w-14 h-14 rounded-full ${
                    isWishlisted ? 'text-luxury-rose-gold' : 'hover:text-luxury-rose-gold'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="magnetic-btn glass-card w-14 h-14 rounded-full hover:text-luxury-rose-gold"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>

              {/* Features */}
              <div className="glass-card p-6 rounded-2xl mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-luxury-rose-gold mr-3" />
                    <span className="text-sm text-accent">Authentic Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-luxury-rose-gold mr-3" />
                    <span className="text-sm text-accent">Free Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <RefreshCw className="h-5 w-5 text-luxury-rose-gold mr-3" />
                    <span className="text-sm text-accent">30-Day Returns</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-luxury-rose-gold mr-3" />
                    <span className="text-sm text-accent">Gift Wrapping</span>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center text-sm text-accent">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                <span>In Stock - Ready to Ship</span>
              </div>
            </div>
          </div>

          {/* Product Information Tabs */}
          <div className="mt-20 animate-slide-up">
            <div className="flex border-b border-border mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-luxury-rose-gold border-b-2 border-luxury-rose-gold'
                      : 'text-muted-foreground hover:text-accent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="glass-card p-8 rounded-2xl">
              {activeTab === "description" && (
                <div className="animate-fade-in">
                  <p className="text-lg leading-relaxed text-accent mb-6">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-accent mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <Check className="h-4 w-4 text-luxury-rose-gold mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-3">Details</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div>Category: {product.category}</div>
                        <div>Concentration: Eau de Parfum</div>
                        <div>Made in: France</div>
                        <div>Year: 2024</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notes" && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-medium text-accent mb-4 flex items-center">
                        <Sparkles className="h-5 w-5 text-luxury-rose-gold mr-2" />
                        Top Notes
                      </h4>
                      <div className="space-y-2">
                        {product.notes.top.map((note) => (
                          <span key={note} className="inline-block glass-card px-3 py-1 text-sm rounded-full mr-2 mb-2 text-accent">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-4 flex items-center">
                        <Heart className="h-5 w-5 text-luxury-rose-gold mr-2" />
                        Heart Notes
                      </h4>
                      <div className="space-y-2">
                        {product.notes.middle.map((note) => (
                          <span key={note} className="inline-block glass-card px-3 py-1 text-sm rounded-full mr-2 mb-2 text-accent">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-accent mb-4 flex items-center">
                        <Star className="h-5 w-5 text-luxury-rose-gold mr-2" />
                        Base Notes
                      </h4>
                      <div className="space-y-2">
                        {product.notes.base.map((note) => (
                          <span key={note} className="inline-block glass-card px-3 py-1 text-sm rounded-full mr-2 mb-2 text-accent">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="animate-fade-in">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-medium text-accent">Customer Reviews</h4>
                    <Button variant="outline" className="btn-luxury text-sm">
                      Write a Review
                    </Button>
                  </div>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="glass-card p-6 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="font-medium text-accent mr-3">{review.name}</div>
                            {review.verified && (
                              <span className="luxury-badge text-xs">
                                <Check className="h-3 w-3 mr-1 inline" />
                                Verified
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-luxury-gold fill-current'
                                      : 'text-muted'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20 animate-slide-up">
            <h2 className="text-3xl font-luxury font-medium text-accent mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ModernProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;