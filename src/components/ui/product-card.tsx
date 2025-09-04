import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  className?: string;
}

const ProductCard = ({ id, name, price, image, category, className }: ProductCardProps) => {
  return (
    <Link 
      to={`/product/${id}`}
      className={cn(
        "group block overflow-hidden transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-4 space-y-1">
        {category && (
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            {category}
          </p>
        )}
        <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        <p className="font-medium text-accent">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;