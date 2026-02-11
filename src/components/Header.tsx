import { Terminal, Github } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          prefetch={false}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Scraping<span className="text-primary">Sandbox</span>
            </span>
            <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary border border-primary/20">
              v1.0
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <a
            href="https://agenty.com?utm_source=scrapingsandbox.com&utm_medium=referral&utm_campaign=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground text-primary bg-secondary transition-colors"
          >
            by Agenty
          </a>
          <a
            href="https://github.com/Agenty/scrapingsandbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            title="View on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
