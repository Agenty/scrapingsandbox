import { Metadata } from 'next';
import { getProductById, products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return products.map((p) => ({
    id: String(p.id),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    return {
      title: 'Product not found',
      description: 'This product does not exist.',
    };
  }

  return {
    title: `${product.title} - ${'Scraping Sandbox'}`,
    description: product.description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: product.title,
      description: product.description,
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
}

export default function Page() {
  return <ProductDetail />;
}
