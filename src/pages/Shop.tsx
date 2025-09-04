import { useState } from "react";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ui/product-card";
import productTshirt from "@/assets/product-tshirt.jpg";
import productDress from "@/assets/product-dress.jpg";
import productTrousers from "@/assets/product-trousers.jpg";

const Shop = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: "1",
      name: "Essential Tee",
      price: 98,
      image: productTshirt,
      category: "Essentials",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      material: "Organic Cotton"
    },
    {
      id: "2",
      name: "Midnight Dress",
      price: 295,
      image: productDress,
      category: "Dresses",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black"],
      material: "Viscose Blend"
    },
    {
      id: "3",
      name: "Tailored Trousers",
      price: 225,
      image: productTrousers,
      category: "Bottoms",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Charcoal"],
      material: "Wool Blend"
    },
    {
      id: "4",
      name: "Cashmere Sweater",
      price: 385,
      image: productTshirt,
      category: "Knitwear",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Cream", "Grey"],
      material: "Pure Cashmere"
    },
    {
      id: "5",
      name: "Silk Blouse",
      price: 195,
      image: productDress,
      category: "Tops",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "White", "Ivory"],
      material: "Mulberry Silk"
    },
    {
      id: "6",
      name: "Wool Coat",
      price: 495,
      image: productTrousers,
      category: "Outerwear",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Camel", "Navy"],
      material: "Virgin Wool"
    }
  ];

  const categories = ["All", "Essentials", "Dresses", "Tops", "Bottoms", "Knitwear", "Outerwear"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["Black", "White", "Navy", "Grey", "Cream", "Camel", "Ivory", "Charcoal"];
  const materials = ["Organic Cotton", "Viscose Blend", "Wool Blend", "Pure Cashmere", "Mulberry Silk", "Virgin Wool"];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Shop
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of timeless pieces
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full justify-between"
              >
                <span className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              {/* Category Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <Label htmlFor={category} className="text-sm font-medium">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Size Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={size} />
                      <Label htmlFor={size} className="text-sm font-medium">
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Color Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Color</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox id={color} />
                      <Label htmlFor={color} className="text-sm font-medium">
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Material Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material} className="flex items-center space-x-2">
                      <Checkbox id={material} />
                      <Label htmlFor={material} className="text-sm font-medium">
                        {material}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {products.length} products
              </p>

              <div className="flex items-center space-x-4">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;