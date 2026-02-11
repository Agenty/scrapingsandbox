const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center gap-3">
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
            No copyright, no claims. You are free to use this website to learn
            web scraping, testing etc. with Playwright, Puppeteer, or Agenty AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
