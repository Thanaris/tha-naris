// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Thanaris" width={140} height={48} priority className="rounded-md" />
          <span className="font-semibold tracking-wide">THANARIS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/catalog" className="hover:text-blue-600">Catalogo</Link>
          <Link href="/inspiration" className="hover:text-blue-600">Ispirazione</Link>
          <Link href="/contact" className="hover:text-blue-600">Contatti</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/catalog" className="px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm">Sfoglia</Link>
          <a href="https://wa.me/35679255715" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700">Chatta</a>
        </div>
      </div>
    </header>
  );
}
