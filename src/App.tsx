import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Suits from "./pages/Suits";
import KurtaKurtis from "./pages/KurtaKurtis";
import Dresses from "./pages/Dresses";
import Collections from "./pages/Collections";
import Sale from "./pages/Sale";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/suits" element={<Suits />} />
              <Route path="/kurta-kurtis" element={<KurtaKurtis />} />
              <Route path="/dresses" element={<Dresses />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* Placeholder routes for remaining nav items */}
              <Route path="/new" element={<Sale />} />
              <Route path="/co-ords" element={<Dresses />} />
              <Route path="/bags" element={<Collections />} />
              <Route path="/dupattas" element={<Collections />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
