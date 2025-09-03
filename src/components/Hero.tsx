import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="parallax-bg w-full h-full scale-110"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <img
            src={heroImage}
            alt="Luxury perfume collection"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-midnight/60 via-transparent to-luxury-charcoal/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-luxury-rose-gold/30 rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-4 animate-slide-in-left">
              <Sparkles className="h-8 w-8 text-luxury-rose-gold mr-3 animate-wiggle" />
              <span className="text-sm font-modern font-medium uppercase tracking-wider text-luxury-rose-gold">
                Premium Collection
              </span>
              <Sparkles className="h-8 w-8 text-luxury-rose-gold ml-3 animate-wiggle" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-luxury font-light mb-6 leading-none animate-bounce-in">
              <span className="block text-white">Discover Your</span>
              <span className="block bg-gradient-to-r from-luxury-rose-gold via-luxury-gold to-luxury-champagne bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Signature Scent
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto text-luxury-pearl">
              Immerse yourself in our curated collection of premium fragrances. 
              From timeless classics to contemporary masterpieces, find the perfect 
              perfume that captures your essence and tells your story.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-luxury shimmer animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                Explore Collection
              </button>
              <button className="btn-gold shimmer animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
                Find Your Fragrance
              </button>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="glass-card p-8 float">
              <div className="text-4xl font-luxury font-medium bg-gradient-to-r from-luxury-rose-gold to-luxury-gold bg-clip-text text-transparent mb-3">
                500+
              </div>
              <div className="text-sm font-modern text-luxury-pearl uppercase tracking-wide">
                Premium Fragrances
              </div>
            </div>
            <div className="glass-card p-8 float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl font-luxury font-medium bg-gradient-to-r from-luxury-gold to-luxury-champagne bg-clip-text text-transparent mb-3">
                50+
              </div>
              <div className="text-sm font-modern text-luxury-pearl uppercase tracking-wide">
                Luxury Brands
              </div>
            </div>
            <div className="glass-card p-8 float" style={{ animationDelay: '4s' }}>
              <div className="text-4xl font-luxury font-medium bg-gradient-to-r from-luxury-champagne to-luxury-rose-gold bg-clip-text text-transparent mb-3">
                98%
              </div>
              <div className="text-sm font-modern text-luxury-pearl uppercase tracking-wide">
                Customer Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce-in" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-full border border-luxury-rose-gold/30">
          <ChevronDown className="h-6 w-6 text-luxury-rose-gold animate-bounce" />
        </div>
        <div className="text-xs font-modern text-luxury-pearl uppercase tracking-wider mt-2 animate-fade-in" style={{ animationDelay: '2.5s' }}>
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;