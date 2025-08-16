'use client';
import { useState } from 'react';

export default function QuoteForm({ productName }: { productName?: string }) {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [message, setMessage] = useState('');

  const subject = encodeURIComponent(`Richiesta preventivo${productName ? ' - ' + productName : ''}`);
  const body = encodeURIComponent(
    `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\nProdotto: ${productName || '(generale)'}\nMessaggio:\n${message}`
  );

  const mailto = `mailto:afazzinothanaris@outlook.com?subject=${subject}&body=${body}`;
  const whatsapp = `https://wa.me/35679255715?text=${encodeURIComponent(
    `Richiesta preventivo ${productName ? '('+productName+') ' : ''}- ${name} - ${email} - ${phone}\n${message}`
  )}`;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">Richiedi un preventivo{productName ? ` per ${productName}` : ''}</h3>
      <div className="grid grid-cols-1 gap-3">
        <input className="border rounded-md p-2" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} required />
        <input className="border rounded-md p-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="border rounded-md p-2" placeholder="Telefono" value={phone} onChange={e=>setPhone(e.target.value)} />
        <textarea className="border rounded-md p-2 min-h-[120px]" placeholder="Messaggio" value={message} onChange={e=>setMessage(e.target.value)} />
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <a href={mailto} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Invia via Email</a>
        <a href={whatsapp} target="_blank" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">Invia su WhatsApp</a>
      </div>
      <p className="text-xs text-gray-500 mt-3">Nessun prezzo sul sito. Riceverai un'offerta personalizzata.</p>
    </div>
  );
}
