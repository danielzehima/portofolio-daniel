// 1. On importe le composant Image de Next.js
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      
      <div className="max-w-3xl text-center space-y-8">
        
        {/* --- DÉBUT DU BLOC PHOTO --- */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
             
              src="/photo-daniel.jpg" 
              alt="Photo de Daniel Zéhima"
              
              fill
              
              className="object-cover"
              
              priority 
            />
          </div>
        </div>
        {/* --- FIN DU BLOC PHOTO --- */}

        {/* Le reste de ton titre et descriptions */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
          Bonjour, je suis <span className="text-blue-600">Daniel Zéhima</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-medium">
          Technicien en bâtiment, Créateur de contenus & Développeur.
        </p>
        
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          {"J'accompagne la digitalisation des processus et je conçois des solutions sur-mesure, de la gestion de chantier à l'automatisation d'outils web."}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <a 
            href="/projets" 
            className="px-8 py-3 w-full sm:w-auto bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Découvrir mes projets
          </a>
          
          <a 
            href="/contact" 
            className="px-8 py-3 w-full sm:w-auto bg-white text-gray-900 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300"
          >
            Me contacter
          </a>
        </div>

      </div>
      
    </main>
  );
}