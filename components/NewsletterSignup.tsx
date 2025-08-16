// components/NewsletterSignup.tsx
'use client';

import React, { useState } from 'react';
import Button from './Button';

// Il componente ora accetta una prop per sapere da dove viene chiamato
interface NewsletterSignupProps {
  sourcePage: string;
}

export default function NewsletterSignup({ sourcePage }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Iscrizione in corso...');
    setIsError(false);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Inviamo sia l'email che la pagina di origine
        body: JSON.stringify({ email, sourcePage }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Grazie per esserti iscritto!');
        setEmail('');
      } else {
        setMessage(data.message || 'Si è verificato un errore.');
        setIsError(true);
      }
    } catch (error) {
      setMessage('Impossibile connettersi al server.');
      setIsError(true);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 text-center shadow-2xl backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-white">Rimani Aggiornato</h2>
      <p className="mt-2 text-gray-400">Iscriviti per ricevere le ultime risorse e articoli direttamente nella tua casella di posta.</p>

      {message && !message.includes('Iscrizione in corso...') ? (
        <p className={`mt-4 font-bold ${isError ? 'text-red-500' : 'text-emerald-400'}`}>{message}</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none sm:w-auto"
          />
          <Button variant="primary">Iscriviti</Button>
        </form>
      )}
       {message.includes('Iscrizione in corso...') && <p className="mt-4 text-gray-400">{message}</p>}
    </div>
  );
}