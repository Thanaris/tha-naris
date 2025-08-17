'use client';
import { useState } from 'react';

export default function QuoteForm({ productName }: { productName?: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState<'email'|'whatsapp'>('email');

  function send() {
    const subject = encodeURIComponent(`Richiesta preventivo${productName ? ' - ' + productName : ''}`);
    const bodyLines = [
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      `Prodotto: ${productName || '(generale)'}`,
      '',
      `Messaggio:`,
      message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    if (method === 'email') {
      // apre client mail
      const mailto = `mailto:afazzinothanaris@outlook.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    } else {
      const waText = encodeURIComponent(`${productName ? '['+productName+'] ' : ''}Richiesta preventivo\nNome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\n${message}`);
      const wa = `https://wa.me/35679255715?text=${waText}`;
      window.open(wa, '_blank');
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">Richiedi un preventivo{productName ? ` per ${productName}` : ''}</h3>
      <div className="grid grid-cols-1 gap-3">
        <input className="border rounded-md p-2" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
        <input className="border rounded-md p-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border rounded-md p-2" placeholder="Telefono" value={phone} onChange={e=>setPhone(e.target.value)} />
        <textarea className="border rounded-md p-2 min-h-[120px]" placeholder="Messaggio" value={message} onChange={e=>setMessage(e.target.value)} />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button onClick={()=>setMethod('email')} className={`px-3 py-2 rounded-md ${method==='email'?'bg-blue-600 text-white':'border'}`}>Email</button>
        <button onClick={()=>setMethod('whatsapp')} className={`px-3 py-2 rounded-md ${method==='whatsapp'?'bg-green-600 text-white':'border'}`}>WhatsApp</button>
        <button onClick={send} className="ml-auto btn-primary">Invia richiesta</button>
      </div>

      <p className="text-xs text-gray-500 mt-3">Nessun prezzo sul sito. Riceverai un'offerta personalizzata.</p>
    </div>
  );
}
