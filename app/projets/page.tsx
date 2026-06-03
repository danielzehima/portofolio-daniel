export default function Projets() {
  // Voici un tableau (Array) contenant tes projets. 
  // C'est très pratique : si tu veux ajouter un projet plus tard, tu n'as qu'à l'ajouter à cette liste !
  const mesProjets = [
    {
      id: 1,
      titre: "TableFlow",
      description: "Plateforme SaaS de digitalisation pour la restauration. Gestion des menus par QR code et automatisation des commandes.",
      technologies: ["Next.js", "Tailwind CSS", "Automatisation"],
    },
    {
      id: 2,
      titre: "GestBTP",
      description: "Application de gestion et de coordination de chantiers pour les différents corps d'état (maçons, électriciens, plombiers).",
      technologies: ["Python", "Flask", "Bootstrap"],
    },
    {
      id: 3,
      titre: "Guide Sourcing Alibaba",
      description: "Ebook et création de contenus vidéos pour accompagner les entrepreneurs dans le choix de fournisseurs fiables et éviter les arnaques.",
      technologies: ["Création de contenu", "Stratégie", "E-commerce"],
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Mes <span className="text-blue-600">Projets</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations, alliant développement logiciel, gestion de chantier et création de contenus.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* La boucle .map() permet de créer une carte automatiquement pour chaque projet de la liste */}
          {mesProjets.map((projet) => (
            <div key={projet.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition duration-300 flex flex-col h-full">
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {projet.titre}
              </h2>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {projet.description}
              </p>
              
              {/* Affichage des tags / technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {projet.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}