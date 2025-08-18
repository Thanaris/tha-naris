import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../lib/products';
import QuoteForm from '../../../components/QuoteForm';

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props) {
  const p = PRODUCTS.find(x => x.slug === params.slug);
  return {
    title: p ? `${p.name} — Thanaris Tiles` : 'Prodotto — Thanaris Tiles',
    description: p?.description || 'Gres porcellanato grande formato.'
  };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="section grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: '77%' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300" />
          {product.image ? <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" /> : null}
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-600">Formato: {product.size || '600×1200 mm'}</p>
        <QuoteForm productName={product.name} />
      </div>
    </div>
  );
}
