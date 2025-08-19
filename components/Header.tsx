import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 shadow">
      {/* Logo */}
      <Link href="/">
        <img 
          src="/logo.png" 
          alt="Thanaris Logo" 
          className="h-10 w-auto"
        />
      </Link>

      {/* Menu */}
      <nav className="flex gap-6 text-sm font-medium">
        <Link href="/catalog" className="hover:text-blue-600">Catalogo</Link>
        <a href="https://wa.me/35679255715" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">WhatsApp</a>
        <a href="mailto:afazzinothanaris@outlook.com" className="hover:text-blue-600">Email</a>
      </nav>
    </header>
  );
}
