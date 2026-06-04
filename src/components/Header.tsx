import { Terminal, Github, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { pages } from '../data/pages';
import { MobileNavSheet } from './MobileNav';

const Header = () => {

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Scraping<span className="text-primary">Sandbox</span>
            </span>
            <span className="ml-2 hidden sm:inline rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary border border-primary/20">
              v1.0
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors outline-none text-muted-foreground hover:text-foreground hover:bg-secondary',
                )}
              >
                Playground
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-60">
              {pages.map((l) => (
                <DropdownMenuItem key={l.to} asChild>
                  <Link
                    href={l.to}
                    prefetch={false}
                    className="flex items-start gap-2 cursor-pointer"
                  >
                    <l.icon className="h-4 w-4 mt-0.5 text-primary" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{l.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {l.desc}
                      </span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://agenty.com?utm_source=scrapingsandbox.com&utm_medium=referral&utm_campaign=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
          >
            by Agenty
          </a>
          <a
            href="https://github.com/Agenty/scrapingsandbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="View on GitHub"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center gap-1">
          <a
            href="https://github.com/Agenty/scrapingsandbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md px-2 py-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <MobileNavSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
