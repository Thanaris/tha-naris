export default function FloatingWhatsApp() {
  const wa = "https://wa.me/35679255715";
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className="fab-wa fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3"
      aria-label="Chatta con noi su WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-12.1-11.9A8.38 8.38 0 0 1 11.5 3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7v5.5a2.5 2.5 0 0 1-2.5 2.5H9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="hidden sm:inline">Chatta con noi</span>
    </a>
  );
}
