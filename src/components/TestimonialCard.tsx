import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-accent text-accent" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground italic">"{content}"</p>
    </Card>
  );
};

export default TestimonialCard;