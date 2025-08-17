import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <Image src="/logo.png" alt="Thanaris" width={140} height={140} className="mx-auto rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Thanaris Tiles</h1>
        <p className="text-lg text-gray-600 mt-3">Superfici in gres porcellanato di grande formato (600×1200 mm).</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/catalog" className="btn-primary">Sfoglia il catalogo</Link>
          <Link href="/contact" className="px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50">Richiedi preventivo</Link>
        </div>
      </section>

      <section className="rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full h-72 md:h-96 bg-gradient-to-r from-gray-200 to-gray-300" />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2">Qualità Premium</h3>
          <p className="text-gray-600">Lastre porcellanate resistenti e raffinate.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2">Formati Ampi</h3>
          <p className="text-gray-600">600×1200 mm per continuità visiva.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-2">Preventivi Rapidi</h3>
          <p className="text-gray-600">Ricevi un'offerta personalizzata via email o WhatsApp.</p>
        </div>
      </section>

      <section className="text-center">
        <p className="text-gray-700">Scarica il catalogo completo</p>
        <a href="/catalog.pdf" className="text-blue-600 underline">Scarica il PDF</a>
      </section>
    </div>
  );
}
