import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Shop": [
      "All Fragrances",
      "New Arrivals", 
      "Best Sellers",
      "Limited Edition",
      "Gift Sets"
    ],
    "Collections": [
      "For Her",
      "For Him", 
      "Unisex",
      "Seasonal",
      "Signature Collection"
    ],
    "Support": [
      "Contact Us",
      "Size Guide",
      "Shipping Info",
      "Returns",
      "FAQ"
    ],
    "Company": [
      "About Us",
      "Our Story",
      "Careers",
      "Press",
      "Sustainability"
    ]
  };

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-luxury font-medium mb-4">
              Essence Royale
            </h3>
            <p className="text-accent-foreground/80 mb-6 leading-relaxed">
              Crafting exceptional fragrances since 1985. We believe every person 
              deserves to find their perfect scent - one that tells their unique story.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-accent-foreground/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-luxury font-medium text-lg mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-accent-foreground/80 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-accent-foreground/60">
              © 2024 Essence Royale. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-accent-foreground/80 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;