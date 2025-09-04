import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/restaurant-hero.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import wineSelection from "@/assets/wine-selection.jpg";

const Home = () => {
  const featuredDishes = [
    {
      id: "1",
      name: "Seared Duck Breast",
      description: "With cherry gastrique and seasonal vegetables",
      image: dish1,
      price: "$42"
    },
    {
      id: "2", 
      name: "Chocolate Soufflé",
      description: "Classic French dessert with gold leaf",
      image: dish2,
      price: "$18"
    },
    {
      id: "3",
      name: "Wine Pairing",
      description: "Curated selection by our sommelier",
      image: wineSelection,
      price: "$85"
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
        <div className="absolute inset-0 bg-restaurant-burgundy/40" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-restaurant-gold mr-2" />
              <span className="text-sm uppercase tracking-widest text-restaurant-cream font-serif">
                Michelin Guide Recognition
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-script font-bold text-restaurant-cream mb-6 text-balance leading-tight">
              An Evening of
              <br />
              Culinary Art
            </h1>
            
            <p className="text-lg md:text-xl text-restaurant-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed font-serif">
              Experience the finest French cuisine crafted with passion, 
              seasonal ingredients, and timeless techniques in an intimate setting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                variant="elegant"
                className="px-8 font-serif"
              >
                <Link to="/reservations">
                  Reserve Your Table
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                variant="elegant-outline"
                size="lg"
                asChild
                className="px-8 font-serif"
              >
                <Link to="/menu">
                  View Menu
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-restaurant-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <span className="text-sm uppercase tracking-widest text-restaurant-burgundy/60 mb-4 block font-serif">
              Welcome to Lumière
            </span>
            <h2 className="text-4xl md:text-5xl font-script font-bold text-restaurant-burgundy mb-8">
              Where Every Meal is a Masterpiece
            </h2>
            <p className="text-lg text-restaurant-burgundy/80 leading-relaxed font-serif">
              For over two decades, Chef Marcel Dubois has been creating extraordinary 
              culinary experiences that celebrate the finest traditions of French gastronomy. 
              Each dish tells a story, each flavor a carefully composed note in our 
              symphony of taste.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-restaurant-burgundy/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <span className="text-sm uppercase tracking-widest text-restaurant-burgundy/60 mb-4 block font-serif">
              Signature Creations
            </span>
            <h2 className="text-4xl md:text-5xl font-script font-bold text-restaurant-burgundy mb-6">
              Chef's Recommendations
            </h2>
            <p className="text-lg text-restaurant-burgundy/80 max-w-2xl mx-auto font-serif">
              Discover our most celebrated dishes, each crafted with the finest ingredients 
              and presented with artistic precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {featuredDishes.map((dish, index) => (
              <div 
                key={dish.id}
                className="group animate-scale-in bg-restaurant-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-script font-semibold text-restaurant-burgundy mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-restaurant-burgundy/70 mb-4 font-serif">
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-script font-bold text-restaurant-gold">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="elegant-outline"
              size="lg"
              className="font-serif px-8"
            >
              <Link to="/menu">
                Explore Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 bg-restaurant-burgundy text-restaurant-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Clock className="h-8 w-8 text-restaurant-gold mx-auto mb-4" />
              <h3 className="text-xl font-script font-semibold mb-2">Hours</h3>
              <p className="text-restaurant-cream/80 font-serif">
                Tuesday - Saturday<br />
                5:30 PM - 10:00 PM
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <MapPin className="h-8 w-8 text-restaurant-gold mx-auto mb-4" />
              <h3 className="text-xl font-script font-semibold mb-2">Location</h3>
              <p className="text-restaurant-cream/80 font-serif">
                123 Gourmet Avenue<br />
                Downtown District
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Star className="h-8 w-8 text-restaurant-gold mx-auto mb-4" />
              <h3 className="text-xl font-script font-semibold mb-2">Accolades</h3>
              <p className="text-restaurant-cream/80 font-serif">
                Michelin Guide Featured<br />
                James Beard Nominated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-restaurant-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-script font-bold text-restaurant-burgundy mb-8">
              Ready for an Unforgettable Evening?
            </h2>
            <p className="text-lg text-restaurant-burgundy/80 mb-8 font-serif">
              Reserve your table today and embark on a culinary journey that will 
              awaken your senses and create lasting memories.
            </p>
            
            <Button 
              asChild
              size="lg"
              variant="elegant"
              className="font-serif px-8"
            >
              <Link to="/reservations">
                Make Reservation
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