import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    pages.push(1);

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(totalPages - 1, currentPage + delta);

    if (start > 2) pages.push('...');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 pt-8">
      <Button
        variant="ghost"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-8 w-8 p-0 font-mono"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {getVisiblePages().map((page, i) =>
        typeof page === 'string' ? (
          <span key={`ellipsis-${i}`} className="px-1 text-muted-foreground font-mono text-sm">
            ···
          </span>
        ) : (
          <Button
            key={page}
            variant={page === currentPage ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onPageChange(page)}
            className={`h-8 w-8 p-0 font-mono text-sm ${
              page === currentPage ? 'bg-primary text-primary-foreground' : ''
            }`}
          >
            {page}
          </Button>
        )
      )}

      <Button
        variant="ghost"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-8 w-8 p-0 font-mono"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
