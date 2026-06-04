import DataTable from '@/components/DataTable';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Data Table Scraping Playground — Practice Table Extraction | Scraping Sandbox',
  description:
    'Practice scraping HTML data tables with Playwright, Puppeteer or Selenium. Sortable, searchable product table with 500 rows — perfect for testing table parsers and column extraction..',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Data Table Scraping Playground',
    description:
      'Practice scraping HTML data tables with Playwright, Puppeteer or Selenium. Sortable, searchable product table with 500 rows.',
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
            <span className="text-gradient">Data Table</span> View
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
            Tabular product data for practicing table scraping. Learn to extract
            structured data from HTML tables using Playwright, Puppeteer, or
            Agenty AI web scraping tools.
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs font-mono">
            <span className="text-muted-foreground">500 rows</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Sortable columns</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Searchable</span>
          </div>
        </div>
      </div>
      <DataTable />
    </main>
  );
}
