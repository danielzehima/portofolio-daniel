'use server' 

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function envoyerMessage(formData: FormData) {
  const nom = formData.get('nom') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!nom || !email || !message) {
    return { success: false, erreur: "Veuillez remplir tous les champs." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      
      to: 'danielzehima@gmail.com', 
      subject: `Nouveau message de ${nom} depuis le portfolio`,
      text: `Nouveau message reçu :\n\nNom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Erreur Resend :", error);
      return { success: false, erreur: "Erreur lors de l'envoi de l'email." };
    }

    return { success: true, message: "Votre message a été envoyé avec succès !" };
    
  } catch (erreur) {
    console.error("Erreur Serveur :", erreur);
    return { success: false, erreur: "Une erreur serveur est survenue." };
  }
}