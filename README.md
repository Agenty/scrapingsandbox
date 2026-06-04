# Scraping Sandbox

[Scraping Sandbox](https://scrapingsandbox.com/) is an open-source web scraping playground for building, testing, and running scraping agents in a safe, browser-based environment.

It’s designed for developers, data engineers, and automation builders who want a fast way to prototype scrapers, experiment with selectors, and explore [AI-powered web scraping](https://agenty.com/) workflows.

![Scraping sandbox website preview](/public/scraping-sandbox.png)

## Live Demo

Website: https://scrapingsandbox.com  

### Practice Pages

| Page | Description |
|------|-------------|
| [Infinite Scroll](https://scrapingsandbox.com/infinite-scroll) | Practice scraping dynamically loaded content that loads additional records as users scroll down the page. |
| [Data Table](https://scrapingsandbox.com/data-table) | Test extraction of structured tabular data from sortable and searchable HTML tables. |
| [Form Submit](https://scrapingsandbox.com/form-submit) | Practice form automation, validation handling, input filling, and form submission workflows. |
| [Rate Limit](https://scrapingsandbox.com/rate-limit) | Simulate HTTP 429 rate limiting responses to test retry logic, backoff strategies, and scraper resilience. |

## Live Demo

Scraping Sandbox is a **free web scraping practice website** designed for developers, data scraping engineers who want to learn and test scraping techniques in a safe environment.

Use Scraping Sandbox to:

- Learn web scraping fundamentals with realistic examples
- Practice CSS selectors, XPath selectors, and DOM traversal
- Extract structured and unstructured data from web pages
- Test Playwright, Puppeteer, Selenium, BeautifulSoup, Scrapy, and other scraping frameworks
- Experiment with infinite scroll scraping and dynamic content loading
- Practice HTML table extraction and data parsing
- Automate form filling, validation, and submission workflows
- Simulate rate limiting, blocking behavior, and HTTP 429 responses
- Build and validate retry logic, backoff strategies, and scraper resilience
- Learn browser automation with AI agents and headless browser techniques
- Test anti-bot handling and scraping error recovery workflows

## Rate Limit

To simulate real-world websites and promote responsible scraping practices, Scraping Sandbox enforces a rate limit on all requests.

**Limit:** 60 requests per 10 seconds

This helps:
- Prevent abuse and accidental DDoS-like traffic
- Encourage realistic scraping behavior
- And yes… we also need to pay $$ for [hosting on Cloudflare workers](https://developers.cloudflare.com/workers/) 🙂

If you exceed the limit, requests may be temporarily blocked. Please design your scrapers to respect this rate, just like you would with real production websites.

## Tech Stack

- Framework: Next.js (App Router)  
- UI: Tailwind CSS, Radix UI, ShadCN  
- Deployment: OpenNext + Cloudflare Workers  
- Language: TypeScript  


## Installation

```bash
git clone https://github.com/Agenty/scrapingsandbox.git
cd scrapingsandbox
npm install
```

## Running Locally

```bash
npm run dev
```

## Support

*Built by [Agenty](https://agenty.com) for learning web scraping*

Want to disucss a web scraping project? Contact us on support@agenty.com
