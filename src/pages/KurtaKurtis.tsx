import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const kurtaKurtis = [
  {
    id: 1,
    name: "Cotton Printed Kurta",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
    badge: "Comfort Wear",
    discount: "33% OFF"
  },
  {
    id: 2,
    name: "Embroidered Kurti",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    discount: "38% OFF"
  },
  {
    id: 3,
    name: "Silk Kurta Set",
    price: 3599,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop",
    badge: "Premium",
    discount: "35% OFF"
  },
  {
    id: 4,
    name: "Casual Cotton Kurti",
    price: 1599,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    discount: "33% OFF"
  }
];

const KurtaKurtis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold text-luxury-maroon mb-4">
              Kurta & Kurtis
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comfortable and stylish kurtas and kurtis for every occasion. Perfect blend of tradition and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kurtaKurtis.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default KurtaKurtis;