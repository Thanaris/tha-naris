import { MetadataRoute } from 'next';
import { PRODUCTS } from '../lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thanaris.example'; // <-- aggiorna con il tuo dominio/URL Vercel
  const now = new Date();
  const basePages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/catalog`, lastModified: now },
    { url: `${base}/inspiration`, lastModified: now },
    { url: `${base}/contact`, lastModified: now }
  ];
  const productPages = PRODUCTS.map(p => ({ url: `${base}/products/${p.slug}`, lastModified: now }));
  return [...basePages, ...productPages];
}
