import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury perfume collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="heading-hero mb-6 font-luxury">
            Discover Your
            <span className="block text-primary-glow">Signature Scent</span>
          </h1>
          
          <p className="text-luxury mb-8 max-w-2xl mx-auto">
            Immerse yourself in our curated collection of premium fragrances. 
            From timeless classics to contemporary masterpieces, find the perfect 
            perfume that captures your essence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-luxury">
              Explore Collection
            </button>
            <button className="btn-gold">
              Find Your Fragrance
            </button>
          </div>

          {/* Floating Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="float">
              <div className="text-3xl font-luxury font-medium text-primary mb-2">500+</div>
              <div className="text-sm font-modern text-muted-foreground uppercase tracking-wide">
                Premium Fragrances
              </div>
            </div>
            <div className="float" style={{ animationDelay: '2s' }}>
              <div className="text-3xl font-luxury font-medium text-primary mb-2">50+</div>
              <div className="text-sm font-modern text-muted-foreground uppercase tracking-wide">
                Luxury Brands
              </div>
            </div>
            <div className="float" style={{ animationDelay: '4s' }}>
              <div className="text-3xl font-luxury font-medium text-primary mb-2">98%</div>
              <div className="text-sm font-modern text-muted-foreground uppercase tracking-wide">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;