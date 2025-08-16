// app/page.tsx
import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Sezione Hero principale */}
      <div className="text-center min-h-[90vh] flex flex-col justify-center relative w-full">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl pb-2">
          Architetto di Soluzioni Digitali
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg sm:text-xl text-gray-300">
          Mi chiamo Alexis Salgado e sono un ingegnere che supporta le aziende nel processo di trasformazione digitale, convertendo sfide complesse in opportunità di crescita, attraverso la progettazione di strategie e lo sviluppo di sistemi intelligenti che integrano diversi strumenti e tecnologie come il ML e le AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/services">
            <Button variant="primary">I Miei Servizi</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contattami</Button>
          </Link>
        </div>

        <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2">
          <a href="#case-studies" className="animate-bounce flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
            <span className="text-sm">Scopri i miei lavori</span>
            <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>
        </div>
      </div>

      {/* Sezione Case Studies con 6 progetti */}
      <div id="case-studies" className="pt-20 w-full max-w-6xl">
        <h2 className="text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-3xl sm:text-4xl font-bold text-transparent">
          Case Studies Recenti
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/projects/soluzione-manufacturing" className="block h-full transition-all duration-300 hover:scale-[1.03] group"><Card title="Soluzione Stand-Alone per il Manufacturing" icon={<span>🏭</span>}>Sviluppo di un'app custom per il controllo magazzino e la previsione della produzione.</Card></Link>
          <Link href="/projects/crm-analisi-retail" className="block h-full transition-all duration-300 hover:scale-[1.03] group"><Card title="Creazione CRM e Analisi Dati per Retail" icon={<span>🛍️</span>}>Pipeline dati, CRM custom e modelli di clustering per la segmentazione clienti.</Card></Link>
          <Link href="/projects/automazione-studi-professionali" className="block h-full transition-all duration-300 hover:scale-[1.03] group"><Card title="Automazione Documentale per Studi Professionali" icon={<span>📄</span>}>Analisi di business e project management per automatizzare la classificazione documentale.</Card></Link>
          <Link href="/projects/dashboard-marketing" className="block h-full transition-all duration-300 hover:scale-[1.03] group"><Card title="Dashboarding Strategico per Agenzia di Marketing" icon={<span>📈</span>}>Sviluppo di dashboard custom per dimostrare il ROI delle campagne e migliorare la ritenzione clienti.</Card></Link>
          <Link href="/projects/segmentazione-ecommerce" className="block h-full transition-all duration-300 hover:scale-[1.03] group"><Card title="Segmentazione Clienti per E-commerce" icon={<span>🎯</span>}>Modelli di Data Science per segmentare la base utenti e personalizzare le offerte di marketing.</Card></Link>
          {/* --- CARD AGGIORNATA --- */}
          <Link href="/projects/microservizi-sales" className="block h-full transition-all duration-300 hover:scale-[1.03] group">
            <Card title="Microservizi Modulari per Team Sales" icon={<span>🔌</span>}>
              Sviluppo di un'architettura a microservizi per fornire dati cliente in tempo reale e aumentare la produttività.
            </Card>
          </Link>
        </div>
      </div>

      <div className="mt-24 w-full flex justify-center">
        <a href="#newsletter" className="animate-bounce flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
          <span className="text-sm">Rimani aggiornato</span>
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </a>
      </div>

      <div id="newsletter" className="mt-12 mb-12 w-full max-w-4xl">
        <NewsletterSignup sourcePage="home" />
      </div>
    </div>
  );
}