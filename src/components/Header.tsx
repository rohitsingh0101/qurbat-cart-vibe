import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top notification bar */}
      <div className="bg-luxury-gold text-luxury-maroon text-center py-2 px-4 text-sm font-medium">
        ✨ 11+ stores & 1,000+ customer requests... Qurbat is now online
      </div>
      
      {/* Main header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-luxury-pink rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="font-display text-2xl font-bold text-luxury-maroon">Qurbat</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="nav" className="bg-luxury-gold text-luxury-maroon rounded-full px-4 py-1 text-sm font-medium">
                NEW
              </Button>
              <Button variant="nav">SUITS</Button>
              <Button variant="nav">KURTA & KURTIS</Button>
              <Button variant="nav">DRESSES</Button>
              <Button variant="nav">CO-ORDS SET</Button>
              <Button variant="nav">COLLECTIONS</Button>
              <Button variant="nav">BAGS</Button>
              <Button variant="nav">DUPATTAS</Button>
              <Button variant="nav" className="bg-luxury-gold text-luxury-maroon rounded-full px-4 py-1 text-sm font-medium">
                SALE
              </Button>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-luxury-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;