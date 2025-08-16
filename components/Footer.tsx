export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-8 text-sm text-gray-600 text-center space-y-2">
        <p>© {new Date().getFullYear()} Thanaris Ltd. All rights reserved.</p>
        <p>
          Email: <a className="text-blue-600 underline" href="mailto:afazzinothanaris@outlook.com">afazzinothanaris@outlook.com</a> ·
          WhatsApp: <a className="text-blue-600 underline" target="_blank" href="https://wa.me/35679255715">+356 7925 5715</a>
        </p>
      </div>
    </footer>
  );
}
