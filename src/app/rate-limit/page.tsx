import { Metadata } from 'next';
import RateLimit from '@/components/RateLimit';

export const metadata: Metadata = {
  title: 'Rate Limit and Scraping Blocked Playground | Scraping Sandbox',
  description:
    'Practice handling HTTP 429 Too Many Requests, blocked responses while scraping. Test retry logic, backoff strategies and polite crawler behavior with Playwright, Puppeteer or Agenty AI.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Scraping Blocked Playground',
    description:
      'Practice handling HTTP 429 Too Many Requests and blocked responses while scraping. Ideal for testing retry logic, backoff strategies, and polite crawler behavior.',
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
  return <RateLimit />;
}
