import InspirationGallery from '../../components/InspirationGallery';

export const metadata = { title: 'Ispirazione — Thanaris Tiles', description: 'Progetti e ambienti con superfici Thanaris.' };

export default function InspirationPage() {
  return (
    <div className="section">
      <h1 className="text-3xl font-bold mb-6">Ispirazione</h1>
      <InspirationGallery />
    </div>
  );
}
