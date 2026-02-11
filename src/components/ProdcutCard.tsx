import { Star, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import type { Product } from "@/data/products";
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-xl border border-border bg-card p-3 card-hover"
    >
      <div className="relative mb-3 overflow-hidden rounded-lg bg-secondary aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
            <span className="rounded-full bg-destructive/90 px-3 py-1 text-xs font-mono text-destructive-foreground">
              OUT OF STOCK
            </span>
          </div>
        )}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border">
            <ExternalLink className="h-3.5 w-3.5 text-primary" />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground truncate">
            {product.vendor}
          </span>
          <div className="flex items-center gap-0.5 shrink-0">
            <Star className="h-3 w-3 fill-terminal-yellow text-terminal-yellow" />
            <span className="text-[11px] font-mono text-muted-foreground">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold font-mono text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs font-mono text-muted-foreground line-through">
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1 pt-1">
          <Badge variant="secondary" className="text-[10px] font-mono px-1.5 py-0">
            {product.category}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono px-1.5 py-0 text-muted-foreground">
            {product.sku}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
