import Hero from '../components/Hero';
import Link from 'next/link';
import { PRODUCTS } from '../lib/products';
import CollectionCard from '../components/CollectionCard';

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <div className="section"><Hero /></div>

      <section className="section">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Collezioni</h2>
          <Link href="/catalog" className="text-blue-600 hover:underline">Vedi tutto</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0,6).map(p => (
            <CollectionCard key={p.slug} slug={p.slug} name={p.name} image={p.image} size={p.size} description={p.description}/>
          ))}
        </div>
      </section>

      <section className="section text-center bg-gray-50 rounded-2xl p-10">
        <h2 className="text-2xl md:text-3xl font-bold">Scarica il catalogo completo</h2>
        <p className="text-gray-600 mt-2">Specifiche tecniche, finiture e ispirazioni.</p>
        <a href="/catalog.pdf" className="btn-primary mt-5 inline-block">Scarica PDF</a>
      </section>

      <section className="section text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Hai un progetto?</h2>
        <p className="text-gray-600 mt-2">Scrivici su WhatsApp per una consulenza rapida.</p>
        <a href="https://wa.me/35679255715" target="_blank" className="btn-primary mt-5 inline-block">Chatta ora</a>
      </section>
    </div>
  );
}
