"use client";
import Image from 'next/image';
import {Link} from 'next-intl/navigation';
import {useTranslations} from 'next-intl';

export default function Header() {
  const t = useTranslations('Nav');

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 shadow">
      {/* Logo + Nome */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Thanaris Logo"
          width={200}
          height={80}
          className="h-14 w-auto object-contain"
          priority
        />
        <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-800">
          THANARIS LTD
        </span>
      </Link>

      {/* Menu */}
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="/catalog" className="hover:text-blue-600">
          {t('catalog')}
        </Link>
        <a
          href="https://wa.me/35679255715"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600"
        >
          {t('whatsapp')}
        </a>
        <a
          href="mailto:afazzinothanaris@outlook.com"
          className="hover:text-blue-600"
        >
          {t('email')}
        </a>

        {/* Language switch */}
        <div className="ml-4 flex gap-2 border-l pl-4 text-gray-600">
          <Link href="/" locale="en" className="hover:text-black">EN</Link>
          <Link href="/" locale="it" className="hover:text-black">IT</Link>
          <Link href="/" locale="de" className="hover:text-black">DE</Link>
        </div>
      </nav>
    </header>
  );
}
