'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const slides = [
  { src: '/hero-1.jpg', alt: 'Ambiente bagno | collezione marmo' },
  { src: '/hero-2.jpg', alt: 'Living | superfici grandi formati' },
  { src: '/hero-3.jpg', alt: 'Cucina | gres porcellanato' }
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(()=> setI(s => (s+1)%slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  const current = slides[i];

  return (
    <section className="relative h-[54vh] md:h-[70vh] w-full rounded-2xl overflow-hidden shadow-lg">
      {/* Se non carichi le immagini, rimane un gradiente elegante */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300" />
      <Image
        src={current.src}
        alt={current.alt}
        fill
        priority
        className="object-cover opacity-90"
        onError={(e)=>{ (e.target as HTMLImageElement).style.display='none'; }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">Superfici in gres porcellanato</h1>
          <p className="mt-3 text-lg md:text-xl text-white/90">Design contemporaneo, formati 600×1200 mm, prestazioni premium.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/catalog" className="btn-primary">Sfoglia il catalogo</a>
            <a href="/contact" className="btn-outline bg-white text-gray-900">Richiedi preventivo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
