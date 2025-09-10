import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  discount?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
    
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
    
    setIsAdding(false);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} ${isLiked ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.badge && (
              <Badge variant="secondary" className="bg-luxury-pink text-white border-none">
                {product.badge}
              </Badge>
            )}
            {product.discount && (
              <Badge variant="destructive" className="bg-luxury-gold text-luxury-maroon border-none">
                {product.discount}
              </Badge>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost" 
            size="icon"
            className={`absolute top-4 right-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors ${isLiked ? 'text-luxury-pink' : 'text-muted-foreground'}`}
            onClick={toggleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick add to cart overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={handleAddToCart}
              disabled={isAdding}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              {isAdding ? "Adding..." : "Quick Add"}
            </Button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-medium text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-xl font-semibold text-luxury-maroon">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button 
            variant="outline" 
            className="w-full group-hover:bg-luxury-pink group-hover:text-white group-hover:border-luxury-pink transition-colors"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {isAdding ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;