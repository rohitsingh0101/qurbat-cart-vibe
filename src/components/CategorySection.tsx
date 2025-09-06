import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Ethnic Suits",
    description: "Traditional elegance redefined",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Kurta & Kurtis",
    description: "Comfort meets style",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Indo-Western",
    description: "Fusion fashion at its finest",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Festive Collection",
    description: "Celebration-ready outfits",
    image: "https://images.unsplash.com/photo-1583391733981-3cc22d0d1ec8?w=400&h=300&fit=crop"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl">✨</span>
            <h2 className="font-display text-4xl font-bold text-luxury-maroon mx-4">Shop By Category</h2>
            <span className="text-3xl">✨</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of authentic Indian ethnic wear, each piece telling a story of tradition and craftsmanship.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold text-luxury-maroon mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" size="sm" className="group-hover:bg-luxury-pink group-hover:text-white group-hover:border-luxury-pink transition-colors">
                    Explore Collection
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <Button variant="secondary" size="lg" className="px-8 py-3">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;