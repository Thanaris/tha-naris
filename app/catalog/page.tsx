import { PRODUCTS } from '../../lib/products';
import CollectionCard from '../../components/CollectionCard';

export const metadata = { title: 'Catalogo — Thanaris Tiles', description: 'Sfoglia le collezioni 600×1200 mm.' };

export default function CatalogPage() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-6">Catalogo</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map(p => <CollectionCard key={p.slug} slug={p.slug} name={p.name} image={p.image} size={p.size} description={p.description}/>)}
      </div>
    </div>
  );
}
