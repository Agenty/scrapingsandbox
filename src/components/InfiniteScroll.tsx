'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { products } from '@/data/products';
import { Loader2 } from 'lucide-react';
import ProductCard from './ProdcutCard';

const BATCH_SIZE = 20;

const InfiniteScroll = () => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    if (loading || visibleCount >= products.length) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, products.length));
      setLoading(false);
    }, 800);
  }, [loading, visibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 },
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  const visible = products.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div ref={loaderRef} className="flex justify-center py-10">
        {loading && (
          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            Loading more products...
          </div>
        )}
        {visibleCount >= products.length && (
          <p className="text-sm font-mono text-muted-foreground">
            All {products.length} products loaded.
          </p>
        )}
      </div>
    </>
  );
};

export default InfiniteScroll;
