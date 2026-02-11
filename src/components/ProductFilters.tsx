import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCategories } from "@/data/products";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  totalResults: number;
}

const ProductFilters = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortBy,
  onSortChange,
  totalResults,
}: ProductFiltersProps) => {
  const categories = getCategories();
  const hasFilters = search || category !== 'all';

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products... (title, vendor, SKU)"
            className="pl-9 bg-secondary border-border font-mono text-sm h-9"
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-[160px] bg-secondary border-border font-mono text-sm h-9">
              <SlidersHorizontal className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="font-mono text-sm">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat} className="font-mono text-sm">{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-[140px] bg-secondary border-border font-mono text-sm h-9">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default" className="font-mono text-sm">Default</SelectItem>
              <SelectItem value="price-asc" className="font-mono text-sm">Price: Low</SelectItem>
              <SelectItem value="price-desc" className="font-mono text-sm">Price: High</SelectItem>
              <SelectItem value="rating" className="font-mono text-sm">Top Rated</SelectItem>
              <SelectItem value="name" className="font-mono text-sm">A → Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-muted-foreground">
          <span className="text-terminal-green">{totalResults}</span> results found
        </span>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onSearchChange('');
              onCategoryChange('all');
            }}
            className="h-6 text-xs font-mono text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3 mr-1" />
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
