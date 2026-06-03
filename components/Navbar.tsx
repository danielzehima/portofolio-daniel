// On importe le composant "Link" de Next.js, c'est le secret pour une navigation ultra-rapide !
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Le Logo / Ton Nom */}
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-wide">
          Daniel<span className="text-blue-600">.</span>
        </Link>

        {/* Les liens de navigation */}
        <div className="space-x-6 font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Accueil
          </Link>
          <Link href="/projets" className="hover:text-blue-600 transition-colors">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}