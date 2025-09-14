import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const ProductCard = ({
  name,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  badge,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {badge && (
          <span className="absolute top-2 left-2 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground uppercase tracking-wide">{category}</p>
        <h3 className="text-lg font-bold text-foreground mt-1 line-clamp-2">{name}</h3>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? "fill-accent text-accent" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({reviews})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          <Button variant="cta" size="sm" className="flex items-center gap-1">
            <ShoppingCart className="h-3 w-3" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;