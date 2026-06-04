'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Pagination from '@/components/Pagination';
import { Star, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PAGE_SIZE = 25;

type SortKey = 'id' | 'title' | 'vendor' | 'category' | 'price' | 'rating';

const DataTable = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const filtered = useMemo(() => {
    let result = [...products];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.vendor.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q),
      );
    }
    result.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp =
        typeof av === 'string'
          ? (av as string).localeCompare(bv as string)
          : (av as number) - (bv as number);
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return result;
  }, [search, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const SortHeader = ({ label, field }: { label: string; field: SortKey }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-foreground transition-colors"
    >
      {label}
      <ArrowUpDown className="h-3 w-3" />
    </button>
  );

  return (
    <>
      <div className="mb-4">
        <Input
          placeholder="Search by title, vendor, or SKU..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm bg-card border-border font-mono text-sm"
        />
      </div>

      <div className="product-table rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="font-mono text-xs">
                <SortHeader label="ID" field="id" />
              </TableHead>
              <TableHead className="font-mono text-xs">Image</TableHead>
              <TableHead className="font-mono text-xs">
                <SortHeader label="Title" field="title" />
              </TableHead>
              <TableHead className="font-mono text-xs">
                <SortHeader label="Vendor" field="vendor" />
              </TableHead>
              <TableHead className="font-mono text-xs">
                <SortHeader label="Category" field="category" />
              </TableHead>
              <TableHead className="font-mono text-xs">
                <SortHeader label="Price" field="price" />
              </TableHead>
              <TableHead className="font-mono text-xs">
                <SortHeader label="Rating" field="rating" />
              </TableHead>
              <TableHead className="font-mono text-xs">Stock</TableHead>
              <TableHead className="font-mono text-xs">SKU</TableHead>
              <TableHead className="font-mono text-xs">Variants</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paged.map((p) => (
              <TableRow key={p.id} className="product-row">
                <TableCell className="product-id font-mono text-xs text-muted-foreground">
                  {p.id}
                </TableCell>
                <TableCell className="product-image">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded object-cover"
                    loading="lazy"
                    unoptimized
                  />
                </TableCell>
                <TableCell className="product-name">
                  <Link
                    href={`/product/${p.id}`}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {p.title}
                  </Link>
                </TableCell>
                <TableCell className="vendor text-xs text-muted-foreground">
                  {p.vendor}
                </TableCell>
                <TableCell className="category">
                  <Badge variant="secondary" className="text-[10px] font-mono">
                    {p.category}
                  </Badge>
                </TableCell>
                <TableCell className="price font-mono text-sm text-primary">
                  ${p.price.toFixed(2)}
                </TableCell>
                <TableCell className="rating">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-terminal-yellow text-terminal-yellow" />
                    <span className="text-xs font-mono">{p.rating}</span>
                  </div>
                </TableCell>
                <TableCell className="availability">
                  <span
                    className={`text-xs font-mono ${p.inStock ? 'text-terminal-green' : 'text-destructive'}`}
                  >
                    {p.inStock ? 'Yes' : 'No'}
                  </span>
                </TableCell>
                <TableCell className="sku font-mono text-[10px] text-muted-foreground">
                  {p.sku}
                </TableCell>
                <TableCell className="variants-count text-xs text-muted-foreground font-mono">
                  {p.variants.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};

export default DataTable;
