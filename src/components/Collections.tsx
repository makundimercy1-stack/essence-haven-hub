import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: "for-her",
      title: "For Her",
      description: "Elegant and sophisticated fragrances designed for the modern woman",
      image: "https://images.unsplash.com/photo-1586775100054-b8c711511ae8?w=600&h=400&fit=crop",
      count: "120+ fragrances",
      gradient: "from-luxury-rose-gold to-luxury-champagne",
    },
    {
      id: "for-him",
      title: "For Him", 
      description: "Bold and distinctive scents that embody masculine elegance",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&h=400&fit=crop",
      count: "80+ fragrances",
      gradient: "from-luxury-charcoal to-luxury-midnight",
    },
    {
      id: "unisex",
      title: "Unisex",
      description: "Timeless fragrances that transcend traditional boundaries",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=600&h=400&fit=crop",
      count: "60+ fragrances",
      gradient: "from-luxury-gold to-luxury-champagne",
    },
    {
      id: "limited-edition",
      title: "Limited Edition",
      description: "Exclusive and rare fragrances available for a limited time",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      count: "12 exclusive scents",
      gradient: "from-luxury-midnight to-luxury-rose-gold",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-luxury mb-4 font-luxury">
            Explore Our Collections
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            From timeless classics to contemporary masterpieces, discover curated 
            collections that speak to every preference and personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-luxury"
            >
              {/* Background Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-modern font-medium uppercase tracking-wider mb-2 opacity-90">
                    {collection.count}
                  </p>
                  <h3 className="text-3xl font-luxury font-medium mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-lg font-modern leading-relaxed mb-6 opacity-90">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium uppercase tracking-wide group-hover:text-luxury-champagne transition-colors duration-300">
                    <span>Explore Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;