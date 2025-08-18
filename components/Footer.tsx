export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="container py-8 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Thanaris Ltd. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
