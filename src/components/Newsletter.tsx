import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-champagne to-luxury-pearl">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-luxury mb-6 font-luxury text-accent">
            Stay In The Scent
          </h2>
          <p className="text-luxury mb-8 text-accent/80">
            Be the first to discover new arrivals, exclusive collections, and 
            receive personalized fragrance recommendations tailored just for you.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="luxury-input pr-12"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>

          <p className="text-sm text-accent/60 mt-4">
            Join over 10,000 fragrance enthusiasts. Unsubscribe anytime.
          </p>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-accent">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <h4 className="font-luxury font-medium mb-2">Exclusive Offers</h4>
              <p className="text-sm text-accent/70">
                Get special discounts and early access to sales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-luxury font-medium mb-2">New Arrivals</h4>
              <p className="text-sm text-accent/70">
                Be first to know about latest fragrance launches
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🌸</span>
              </div>
              <h4 className="font-luxury font-medium mb-2">Personalized Tips</h4>
              <p className="text-sm text-accent/70">
                Receive curated recommendations just for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;