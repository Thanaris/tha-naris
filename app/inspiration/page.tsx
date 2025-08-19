"use client";

import Image from "next/image";

export default function InspirationPage() {
  return (
    <main className="section">
      <h1 className="text-3xl font-bold mb-6">Ispirazioni</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Image 
          src="/inspiration1.jpg" 
          alt="Living room inspiration"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
        <Image 
          src="/inspiration2.jpg" 
          alt="Bathroom inspiration"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
        <Image 
          src="/inspiration3.jpg" 
          alt="Kitchen inspiration"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </main>
  );
}
