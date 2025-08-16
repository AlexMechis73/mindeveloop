// app/services/page.tsx
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servizi di Trasformazione Digitale e AI | MindEveLoop',
  description: 'Guido la trasformazione digitale della tua azienda attraverso AI Strategy, Data Insights e Sviluppo di Soluzioni Custom con microservizi.',
};

// Componente ServiceCard rimane invariato
const ServiceCard = ({ title, subtitle, children, price }: { title: string, subtitle: string, children: React.ReactNode, price: string }) => (
  <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg flex flex-col h-full">
    <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">{title}</h2>
    <p className="text-lg text-gray-400 mb-4">{subtitle}</p>
    <div className="text-gray-300 space-y-3 flex-grow">{children}</div>
    <div className="mt-6 pt-4 border-t border-gray-800">
      <p className="text-sm text-gray-500">Progetti a partire da</p>
      <p className="text-2xl font-bold text-white">{price}</p>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center my-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Guidare la Tua Trasformazione Digitale
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-400">
          La trasformazione digitale non è solo adottare nuova tecnologia, ma ripensare il business in chiave strategica. I miei servizi sono progettati per accompagnarti in questo percorso, utilizzando l'AI e i dati come motori per una crescita intelligente e sostenibile.
        </p>
      </div>

      <div className="grid w-full max-w-7xl mx-auto gap-8 lg:grid-cols-3">
        {/* Servizio 1 */}
        <ServiceCard title="AI Strategy & System Design" subtitle="Il blueprint per il tuo successo." price="€2.800">
          <p>Progettiamo insieme l'architettura software intelligente che si adatta perfettamente ai tuoi obiettivi di business. Ideale per chi vuole partire con il piede giusto.</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Analisi dei requisiti di business</li>
            <li>Progettazione di architetture a microservizi</li>
            <li>Selezione dello stack tecnologico AI</li>
            <li>Roadmap di implementazione</li>
          </ul>
        </ServiceCard>

        {/* Servizio 2 */}
        <ServiceCard title="Data Insights & Predictive Modeling" subtitle="Trasforma i dati in decisioni." price="€1.900">
          <p>Sfruttiamo i tuoi dati per scoprire insight nascosti, creare modelli predittivi e costruire dashboard strategiche che guidano le tue azioni.</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Data Exploration & Visualization</li>
            <li>Sviluppo modelli Machine Learning custom</li>
            <li>Dashboarding con Power BI / Tableau</li>
            <li>Data Storytelling per stakeholder</li>
          </ul>
        </ServiceCard>

        {/* Servizio 3 - Descrizione aggiornata */}
        <ServiceCard title="Custom AI & Microservice Development" subtitle="Costruiamo la tua soluzione." price="€4.000">
          <p>Sviluppo end-to-end di applicazioni scalabili, resilienti e intelligenti, complete di interfacce web e API, per automatizzare processi e creare valore unico.</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Sviluppo full-stack (frontend e backend)</li>
            <li>Creazione di API e microservizi</li>
            <li>Integrazione di modelli AI</li>
            <li>Deployment su cloud (AWS/Azure/GCP)</li>
          </ul>
        </ServiceCard>
      </div>

      {/* Sezione per il Workshop */}
      <div className="mt-16 text-center rounded-2xl border border-emerald-700/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-white">Non sai da dove iniziare?</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-2">
          Prenota un **AI Readiness Workshop**. In una sessione intensiva, analizzeremo il tuo business e definiremo una roadmap chiara per la tua trasformazione AI.
        </p>
        <div className="mt-6">
            <Link href="/contact" className="cursor-pointer rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out bg-white text-emerald-900 hover:bg-emerald-500 hover:text-white hover:scale-[1.02]">
                Scopri il Workshop
            </Link>
        </div>
      </div>
    </div>
  );
}
// Questo file rappresenta la pagina dei servizi dell'applicazione MindEveLoop.