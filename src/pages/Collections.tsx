import Header from "@/components/Header";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold text-luxury-maroon mb-4">
              Our Collections
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections that celebrate the rich heritage of Indian craftsmanship.
            </p>
          </div>
        </div>
        <CategorySection />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Collections;