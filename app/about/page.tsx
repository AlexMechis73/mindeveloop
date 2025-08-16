// app/about/page.tsx
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup'; // Importiamo la newsletter

export const metadata: Metadata = {
  title: 'Chi Sono | Alex Mechis, Architetto di Soluzioni Digitali',
  description: 'Scopri la visione, le competenze e l\'esperienza di Alex Mechis, specializzato in strategie data-driven, architetture a microservizi e integrazione AI.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg">
        
        <div className="text-center mb-12">
            <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
              Chi Sono
            </h1>
            <p className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              Architetto di Soluzioni Digitali & Innovatore
            </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-gray-700">
            <Image
              // --- URL IMMAGINE CORRETTO ---
              src="https://via.placeholder.com/200x200/000000/FFFFFF?text=AM"
              alt="Foto di Alex Mechis"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-gray-300 space-y-4">
            <h2 className="text-2xl font-bold text-white">La Mia Missione</h2>
            <p>
              La mia missione è colmare il divario tra le potenzialità della tecnologia e le concrete esigenze di business. Progetto e sviluppo soluzioni digitali complesse che non sono solo tecnicamente eccellenti, ma anche perfettamente allineate agli obiettivi strategici dei miei clienti.
            </p>
            <p>
              Con un background che unisce analisi di business, sviluppo software e product management, porto un approccio olistico a ogni progetto. Puoi approfondire il mio metodo nel <Link href="/blog" className="font-bold text-emerald-400 hover:text-emerald-300">mio blog</Link> o esplorare le <Link href="/resources" className="font-bold text-emerald-400 hover:text-emerald-300">risorse pratiche</Link> che metto a disposizione.
            </p>
          </div>
        </div>
      </div>

      {/* --- CTA NEWSLETTER AGGIUNTO --- */}
      <div className="mt-24 w-full">
        <NewsletterSignup sourcePage="About" />
      </div>
    </div>
  );
}