// app/users/page.tsx
'use client'; // Diciamo a Next.js che questo è un componente interattivo

import React, { useState, useEffect } from 'react';

// Definiamo la struttura di un Utente, per lavorare con dati sicuri
interface Utente {
  id: string;
  email: string;
  nome: string;
  ruolo: 'admin' | 'cliente' | 'visitatore';
}

export default function UsersPage() {
  const [users, setUsers] = useState<Utente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Funzione asincrona per recuperare i dati dall'API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Chiamata alla nostra API
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Impossibile recuperare gli utenti.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // L'array vuoto [] assicura che questo codice venga eseguito solo una volta

  if (loading) {
    return <p className="mt-8 text-center text-gray-400">Caricamento utenti...</p>;
  }

  if (error) {
    return <p className="mt-8 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
        System Users
      </h1>
      <div className="rounded-2xl border border-gray-800/50 bg-black/50 p-6 shadow-2xl backdrop-blur-lg">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border-b border-gray-700 py-4 last:border-b-0">
              <a href={`/users/${user.id}`} className="text-xl font-semibold text-white transition-colors duration-300 hover:text-emerald-400">
              {user.nome}
            </a>
              <p className="text-gray-400">{user.email}</p>
              <p className="text-sm capitalize text-emerald-400">{user.ruolo}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}