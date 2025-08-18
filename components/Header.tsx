import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Thanaris" width={44} height={44} className="rounded-md" />
          <span className="font-semibold tracking-wide">THANARIS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/catalog" className="hover:text-blue-600">Catalogo</Link>
          <Link href="/inspiration" className="hover:text-blue-600">Ispirazione</Link>
          <Link href="/contact" className="hover:text-blue-600">Contatti</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/catalog" className="btn-outline">Sfoglia</Link>
          <a href="https://wa.me/35679255715" target="_blank" rel="noreferrer" className="btn-primary">Chatta</a>
        </div>
      </div>
    </header>
  );
}
