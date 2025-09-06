import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Suits from "./pages/Suits";
import KurtaKurtis from "./pages/KurtaKurtis";
import Dresses from "./pages/Dresses";
import Collections from "./pages/Collections";
import Sale from "./pages/Sale";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);

export default App;
