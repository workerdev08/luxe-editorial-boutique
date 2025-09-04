import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, Star, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ui/product-card";
import productTshirt from "@/assets/product-tshirt.jpg";
import productDress from "@/assets/product-dress.jpg";
import productTrousers from "@/assets/product-trousers.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: "1",
    name: "Essential Tee",
    price: 98,
    images: [productTshirt, productDress, productTrousers],
    category: "Essentials",
    description: "A timeless essential crafted from the finest organic cotton. This premium tee features a relaxed fit with subtle tailoring details that elevate it beyond the ordinary.",
    features: [
      "100% Organic Cotton",
      "Pre-shrunk for lasting fit",
      "Reinforced seams",
      "Side-seamed construction",
      "Tear-away label for comfort"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    material: "Organic Cotton",
    care: "Machine wash cold, tumble dry low, iron if needed",
    sustainability: "Made with certified organic cotton in our carbon-neutral facility",
    reviews: {
      average: 4.8,
      count: 127
    }
  };

  const relatedProducts = [
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

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-muted rounded-lg group">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden bg-muted rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 2}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                  {product.category}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.reviews.average)
                          ? 'fill-current text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews.average} ({product.reviews.count} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-bold text-accent mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Size Selection */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Size</Label>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="aspect-square"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium mb-3 block">Quantity</Label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange('decrease')}
                    disabled={quantity === 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 border rounded-md min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange('increase')}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full font-medium"
                disabled={!selectedSize}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <Separator />

            {/* Product Details */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4 mt-6">
                <div>
                  <h4 className="font-serif font-semibold mb-2">Features</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-2">Material</h4>
                  <p className="text-sm text-muted-foreground">{product.material}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="care" className="mt-6">
                <p className="text-sm text-muted-foreground">{product.care}</p>
              </TabsContent>
              
              <TabsContent value="sustainability" className="mt-6">
                <p className="text-sm text-muted-foreground">{product.sustainability}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;