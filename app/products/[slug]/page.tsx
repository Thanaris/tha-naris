import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../lib/products';
import QuoteForm from '../../../components/QuoteForm';

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const p = PRODUCTS.find(x => x.slug === params.slug);
  return {
    title: p ? `${p.name} — Thanaris Tiles` : 'Prodotto — Thanaris Tiles',
    description: p?.description || 'Lastre porcellanate 600×1200 mm.'
  };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="w-full bg-gradient-to-br from-gray-100 to-gray-300" style={{paddingTop:'77%'}} />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700">{product.description || 'Superficie porcellanata di pregio.'}</p>
        <p className="text-sm text-gray-600">Formato: {product.size || '600×1200 mm'}</p>
        <QuoteForm productName={product.name} />
      </div>
    </div>
  );
}
