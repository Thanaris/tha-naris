import Link from 'next/link';
import { PRODUCTS } from '../../lib/products';

export const metadata = {
  title: 'Catalogo — Thanaris Tiles',
  description: 'Sfoglia il catalogo Thanaris Tiles e scopri le superfici 600×1200 mm.'
};

export default function CatalogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catalogo</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group block bg-white rounded-xl border overflow-hidden hover:shadow-lg transition">
            <div className="w-full bg-gradient-to-br from-gray-100 to-gray-300" style={{paddingTop:'66%'}} />
            <div className="p-4">
              <h3 className="font-semibold group-hover:text-blue-600">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.size || '600×1200 mm'}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
