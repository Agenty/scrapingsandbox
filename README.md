# Scraping Sandbox

[Scraping Sandbox](https://scrapingsandbox.com/) is an open-source web scraping playground for building, testing, and running scraping agents in a safe, browser-based environment.

It’s designed for developers, data engineers, and automation builders who want a fast way to prototype scrapers, experiment with selectors, and explore [AI-powered web scraping](https://agenty.com/) workflows.

![Scraping sandbox website preview](/public/scraping-sandbox.png)

## Purpose

Scraping Sandbox is **free to use** and intended for:

- Learning web scraping techniques
- Experimenting with selectors and extraction logic
- Prototyping scraping workflows
- Educational and research purposes

So, you are free to scrape the site and use it to practice web scraping techniques without worrying about copyright claims, restrictions, or takedowns.

## Live Demo

Website: https://scrapingsandbox.com  

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
