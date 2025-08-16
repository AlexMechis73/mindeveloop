// app/contact/page.tsx
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contatti | MindEveLoop',
  description: 'Iniziamo una conversazione. Contatta Alex Mechis per discutere del tuo prossimo progetto AI o per prenotare un AI Readiness Workshop.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <div className="text-center my-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Iniziamo una Conversazione
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Hai un progetto in mente, una sfida da risolvere o sei semplicemente curioso di sapere come l'AI può trasformare il tuo business? Sono qui per ascoltarti.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg">
        <form action="#" method="POST">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome Completo</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-lg border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="Il tuo nome"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-lg border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="latua@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Messaggio</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full rounded-lg border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none"
                  placeholder="Descrivi brevemente il tuo progetto o la tua richiesta..."
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg px-8 py-4 text-base font-bold transition-all duration-300 ease-in-out bg-white text-emerald-900 hover:bg-emerald-500 hover:text-white hover:scale-[1.02]"
              >
                Invia Messaggio
              </button>
            </div>
          </div>
        </form>
        {/* NOTA: Questo form al momento non invia email. L'API di invio verrà sviluppata in una fase successiva. */}
      </div>
    </div>
  );
}
// Questo file rappresenta la pagina di contatto dell'applicazione MindEveLoop.