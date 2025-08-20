import {Link} from 'next-intl/navigation';
import {getTranslations} from 'next-intl/server';
import Hero from '../../components/Hero';
import {PRODUCTS} from '../../lib/products';
import CollectionCard from '../../components/CollectionCard';

export default async function HomePage() {
  const t = await getTranslations('Home');

  return (
    <div className="space-y-12 md:space-y-16">
      <div className="section"><Hero /></div>

      <section className="section">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">{t('collectionsTitle')}</h2>
          <Link href="/catalog" className="text-blue-600 hover:underline">
            {t('viewAll')}
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map((p) => (
            <CollectionCard
              key={p.slug}
              slug={p.slug}
              name={p.name}
              image={p.image}
              size={p.size}
              description={p.description}
            />
          ))}
        </div>
      </section>

      <section className="section text-center bg-gray-50 rounded-2xl p-10">
        <h2 className="text-2xl md:text-3xl font-bold">{t('downloadTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('downloadDesc')}</p>
        <a
          href="/catalog.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5 inline-block"
        >
          {t('downloadButton')}
        </a>
      </section>

      <section className="section text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{t('projectTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('projectDesc')}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="https://wa.me/35679255715"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block bg-green-600 hover:bg-green-700"
          >
            {t('ctaWhatsapp')}
          </a>
          <a
            href="mailto:afazzinothanaris@outlook.com"
            className="btn-primary inline-block bg-blue-600 hover:bg-blue-700"
          >
            {t('ctaEmail')}
          </a>
        </div>
      </section>
    </div>
  );
}
