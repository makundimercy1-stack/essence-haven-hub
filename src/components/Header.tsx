import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, Heart, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "For Her", href: "/for-her" },
    { name: "For Him", href: "/for-him" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-card border-b border-luxury-rose-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center group">
            <Sparkles className="h-6 w-6 text-luxury-rose-gold mr-2 animate-pulse-glow" />
            <h1 className="text-2xl font-luxury font-medium text-accent tracking-wide group-hover:text-luxury-rose-gold transition-colors duration-300">
              Essence Royale
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-sm font-modern font-medium text-foreground hover:text-luxury-rose-gold transition-all duration-300 relative group"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slide-in-left 0.6s ease-out forwards'
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="magnetic-btn text-foreground hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="magnetic-btn text-foreground hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full transition-all duration-300"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="magnetic-btn text-foreground hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full transition-all duration-300"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="magnetic-btn text-foreground hover:text-luxury-rose-gold hover:bg-luxury-rose-gold/10 rounded-full relative transition-all duration-300"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="luxury-badge -top-2 -right-2 h-6 w-6 text-xs animate-bounce-in">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-card border-b border-luxury-rose-gold/20 shadow-luxury animate-slide-up">
            <nav className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-modern font-medium text-foreground hover:text-luxury-rose-gold transition-all duration-300 py-2 px-4 rounded-lg hover:bg-luxury-rose-gold/10"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slide-in-left 0.6s ease-out forwards'
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-luxury-rose-gold/20">
                <Button variant="ghost" size="icon" className="hover:bg-luxury-rose-gold/10 rounded-full">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-luxury-rose-gold/10 rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-luxury-rose-gold/10 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative hover:bg-luxury-rose-gold/10 rounded-full">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="luxury-badge -top-2 -right-2 h-6 w-6 text-xs">
                    0
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;