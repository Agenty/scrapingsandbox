import { Metadata } from 'next';
import FormSubmit from '@/components/FormSubmit';

export const metadata: Metadata = {
  title: 'Form Submit Playground — Practice Form Automation | Scraping Sandbox',
  description:
    'Practice automating form fills and submissions with Playwright, Puppeteer or Selenium. Validated contact form that echoes submitted JSON — ideal for testing form automation scripts..',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Form Submit Playground',
    description:
      'Practice form automation with a realistic contact form. Test field validation, form filling, submission handling, and browser automation workflows.',
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
            <span className="text-gradient">Form Submit</span> Testing
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
            Practice form automation and validation testing. Fill in and submit
            the form to see submitted data displayed — ideal for testing form
            interactions with Playwright&apos;s{' '}
            <code className="text-primary font-mono text-xs">fill()</code>,
            Puppeteer&apos;s{' '}
            <code className="text-primary font-mono text-xs">type()</code>, or
            Agenty AI form automation.
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs font-mono">
            <span className="text-muted-foreground">
              Client-side validation
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">5 fields</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Shows submitted data</span>
          </div>
        </div>
      </div>
      <FormSubmit />
    </main>
  );
}
