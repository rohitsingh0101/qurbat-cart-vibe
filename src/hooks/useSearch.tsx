import { useState, useMemo } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  discount?: string;
  category?: string;
}

// All products data
const allProducts: Product[] = [
  // Featured Products
  {
    id: 1,
    name: "Royal Blue Embroidered Suit",
    price: 4999,
    originalPrice: 8299,
    image: "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=500&fit=crop",
    badge: "Bestseller",
    discount: "40% OFF",
    category: "Suits"
  },
  {
    id: 2,
    name: "Elegant Pink Anarkali",
    price: 3799,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop",
    discount: "37% OFF",
    category: "Dresses"
  },
  {
    id: 3,
    name: "Mint Green Palazzo Set",
    price: 2999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    badge: "New Arrival",
    discount: "33% OFF",
    category: "Suits"
  },
  {
    id: 4,
    name: "Traditional Maroon Lehenga",
    price: 7999,
    originalPrice: 12999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    badge: "Premium",
    discount: "38% OFF",
    category: "Dresses"
  },
  {
    id: 5,
    name: "Golden Festive Sharara",
    price: 5499,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1583391733981-3cc22d0d1ec8?w=400&h=500&fit=crop",
    badge: "Trending",
    discount: "39% OFF",
    category: "Suits"
  },
  {
    id: 6,
    name: "Cream Silk Kurta Set",
    price: 3299,
    originalPrice: 4999,
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop",
    discount: "34% OFF",
    category: "Kurta & Kurtis"
  },
  // Additional products for better search results
  {
    id: 7,
    name: "Black Velvet Kurta",
    price: 2799,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
    category: "Kurta & Kurtis"
  },
  {
    id: 8,
    name: "Red Silk Suit",
    price: 5999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1583391733943-7021fe8f2276?w=400&h=500&fit=crop",
    badge: "Sale",
    discount: "33% OFF",
    category: "Suits"
  },
  {
    id: 9,
    name: "Peach Floral Dress",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&sat=1.2&hue=30",
    category: "Dresses"
  },
  {
    id: 10,
    name: "White Cotton Kurta",
    price: 1899,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1571945180762-7853140a4ea4?w=400&h=500&fit=crop",
    category: "Kurta & Kurtis"
  }
];

export const useSearch = () => {
  const [query, setQuery] = useState('');
  
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category?.toLowerCase().includes(lowercaseQuery) ||
      product.badge?.toLowerCase().includes(lowercaseQuery)
    );
  }, [query]);

  const popularSearches = [
    'Kurta', 'Suit', 'Dress', 'Anarkali', 'Lehenga', 'Palazzo', 'Sharara'
  ];

  return {
    query,
    setQuery,
    searchResults,
    popularSearches,
    allProducts
  };
};