import Link from 'next/link';

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Section de gauche : Copyright et Agence */}
        <div className="text-gray-500 text-sm text-center md:text-left">
          <p>© {annee} Daniel Zéhima. Tous droits réservés.</p>
          <p className="text-xs mt-1">Propulsé par <span className="font-semibold text-gray-700">Digit-Agence</span></p>
        </div>

        {/* Section de droite : Liens rapides */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">
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
    </footer>
  );
}