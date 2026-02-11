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
  };
}

export default function Product() {
  return <ProductDetail />;
}
