import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-hero min-h-[80vh] py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🌸</div>
      <div className="absolute top-40 right-20 text-4xl opacity-20">🌿</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-20">✨</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20">🌺</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Product images */}
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-3xl p-4 shadow-elegant transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop" 
                alt="Elegant green ethnic kurta suit" 
                className="w-60 h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="bg-white rounded-3xl p-4 shadow-elegant transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop" 
                alt="Elegant pink ethnic kurta suit" 
                className="w-60 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-luxury-maroon">Crafted</span>
                <br />
                <span className="text-luxury-pink italic">with care,</span>
                <br />
                <span className="text-luxury-maroon">Curated</span>
                <br />
                <span className="text-luxury-sage italic">for elegance</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover the finest collection of traditional Indian wear, meticulously crafted by skilled artisans.
              </p>
            </div>

            <Button variant="luxury" size="lg" className="text-lg px-8 py-6 rounded-full shadow-elegant">
              experience the soul of Indian craftsmanship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;