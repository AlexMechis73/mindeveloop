// app/projects/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from '@/components/NewsletterSignup';
import Button from '@/components/Button'; // Importiamo il Button

interface ProjectForList {
  id: string;
  title: string;
  slug: string;
  industry: string;
  coverImage: string;
  challenge: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectForList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Errore nel caricamento dei progetti:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p className="mt-8 text-center">Caricamento progetti...</p>;

  return (
    <div className="container mx-auto p-8">
      <div className="text-center my-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          I Miei Progetti
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Una selezione di progetti che dimostrano come trasformo le sfide complesse in soluzioni digitali di valore.
        </p>
      </div>

      <div className="grid gap-12 max-w-4xl mx-auto">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`} className="block group">
            <div className="rounded-2xl border border-gray-800/50 bg-black/50 overflow-hidden shadow-2xl backdrop-blur-lg transition-all duration-300 group-hover:border-emerald-600/50 group-hover:scale-[1.02]">
              <div className="relative w-full h-64">
                <Image
                  src={project.coverImage}
                  alt={`Immagine di copertina per ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-emerald-400 mb-1">{project.industry}</p>
                <h2 className="text-2xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-300">{project.title}</h2>
                <p className="text-gray-400">{project.challenge}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* --- NUOVA SEZIONE CTA PER IL CONTATTO --- */}
      <div className="mt-16 text-center rounded-2xl border border-emerald-700/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white">Hai una sfida simile?</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400 mt-2">
          Se i miei lavori ti hanno ispirato, parliamo di come posso aiutare te e il tuo business a raggiungere il prossimo livello.
        </p>
        <div className="mt-6">
            <Link href="/contact">
                <Button variant="primary">Parliamo del Tuo Progetto</Button>
            </Link>
        </div>
      </div>

      <div className="mt-24 w-full max-w-4xl mx-auto">
        <NewsletterSignup sourcePage="Projects" />
      </div>
    </div>
  );
}
