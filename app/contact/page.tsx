import QuoteForm from '../../components/QuoteForm';

export const metadata = { title: 'Contatti — Thanaris Tiles', description: 'Richiedi preventivi e informazioni.' };

export default function ContactPage() {
  return (
    <div className="section grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contatti</h1>
        <p className="text-gray-700">Compila il modulo: riceverai una risposta rapida via Email o WhatsApp.</p>
        <ul className="text-gray-700 mt-4 list-disc list-inside space-y-1">
          <li>Nessun prezzo sul sito: offerta su misura</li>
          <li>Supporto a progettisti e rivenditori</li>
          <li>Campionature su richiesta</li>
        </ul>
      </div>
      <QuoteForm />
    </div>
  );
}
