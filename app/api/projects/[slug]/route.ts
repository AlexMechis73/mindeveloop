// app/api/projects/[slug]/route.ts
import { NextResponse } from 'next/server';
// Importiamo la funzione che contiene i nostri dati aggiornati
import { getProjectsData } from '../route'; 

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const projects = getProjectsData(); // Otteniamo i dati completi e aggiornati
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return NextResponse.json({ message: 'Progetto non trovato' }, { status: 404 });
  }

  return NextResponse.json(project);
}