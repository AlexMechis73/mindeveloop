import { NextResponse } from 'next/server';

const resources = [
  { 
    id: '1', 
    title: 'Guida Definitiva al Prompt Engineering', 
    description: 'Un ebook gratuito per imparare a dialogare con le AI generative e ottenere risultati sorprendenti.',
    type: 'Ebook',
    downloadUrl: '#' 
  },
  { 
    id: '2', 
    title: 'Checklist per la Strategia Digitale', 
    description: 'Un PDF interattivo per non dimenticare nessun passo fondamentale nella pianificazione del tuo prossimo progetto.',
    type: 'Checklist',
    downloadUrl: '#' 
  },
  { 
    id: '3', 
    title: 'Template per Business Plan AI-Driven', 
    description: 'Un template completo per presentare un business plan che integra soluzioni di intelligenza artificiale.',
    type: 'Template',
    downloadUrl: '#' 
  },
];

export async function GET() {
  return NextResponse.json(resources);
}
