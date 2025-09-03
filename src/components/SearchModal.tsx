import { useState, useEffect } from "react";
import { Search, X, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const trendingSearches = [
    "Rose Oud", "Vanilla Dreams", "Citrus Fresh", "Woody Amber", "Floral Bouquet"
  ];

  const recentSearches = [
    "Midnight Elegance", "Ocean Breeze", "Golden Sunrise"
  ];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-luxury-midnight/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative z-10 h-full flex flex-col transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* Header */}
        <div className="glass-card border-b border-luxury-rose-gold/20 p-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-luxury-rose-gold mr-3 animate-pulse-glow" />
              <h2 className="text-xl font-luxury text-white">Search Fragrances</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Search Input */}
        <div className="glass-card flex-1 p-6">
          <div className="container mx-auto max-w-3xl">
            <div className="relative mb-8">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-luxury-rose-gold" />
              <input
                type="text"
                placeholder="Search for your perfect fragrance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="luxury-input pl-16 pr-6 py-6 text-lg focus:scale-105"
                autoFocus
              />
            </div>

            {/* Trending Searches */}
            <div className="mb-8 animate-slide-up">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-luxury-rose-gold mr-2" />
                <h3 className="text-lg font-luxury text-white">Trending Now</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((search, index) => (
                  <button
                    key={search}
                    className="glass-card px-4 py-2 text-sm text-luxury-pearl hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full transition-all duration-300 border border-luxury-rose-gold/20"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fade-in 0.6s ease-out forwards'
                    }}
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-luxury text-white mb-4">Recent Searches</h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={search}
                      className="w-full text-left glass-card p-4 rounded-xl text-luxury-pearl hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 transition-all duration-300 border border-luxury-rose-gold/20"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        animation: 'slide-in-left 0.6s ease-out forwards'
                      }}
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;