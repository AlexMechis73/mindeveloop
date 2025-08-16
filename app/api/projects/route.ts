// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { Project } from '@/types/project';

const projects: Project[] = [
  {
    id: '1',
    title: 'Soluzione Stand-Alone per il Manufacturing',
    slug: 'soluzione-manufacturing',
    industry: 'Manufacturing',
    coverImage: '/projects/manufacturing.webp',
    challenge: 'Un\'azienda manifatturiera necessitava di un controllo preciso del magazzino e di una previsione affidabile per la programmazione della produzione.',
    solution: 'Ho progettato e sviluppato un\'applicazione stand-alone custom che si integra con i sistemi esistenti per centralizzare i dati e ottimizzare la pianificazione.',
    results: [
      { value: '-30%', description: 'riduzione degli errori di inventario' },
      { value: '+20%', description: 'aumento dell\'efficienza produttiva' },
    ],
    technologies: ['Python', 'Flask', 'SQL Server', 'React', 'Docker'],
  },
  {
    id: '2',
    title: 'Creazione CRM e Analisi Dati per Retail',
    slug: 'crm-analisi-retail',
    industry: 'Retail & E-commerce',
    coverImage: '/projects/retail.webp',
    challenge: 'Un\'azienda retail con dati di vendita frammentati non aveva una visione unificata del cliente, limitando le strategie di marketing e vendita.',
    solution: 'Ho architettato una pipeline di dati (ETL/ELT), sviluppato un CRM su misura e applicato modelli di clustering per la segmentazione dei clienti.',
    results: [
      { value: '360°', description: 'visione completa del cliente' },
      { value: '+25%', description: 'efficacia delle campagne di marketing mirate' },
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Node.js', 'PostgreSQL', 'Microservices'],
  },
  {
    id: '3',
    title: 'Automazione Documentale per Studi Professionali',
    slug: 'automazione-studi-professionali',
    industry: 'Servizi Professionali',
    coverImage: '/projects/professional-services.webp',
    challenge: 'Studi legali e commercialisti perdevano centinaia di ore in processi manuali di classificazione e gestione di una vasta mole di documenti.',
    solution: 'Ho condotto un\'analisi di business e gestito il progetto per implementare una soluzione di automazione che classifica, estrae dati e archivia i documenti.',
    results: [
      { value: '-80%', description: 'riduzione del tempo di gestione manuale' },
      { value: '+99%', description: 'accuratezza nella classificazione' },
    ],
    technologies: ['Business Process Analysis', 'Project Management', 'OCR', 'Python', 'NLP'],
  },
  {
    id: '4',
    title: 'Dashboarding Strategico per Agenzia di Marketing',
    slug: 'dashboard-marketing',
    industry: 'Marketing & Advertising',
    coverImage: '/projects/marketing.webp',
    challenge: 'Un\'agenzia di marketing faticava a dimostrare il ROI delle campagne ai propri clienti in modo chiaro e immediato.',
    solution: 'Ho sviluppato un sistema di dashboarding centralizzato che aggrega dati da Google Analytics, social media e piattaforme adv, fornendo report interattivi.',
    results: [
      { value: '+40%', description: 'aumento della ritenzione clienti dell\'agenzia' },
      { value: '-50%', description: 'tempo risparmiato nella reportistica manuale' },
    ],
    technologies: ['Google Data Studio', 'Tableau', 'BigQuery', 'ETL'],
  },
  {
    id: '5',
    title: 'Segmentazione Clienti per E-commerce',
    slug: 'segmentazione-ecommerce',
    industry: 'E-commerce',
    coverImage: '/projects/ecommerce.webp',
    challenge: 'Un e-commerce inviava comunicazioni di marketing generiche a tutta la sua base utenti, con bassi tassi di conversione.',
    solution: 'Utilizzando tecniche di Data Science, ho analizzato lo storico degli acquisti e sviluppato modelli di clustering (K-Means) per segmentare i clienti.',
    results: [
      { value: '+30%', description: 'aumento del conversion rate delle campagne email' },
      { value: '+15%', description: 'aumento del valore medio dell\'ordine (AOV)' },
    ],
    technologies: ['Python', 'Jupyter', 'Scikit-learn', 'Pandas', 'CRM Integration'],
  },
  {
    id: '6',
    // --- CASE STUDY AGGIORNATO ---
    title: 'Microservizi Modulari per Team Sales',
    slug: 'microservizi-sales',
    industry: 'Software as a Service (SaaS)',
    coverImage: '/projects/saas.webp',
    challenge: 'Il team Sales di una piattaforma SaaS utilizzava strumenti lenti e monolitici per accedere ai dati dei clienti, rallentando il processo di vendita.',
    solution: 'Ho progettato un\'architettura a microservizi modulare. Ogni servizio gestisce una specifica funzione (dati cliente, storico ordini, etc.) ed espone i dati tramite API veloci, fornendo al team Sales gli strumenti di cui avevano bisogno.',
    results: [
      { value: '-75%', description: 'riduzione del tempo di accesso ai dati cliente' },
      { value: '+20%', description: 'aumento della produttività del team Sales' },
    ],
    technologies: ['Node.js', 'TypeScript', 'Microservices', 'Docker', 'Kubernetes', 'RabbitMQ'],
  },
];

export async function GET() {
  const projectsForList = projects.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    industry: p.industry,
    coverImage: p.coverImage,
    challenge: p.challenge,
  }));
  return NextResponse.json(projectsForList);
}

export const getProjectsData = () => projects;