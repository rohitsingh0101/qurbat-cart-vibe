import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, TrendingUp } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import ProductCard from '@/components/ProductCard';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const { query, setQuery, searchResults, popularSearches } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open, setQuery]);

  const handlePopularSearch = (search: string) => {
    setQuery(search);
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 gap-0">
        {/* Search Header */}
        <div className="border-b border-border p-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for products, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="pl-10 pr-10 h-12 text-lg border-none bg-muted/30 focus-visible:ring-0 focus-visible:ring-offset-0"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 rounded-full hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Search Content */}
        <ScrollArea className="flex-1 p-6">
          {!query && (
            <div className="space-y-6">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-luxury-pink" />
                  <h3 className="font-medium text-foreground">Popular Searches</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <Badge
                      key={search}
                      variant="secondary"
                      className="cursor-pointer hover:bg-luxury-pink hover:text-white transition-colors bg-muted text-foreground border-none"
                      onClick={() => handlePopularSearch(search)}
                    >
                      {search}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Search Tips */}
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-medium text-foreground mb-2">Start typing to search</h3>
                <p className="text-muted-foreground text-sm">
                  Search by product name, category, or style
                </p>
              </div>
            </div>
          )}

          {query && (
            <div className="space-y-6">
              {/* Search Results Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground">
                  {searchResults.length > 0 
                    ? `Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''} for "${query}"`
                    : `No results for "${query}"`
                  }
                </h3>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <h3 className="font-medium text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Try adjusting your search or browse our popular categories
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {popularSearches.slice(0, 4).map((search) => (
                      <Badge
                        key={search}
                        variant="secondary"
                        className="cursor-pointer hover:bg-luxury-pink hover:text-white transition-colors"
                        onClick={() => handlePopularSearch(search)}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;