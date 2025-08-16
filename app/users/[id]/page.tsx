// app/users/[id]/page.tsx
'use client'; // Componente interattivo per gestire lo stato (loading, error)

import React, { useState, useEffect } from 'react';

// Definiamo la struttura dell'utente che ci aspettiamo dall'API
interface Utente {
  id: string;
  email: string;
  nome: string;
  ruolo: 'admin' | 'cliente';
}

// Props che il componente riceve da Next.js (include i parametri dell'URL)
interface UserDetailPageProps {
  params: {
    id: string; // L'ID dell'utente dall'URL, es. "1"
  };
}

export default function UserDetailPage({ params }: UserDetailPageProps) {
  const [user, setUser] = useState<Utente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = params; // Estraiamo l'ID per comodità

  useEffect(() => {
    if (!id) return; // Non fare nulla se l'ID non è ancora disponibile

    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/users/${id}`); // Chiamata all'API dinamica
        if (!response.ok) {
          throw new Error('Utente non trovato');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Impossibile caricare i dati dell\'utente.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // L'effetto si riesegue solo se l'ID cambia

  // Stati di caricamento ed errore
  if (loading) return <p className="mt-8 text-center text-gray-400">Caricamento utente...</p>;
  if (error) return <p className="mt-8 text-center text-red-500">{error}</p>;
  if (!user) return <p className="mt-8 text-center text-gray-400">Nessun utente da visualizzare.</p>;

  // Renderizzazione dei dati dell'utente
  return (
    <div className="container mx-auto p-8">
      <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Profilo Utente
        </h1>
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-bold text-gray-400">NOME</p>
            <p className="text-xl text-white">{user.nome}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400">EMAIL</p>
            <p className="text-xl text-white">{user.email}</p>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400">RUOLO</p>
            <p className="text-xl font-semibold capitalize text-emerald-400">{user.ruolo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
