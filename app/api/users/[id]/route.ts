import { NextResponse } from 'next/server';

// Dati mock, gli stessi di /api/users/route.ts
const users = [
  { id: '1', nome: 'Alex Mechis', email: 'alex@mindeveloop.com', ruolo: 'admin' },
  { id: '2', nome: 'Mario Rossi', email: 'mario.rossi@example.com', ruolo: 'cliente' },
  { id: '3', nome: 'Jane Doe', email: 'jane.doe@example.com', ruolo: 'cliente' },
];

// Funzione che gestisce le richieste GET a /api/users/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id; // Estraiamo l'ID dall'URL

  // Cerchiamo l'utente nell'array
  const user = users.find((u) => u.id === userId);

  if (!user) {
    // Se l'utente non esiste, restituiamo un errore 404
    return NextResponse.json({ message: 'Utente non trovato' }, { status: 404 });
  }

  // Se l'utente esiste, lo restituiamo con successo
  return NextResponse.json(user);
}
