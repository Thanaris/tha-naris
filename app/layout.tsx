import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://thanaris.example'),
  title: 'Thanaris Tiles — Superfici in gres porcellanato 600×1200 mm',
  description: 'Catalogo Thanaris Tiles: lastre ceramiche di grande formato 600×1200 mm. Sfoglia i prodotti e richiedi un preventivo personalizzato.',
  openGraph: {
    title: 'Thanaris Tiles',
    description: 'Superfici in gres porcellanato di grande formato 600×1200 mm.',
    url: 'https://thanaris.example',
    siteName: 'Thanaris Tiles',
    locale: 'it_IT',
    type: 'website',
  },
  alternates: { canonical: '/' },
  other: { 'theme-color': '#0C0A0E' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
