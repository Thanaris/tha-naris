// app/[locale]/layout.tsx
import '../globals.css';
import Header from '../../components/Header';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'it'}, {locale: 'de'}];
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: 'en' | 'it' | 'de'};
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  // Nota: qui usiamo <html> perché questo layout fa da root per le route localizzate
  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="container mx-auto px-4 py-6">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
