import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const dresses = [
  {
    id: 1,
    name: "Floral Maxi Dress",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    badge: "Trending",
    discount: "33% OFF"
  },
  {
    id: 2,
    name: "Elegant Evening Dress",
    price: 4999,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1583391733981-3cc22d0d1ec8?w=400&h=500&fit=crop",
    discount: "38% OFF"
  },
  {
    id: 3,
    name: "Indo-Western Dress",
    price: 3599,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
    badge: "Fusion",
    discount: "35% OFF"
  }
];

const Dresses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold text-luxury-maroon mb-4">
              Dresses Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elegant dresses that blend traditional charm with contemporary style for the modern woman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dresses.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dresses;