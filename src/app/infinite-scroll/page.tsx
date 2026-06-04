import { Metadata } from 'next';
import InfiniteScroll from '@/components/InfiniteScroll';

export const metadata: Metadata = {
  title:
    'Infinite Scroll Scraping Playground — Practice Dynamic Content Extraction | Scraping Sandbox',
  description:
    'Practice scraping infinite scroll pages with Playwright, Puppeteer, Selenium, and other automation tools. Test dynamic content loading, lazy loading, scrolling behavior, and large datasets.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Infinite Scroll Scraping Playground',
    description:
      'Practice scraping dynamically loaded content from an infinite scroll page. Ideal for testing scrolling automation, lazy loading, and pagination alternatives.',
    type: 'website',
    images: [
      {
        url: 'https://scrapingsandbox.com/og.png',
        width: 1200,
        height: 630,
        alt: 'Scraping Sandbox',
      },
    ],
  },
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="mb-8 rounded-xl border border-border bg-card p-6 glow-border relative overflow-hidden">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="relative">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-gradient">Infinite Scroll</span> Products
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
            Practice scraping infinite scroll pages. Products load automatically
            as you scroll down — perfect for testing Playwright&apos;s{' '}
            <code className="text-primary font-mono text-xs">
              waitForSelector
            </code>
            , Puppeteer&apos;s scroll automation, or Agenty AI&apos;s smart
            pagination.
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs font-mono">
            <span className="text-muted-foreground">500 products</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Batch size: 20</span>
          </div>
        </div>
      </div>
      <InfiniteScroll />;
    </main>
  );
}
