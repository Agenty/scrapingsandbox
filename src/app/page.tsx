import { Metadata } from 'next';
import ProductList from '../components/ProductList';

export const metadata: Metadata = {
  title: 'Scraping Sandbox | Practice Web Scraping Online',
  description:
    'Practice web scraping with Scraping Sandbox, a free demo website built for learning data extraction, CSS selectors, XPath, pagination, tables, forms, and scraping automation without legal risk.',
  keywords: [
    'scraping sandbox',
    'web scraping practice',
    'scraping test website',
    'learn web scraping',
    'data extraction',
    'CSS selectors',
    'XPath',
    'HTML scraping',
    'scraping tutorial',
    'automation testing',
    'scraping API',
    'playwright scraping',
    'puppeteer scraping',
    'selenium scraping',
    'python scraping',
    'beautifulsoup',
    'table scraping',
    'pagination scraping',
    'sample data',
    'test website for scraping',
  ],
  authors: [{ name: 'Scraping Sandbox' }],
  creator: 'Scraping Sandbox',
  publisher: 'Scraping Sandbox',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Scraping Sandbox | Practice Web Scraping Online',
    description:
      'A safe playground for practicing web scraping, data extraction, selectors, pagination, forms, and automation workflows.',
    type: 'website',
    siteName: 'Scraping Sandbox',
    images: [
      {
        url: 'https://scrapingsandbox.com/og.png',
        width: 1200,
        height: 630,
        alt: 'Scraping Sandbox',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scraping Sandbox | Practice Web Scraping Online',
    description:
      'Practice scraping tables, products, forms, and paginated data with a realistic demo website.',
  },
  category: 'Technology',
};

export default function Index() {
  return <ProductList />;
}
