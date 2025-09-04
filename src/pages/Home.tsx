import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
import productDress from "@/assets/product-dress.jpg";
import productTrousers from "@/assets/product-trousers.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Essential Tee",
      price: 98,
      image: productTshirt,
      category: "Essentials"
    },
    {
      id: "2", 
      name: "Midnight Dress",
      price: 295,
      image: productDress,
      category: "Dresses"
    },
    {
      id: "3",
      name: "Tailored Trousers",
      price: 225,
      image: productTrousers,
      category: "Bottoms"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-luxury-black/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-accent mr-2" />
              <span className="text-sm uppercase tracking-widest text-luxury-cream">
                New Collection
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-luxury-cream mb-6 text-balance leading-tight">
              Timeless
              <br />
              Minimalism
            </h1>
            
            <p className="text-lg md:text-xl text-luxury-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of essential pieces crafted with 
              exceptional attention to detail and sustainable materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-luxury-cream text-luxury-black hover:bg-luxury-cream-warm transition-colors font-medium px-8"
              >
                <Link to="/shop">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                asChild
                className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-black transition-colors font-medium px-8"
              >
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Signature Pieces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each piece is thoughtfully designed to transcend seasons and trends, 
              creating a wardrobe that speaks to the modern minimalist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="font-medium px-8"
            >
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe in the power of simplicity. Each garment is an investment 
                in quality, designed to be cherished for years to come.
              </p>
              <p>
                Our commitment extends beyond fashion to sustainability, ethical production, 
                and timeless design that transcends fleeting trends.
              </p>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="mt-8 font-medium px-8"
            >
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;