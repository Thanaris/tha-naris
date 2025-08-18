export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/35679255715"
      target="_blank"
      rel="noopener noreferrer"
      className="fab-wa fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
      aria-label="Chatta con noi su WhatsApp"
    >
      <span>💬</span><span className="hidden sm:inline">Chatta con noi</span>
    </a>
  );
}
