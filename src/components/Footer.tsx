import Link from 'next/link';
import { pages } from '../data/pages';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center gap-4">
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {pages.map((p) => (
              <Link
                key={p.to}
                href={p.to}
                prefetch={false}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {p.label}
              </Link>
            ))}
            <a
              href="https://github.com/Agenty/scrapingsandbox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </nav>
          <p className="text-sm text-muted-foreground">
            Built by{' '}
            <a
              href="https://agenty.com?utm_source=scrapingsandbox.com&utm_medium=referral&utm_campaign=footer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Agenty
            </a>{' '}
            for learning web scraping
          </p>
          <p className="text-xs text-muted-foreground/70 max-w-lg">
            No copyright, no claims. You are free to use this website to
            practice web scraping, browser automation and testing with
            Playwright, Puppeteer, Selenium or Agenty AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
