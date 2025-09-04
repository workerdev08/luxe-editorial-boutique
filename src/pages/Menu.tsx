import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const categories = [
    { id: "starters", name: "Starters" },
    { id: "mains", name: "Mains" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const menuItems = {
    starters: [
      {
        id: "1",
        name: "Seared Foie Gras",
        description: "Pan-seared with fig compote and brioche",
        price: "$28",
        dietary: ["GF Option"],
        image: dish1
      },
      {
        id: "2",
        name: "Oyster Trio",
        description: "Fresh Blue Point, Kumamoto, and Belon with mignonette",
        price: "$24",
        dietary: ["GF"]
      },
      {
        id: "3",
        name: "Lobster Bisque",
        description: "Rich cream soup with cognac and chive oil",
        price: "$18",
        dietary: []
      },
    ],
    mains: [
      {
        id: "4",
        name: "Wagyu Beef Tenderloin",
        description: "8oz with truffle jus and seasonal vegetables",
        price: "$68",
        dietary: ["GF"],
        image: dish1
      },
      {
        id: "5",
        name: "Pan-Roasted Halibut",
        description: "With saffron beurre blanc and microgreens",
        price: "$42",
        dietary: ["GF"]
      },
      {
        id: "6",
        name: "Duck Confit",
        description: "Leg confit with cherry gastrique and wild rice",
        price: "$38",
        dietary: []
      },
    ],
    desserts: [
      {
        id: "7",
        name: "Chocolate Soufflé",
        description: "Classic French dessert with gold leaf",
        price: "$18",
        dietary: ["V Option"],
        image: dish2
      },
      {
        id: "8",
        name: "Crème Brûlée",
        description: "Vanilla bean custard with caramelized sugar",
        price: "$14",
        dietary: ["V", "GF"]
      },
      {
        id: "9",
        name: "Tarte Tatin",
        description: "Upside-down apple tart with calvados ice cream",
        price: "$16",
        dietary: ["V"]
      },
    ],
    drinks: [
      {
        id: "10",
        name: "Wine Pairing Menu",
        description: "Curated selection by our sommelier",
        price: "$85",
        dietary: []
      },
      {
        id: "11",
        name: "Signature Cocktails",
        description: "House-crafted with premium spirits",
        price: "$16-22",
        dietary: []
      },
      {
        id: "12",
        name: "Non-Alcoholic Pairings",
        description: "Artisanal juices and botanical waters",
        price: "$28",
        dietary: ["Non-Alcoholic"]
      },
    ],
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-restaurant-burgundy text-restaurant-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-script font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-restaurant-cream/90 font-serif">
            A culinary journey through seasonal flavors and timeless French techniques
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-restaurant-cream sticky top-16 z-40 border-b border-restaurant-gold/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-serif text-lg transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? "text-restaurant-burgundy border-b-2 border-restaurant-gold font-semibold"
                    : "text-restaurant-burgundy/60 hover:text-restaurant-burgundy"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={item.id}
                className="group bg-restaurant-cream border border-restaurant-gold/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {item.image && (
                    <div className="lg:w-48 h-32 lg:h-24 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-script font-semibold text-restaurant-burgundy">
                        {item.name}
                      </h3>
                      <span className="text-xl font-script font-bold text-restaurant-gold">
                        {item.price}
                      </span>
                    </div>
                    
                    <p className="text-restaurant-burgundy/80 mb-3 font-serif">
                      {item.description}
                    </p>
                    
                    {item.dietary.length > 0 && (
                      <div className="flex gap-2">
                        {item.dietary.map((diet) => (
                          <Badge
                            key={diet}
                            variant="outline"
                            className="text-xs border-restaurant-gold text-restaurant-burgundy"
                          >
                            {diet}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-restaurant-burgundy/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-script font-bold text-restaurant-burgundy mb-6">
            Ready to Experience These Flavors?
          </h2>
          <p className="text-lg text-restaurant-burgundy/80 mb-8 font-serif">
            Reserve your table and let our culinary team create an unforgettable dining experience for you.
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
      </section>
    </div>
  );
};

export default Menu;