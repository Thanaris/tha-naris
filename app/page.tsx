import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="mx-auto mb-6 w-28 h-28 grid place-items-center rounded-2xl border">
          <span className="font-bold">TH</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Thanaris Tiles</h1>
        <p className="text-lg text-gray-600 mt-3">Superfici in gres porcellanato di grande formato (600×1200 mm).</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/catalog" className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Sfoglia il catalogo</Link>
          <Link href="/contact" className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">Richiedi preventivo</Link>
        </div>
      </section>

      <section className="rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full h-72 md:h-96 bg-gradient-to-r from-gray-200 to-gray-300" />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          {title: 'Qualità Premium', desc: 'Lastre porcellanate resistenti e raffinate.'},
          {title: 'Formati Ampi', desc: '600×1200 mm per continuità visiva.'},
          {title: 'Preventivi Rapidi', desc: "Richiedi un'offerta personalizzata via email o WhatsApp."}
        ].map((b, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-600">{b.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-center">
        <p className="text-gray-700">Preferisci scaricare il catalogo completo?</p>
        <a href="/catalog.pdf" className="text-blue-600 underline">Scarica il PDF</a>
      </section>
    </div>
  );
}
