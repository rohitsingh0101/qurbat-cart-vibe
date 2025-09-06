import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const saleProducts = [
  {
    id: 1,
    name: "Royal Blue Embroidered Suit",
    price: 2999,
    originalPrice: 8299,
    image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=500&fit=crop",
    badge: "Limited Time",
    discount: "64% OFF"
  },
  {
    id: 2,
    name: "Elegant Pink Anarkali",
    price: 2199,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
    discount: "63% OFF"
  },
  {
    id: 3,
    name: "Mint Green Palazzo Set",
    price: 1499,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    badge: "Clearance",
    discount: "67% OFF"
  },
  {
    id: 4,
    name: "Traditional Maroon Lehenga",
    price: 4999,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    badge: "Final Sale",
    discount: "62% OFF"
  }
];

const Sale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-gradient-luxury text-white py-4 px-8 rounded-2xl inline-block mb-6">
              <h1 className="font-display text-5xl font-bold mb-2">
                🔥 MEGA SALE 🔥
              </h1>
              <p className="text-lg">
                Up to 70% OFF on selected items
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these incredible deals! Limited time offers on premium ethnic wear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sale;