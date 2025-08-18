import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export const metadata = {
  title: 'Thanaris Tiles — Superfici in gres porcellanato',
  description: 'Superfici di grande formato 600×1200 mm. Catalogo, ispirazioni e preventivi.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Thanaris Tiles',
    description: 'Gres porcellanato grande formato.',
    type: 'website',
    locale: 'it_IT'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
