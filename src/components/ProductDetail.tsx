'use client';

import {
  ArrowLeft,
  Star,
  Tag,
  Package,
  Clock,
  Code2,
  Copy,
  Check,
} from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/data/products';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-lg font-mono text-muted-foreground">
          Product not found
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-primary hover:underline font-mono"
        >
          ← Back to products
        </Link>
      </div>
    );
  }

  const jsonData = JSON.stringify(product, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="h-full w-full object-cover"
              unoptimized
            />
            {!product.inStock && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                <span className="rounded-full bg-destructive/90 px-4 py-1.5 text-sm font-mono text-destructive-foreground">
                  OUT OF STOCK
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {product.vendor}
              </span>
              <Badge variant="secondary" className="text-[10px] font-mono">
                {product.category}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-terminal-yellow text-terminal-yellow" />
                <span className="text-sm font-mono font-semibold text-foreground">
                  {product.rating}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              <span
                className={`text-xs font-mono ${product.inStock ? 'text-terminal-green' : 'text-destructive'}`}
              >
                {product.inStock ? '● In Stock' : '● Out of Stock'}
              </span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold font-mono text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-lg font-mono text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
            {product.compareAtPrice && (
              <Badge className="bg-terminal-green/10 text-terminal-green border-terminal-green/20 font-mono text-xs">
                {Math.round((1 - product.price / product.compareAtPrice) * 100)}
                % OFF
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-secondary/50 p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Package className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  SKU
                </span>
              </div>
              <span className="text-sm font-mono text-foreground">
                {product.sku}
              </span>
            </div>
            <div className="rounded-lg border border-border bg-secondary/50 p-3">
              <div className="flex items-center gap-1.5 mb-1">
                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] font-mono uppercase text-muted-foreground">
                  Scraped
                </span>
              </div>
              <span className="text-sm font-mono text-foreground">
                {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Tag className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[10px] font-mono uppercase text-muted-foreground">
                Tags
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* JSON Preview */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">
                  Scraped JSON Data
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-6 text-xs font-mono gap-1"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-terminal-green" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
            <pre className="p-4 text-xs font-mono text-muted-foreground overflow-auto max-h-64 leading-relaxed">
              {jsonData}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
