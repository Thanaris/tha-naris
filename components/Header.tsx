import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 shadow">
      {/* Logo + Nome azienda */}
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="Thanaris Logo" 
          width={200}   // più grande
          height={80}   // proporzionato
          className="h-14 w-auto object-contain"
          priority
        />
        <span className="text-xl md:text-2xl font-bold tracking-wide text-gray-800">
          THANARIS LTD
        </span>
      </Link>

      {/* Menu */}
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/catalog" className="hover:text-blue-600">Catalogo</Link>
        <a 
          href="https://wa.me/35679255715" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-green-600"
        >
          WhatsApp
        </a>
        <a 
          href="mailto:afazzinothanaris@outlook.com" 
          className="hover:text-blue-600"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
