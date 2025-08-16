import Link from 'next/link';

function Logo() {
  return (
    <div className="w-10 h-10 grid place-items-center rounded-md border bg-gray-100">
      <span className="text-xs font-bold">TH</span>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-white/85 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold tracking-wide">THANARIS</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/catalog" className="hover:text-blue-600">Catalogo</Link>
          <Link href="/contact" className="hover:text-blue-600">Contatti</Link>
        </nav>
      </div>
    </header>
  );
}
