import QuoteForm from '../../components/QuoteForm';

export const metadata = {
  title: 'Contatti — Thanaris Tiles',
  description: 'Contatta Thanaris per preventivi e informazioni.'
};

export default function ContactPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contatti</h1>
        <p className="text-gray-700 mb-6">Siamo a disposizione per consigli tecnici e offerte personalizzate.</p>
        <div className="space-y-2 text-gray-800">
          <p>Email: <a className="text-blue-600 underline" href="mailto:afazzinothanaris@outlook.com">afazzinothanaris@outlook.com</a></p>
          <p>WhatsApp: <a className="text-blue-600 underline" href="https://wa.me/35679255715" target="_blank">+356 7925 5715</a></p>
        </div>
      </div>
      <QuoteForm />
    </div>
  );
}
