// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { pages } from '../data/pages';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://scrapingsandbox.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...pages.map((page) => ({
            url: `${baseUrl}${page.to}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ];
}