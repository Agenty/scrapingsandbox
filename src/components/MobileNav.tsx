'use client';

import { Menu, Link } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { pages } from '../data/pages';

export function MobileNavSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <div className="mt-6 flex flex-col gap-1">
          <div className="mt-3 px-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Playground
          </div>
          {pages.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary',
              )}
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
          <a
            href="https://agenty.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary"
          >
            by Agenty
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
