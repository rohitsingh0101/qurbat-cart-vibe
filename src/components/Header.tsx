import { Button } from "@/components/ui/button";
import { Search, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-luxury-pink rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="font-display text-2xl font-bold text-luxury-maroon">Qurbat</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/new">
                <Button variant="nav" className="bg-luxury-gold text-luxury-maroon rounded-full px-4 py-1 text-sm font-medium">
                  NEW
                </Button>
              </Link>
              <Link to="/suits">
                <Button variant="nav">SUITS</Button>
              </Link>
              <Link to="/kurta-kurtis">
                <Button variant="nav">KURTA & KURTIS</Button>
              </Link>
              <Link to="/dresses">
                <Button variant="nav">DRESSES</Button>
              </Link>
              <Link to="/co-ords">
                <Button variant="nav">CO-ORDS SET</Button>
              </Link>
              <Link to="/collections">
                <Button variant="nav">COLLECTIONS</Button>
              </Link>
              <Link to="/bags">
                <Button variant="nav">BAGS</Button>
              </Link>
              <Link to="/dupattas">
                <Button variant="nav">DUPATTAS</Button>
              </Link>
              <Link to="/sale">
                <Button variant="nav" className="bg-luxury-gold text-luxury-maroon rounded-full px-4 py-1 text-sm font-medium">
                  SALE
                </Button>
              </Link>
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