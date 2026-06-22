'use client' 

import { useRef, useState } from 'react';
import { envoyerMessage } from '@/lib/contact'; 

export default function Contact() {
  const [statut, setStatut] = useState<string>("");
  const [enCours, setEnCours] = useState<boolean>(false);
  const refFormulaire = useRef<HTMLFormElement>(null);

  const gererSoumission = async (formData: FormData) => {
    setEnCours(true);
    setStatut("");

    try {
      const resultat = await envoyerMessage(formData);

      if (resultat.success) {
        setStatut("✅ " + resultat.message);
        refFormulaire.current?.reset(); 
      } else {
        setStatut("❌ " + resultat.erreur);
      }
    } catch (erreur) {
      setStatut("❌ Une erreur serveur est survenue.");
    } finally {
      setEnCours(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Me <span className="text-blue-600">Contacter</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Mes Coordonnees</h2>
            <div className="space-y-4 text-gray-600">
              <p>📍 Abidjan, Côte d'Ivoire</p>
              <p>📞 +225 07 10 07 52 57</p>
              <p>📧 danielzehima@gmail.com</p>
            </div>
          </div>

          <form ref={refFormulaire} action={gererSoumission} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
              <input 
                type="text" 
                id="nom" 
                name="nom" 
                required 
                // C'est ici que j'ai forcé le texte en gris foncé (text-gray-900) et le fond en blanc (bg-white)
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-600 outline-none transition" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                // Idem ici
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-600 outline-none transition" 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                // Et idem ici
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-white focus:ring-2 focus:ring-blue-600 outline-none transition"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={enCours}
              className={`w-full text-white font-bold py-3 rounded-lg transition duration-300 ${enCours ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {enCours ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {statut && (
              <p className={`text-sm font-medium p-3 rounded text-center ${statut.startsWith('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {statut}
              </p>
            )}
          </form>
          
        </div>
      </div>
    </main>
  );
}