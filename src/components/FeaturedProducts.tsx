import ModernProductCard from "./ModernProductCard";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Midnight Elegance",
      brand: "Noir Luxe",
      price: 185,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop",
      rating: 4.8,
      reviewCount: 124,
      notes: ["Bergamot", "Rose", "Sandalwood"],
      isBestseller: true,
    },
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
    },
    {
      id: "5",
      name: "Vanilla Dreams",
      brand: "Sweet Harmony",
      price: 135,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
      rating: 4.6,
      reviewCount: 203,
      notes: ["Vanilla", "Tonka Bean", "Musk"],
    },
    {
      id: "6",
      name: "Forest Mystique",
      brand: "Wild Essence",
      price: 175,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop",
      rating: 4.8,
      reviewCount: 91,
      notes: ["Pine", "Vetiver", "Moss"],
      isNew: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-luxury mb-4 font-luxury">
            Featured Fragrances
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Discover our handpicked selection of bestselling perfumes, 
            each one chosen for its exceptional quality and distinctive character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ModernProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-bounce-in" style={{ animationDelay: '0.8s' }}>
          <button className="btn-luxury shimmer">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;