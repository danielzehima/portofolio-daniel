import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. On importe notre nouveau composant Navbar
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // N'oublie pas d'importer le Footer aussi si tu veux l'utiliser dans le layout
const inter = Inter({ subsets: ["latin"] });

// Tu peux modifier ces informations, c'est ce qui s'affiche dans l'onglet du navigateur !
export const metadata: Metadata = {
  title: "Daniel Zéhima - Portfolio",
  description: "Technicien en bâtiment, Créateur de contenus & Développeur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* 2. On place la Navbar ici, juste au-dessus de {children} */}
        <Navbar />
        {/* {children} représente le contenu spécifique de chaque page (par exemple ta page d'accueil) */}
        <div className="pt-16"> {/* pt-16 ajoute un espace en haut pour que la Navbar ne cache pas le contenu */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}