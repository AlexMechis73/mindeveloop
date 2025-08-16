import { NextResponse } from 'next/server';

// In futuro, questi dati arriveranno da un database
const users = [
  { id: '1', nome: 'Alex Mechis', email: 'alex@mindeveloop.com', ruolo: 'admin' },
  { id: '2', nome: 'Mario Rossi', email: 'mario.rossi@example.com', ruolo: 'cliente' },
  { id: '3', nome: 'Jane Doe', email: 'jane.doe@example.com', ruolo: 'cliente' },
];

// Questa funzione risponde quando visitiamo /api/users
export async function GET() {
  return NextResponse.json(users);
}
