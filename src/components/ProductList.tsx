'use client';

import { useState, useMemo } from 'react';
import { Terminal } from 'lucide-react';
import { products } from '@/data/products';
import ProductFilters from '@/components/ProductFilters';
import ProductCard from '@/components/ProdcutCard';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 24;

export default function ProductList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.vendor.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      );
    }

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [search, category, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="mb-8 rounded-xl border border-border bg-card p-6 glow-border relative overflow-hidden">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono text-muted-foreground">
              $ GET api.agenty.com/:agent_id?limit=500
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-gradient">Scraping Sandbox</span>
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
            Explore 500+ sample products from open-source e-commerce datasets in
            this web scraping sandbox. Search, filter, paginate, and inspect
            real-world product data to practice web scraping, crawling and data extraction.
          </p>

          <div className="mt-3 flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-terminal-green">LIVE</span>
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">500 products</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">15 categories</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">20 vendors</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <ProductFilters
        search={search}
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={filtered.length}
      />

      {/* Product Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {paged.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {paged.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm font-mono text-muted-foreground">
            No products found matching your criteria
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
