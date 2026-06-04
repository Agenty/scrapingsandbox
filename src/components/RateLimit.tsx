import {
  ShieldAlert,
  Clock,
  Server,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const RateLimit = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="mb-8 rounded-xl border border-border bg-card p-6 glow-border relative overflow-hidden">
        <div className="scanline absolute inset-0 pointer-events-none" />
        <div className="relative">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-gradient">Rate Limiting</span> Sandbox
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground max-w-lg">
            This page is protected by <strong>server-side rate limiting</strong>
            . If you send more than <strong>10 requests in 10 seconds</strong>,
            the server will respond with{' '}
            <code className="text-primary">HTTP 429 Too Many Requests</code>.
            Perfect for practicing how real-world scrapers handle throttling and
            build retry logic.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <Server className="h-3.5 w-3.5 text-terminal-green" />
              <span className="text-terminal-green">Server-side enforced</span>
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-terminal-yellow" />
              <span className="text-terminal-yellow">10 req / 10 sec</span>
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="h-3.5 w-3.5 text-destructive" />
              <span className="text-destructive">429 after limit</span>
            </span>
          </div>
        </div>
      </div>

      {/* Server-Side Rules */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Window Limit</h2>
          </div>
          <p className="text-2xl font-bold font-mono text-foreground">10</p>
          <p className="text-xs text-muted-foreground mt-1">
            Maximum requests allowed per 10-second window.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <h2 className="text-sm font-semibold">Penalty Response</h2>
          </div>
          <p className="text-2xl font-bold font-mono text-destructive">429</p>
          <p className="text-xs text-muted-foreground mt-1">
            HTTP status returned when the limit is exceeded.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-4 w-4 text-terminal-green" />
            <h2 className="text-sm font-semibold">Practice Goal</h2>
          </div>
          <p className="text-2xl font-bold font-mono text-terminal-green">
            Back Off
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Implement retry logic with exponential backoff.
          </p>
        </div>
      </div>
      
      {/* How to Handle */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold mb-3">
          How to Handle Rate Limits in Your Scraper
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-secondary/30 p-4">
            <h3 className="text-sm font-semibold text-primary mb-2">
              1. Detect 429 Status
            </h3>
            <p className="text-xs text-muted-foreground">
              Check for HTTP 429 status codes in your scraper responses and read
              the <code className="text-primary">Retry-After</code> header if
              provided by the server.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-secondary/30 p-4">
            <h3 className="text-sm font-semibold text-primary mb-2">
              2. Exponential Backoff
            </h3>
            <p className="text-xs text-muted-foreground">
              Wait progressively longer between retries: 1s → 2s → 4s → 8s to
              avoid repeatedly hitting the same limit.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-secondary/30 p-4">
            <h3 className="text-sm font-semibold text-primary mb-2">
              3. Respect Limits
            </h3>
            <p className="text-xs text-muted-foreground">
              Add polite delays between requests and respect{' '}
              <code className="text-primary">robots.txt</code> rules to build
              sustainable scrapers.
            </p>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-secondary/50">
          <span className="text-xs font-mono text-muted-foreground">
            Example: Python with exponential backoff
          </span>
        </div>
        <pre className="p-4 text-xs font-mono text-foreground overflow-x-auto bg-secondary/20">
          {`import time, requests

def fetch_with_backoff(url, max_retries=5):
    for attempt in range(max_retries):
        response = requests.get(url)
        if response.status_code == 429:
            wait = 2 ** attempt
            print(f"Rate limited. Retrying in {wait}s...")
            time.sleep(wait)
        else:
            return response
    raise Exception("Max retries exceeded")`}
        </pre>
      </div>
    </main>
  );
};

export default RateLimit;
