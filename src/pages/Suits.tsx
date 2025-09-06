import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const suits = [
  {
    id: 1,
    name: "Royal Blue Embroidered Suit",
    price: 4999,
    originalPrice: 8299,
    image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=500&fit=crop",
    badge: "Bestseller",
    discount: "40% OFF"
  },
  {
    id: 2,
    name: "Elegant Pink Anarkali Suit",
    price: 3799,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
    discount: "37% OFF"
  },
  {
    id: 3,
    name: "Mint Green Palazzo Suit",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    badge: "New Arrival",
    discount: "33% OFF"
  },
  {
    id: 4,
    name: "Traditional Maroon Suit",
    price: 7999,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    badge: "Premium",
    discount: "38% OFF"
  },
  {
    id: 5,
    name: "Golden Festive Suit",
    price: 5499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1583391733981-3cc22d0d1ec8?w=400&h=500&fit=crop",
    badge: "Trending",
    discount: "39% OFF"
  },
  {
    id: 6,
    name: "Cream Silk Suit",
    price: 3299,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop",
    discount: "34% OFF"
  }
];

const Suits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold text-luxury-maroon mb-4">
              Suits Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our exquisite range of traditional and contemporary suits, crafted with precision and elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suits.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suits;