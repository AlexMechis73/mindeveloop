// app/projects/[slug]/page.tsx
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

// Funzione per i metadati dinamici (SEO/GEO)
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = await getProjectData(params.slug);
  if (!project) {
    return { title: 'Progetto non trovato' };
  }
  return {
    title: `${project.title} | Case Study di Alexis Salgado`,
    description: project.challenge,
  };
}

// Funzione helper per recuperare i dati del progetto
async function getProjectData(slug: string): Promise<Project | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/projects/${slug}`, { cache: 'no-store' });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Errore nel fetch dei dati del progetto:", error);
    return null;
  }
}

// Componente della pagina
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = await getProjectData(params.slug);

  if (!project) {
    return <p className="mt-8 text-center text-red-500">Progetto non trovato.</p>;
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <article className="rounded-2xl border border-gray-800/50 bg-black/50 overflow-hidden shadow-2xl backdrop-blur-lg">
        <div className="relative w-full h-80">
          <Image
            src={project.coverImage}
            alt={`Case study: ${project.title} nel settore ${project.industry}`}
            fill={true}
            style={{objectFit: 'cover'}}
          />
        </div>
        
        <div className="p-8">
          <p className="text-sm font-semibold text-emerald-400 mb-2">{project.industry}</p>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
            {project.title}
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">La Sfida</h2>
            <p className="text-gray-300 text-lg">{project.challenge}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">La Soluzione Progettata</h2>
            <p className="text-gray-300 text-lg">{project.solution}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Risultati Chiave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-emerald-400">{result.value}</p>
                  <p className="text-gray-400">{result.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">Tecnologie Utilizzate</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="inline-block bg-cyan-900/50 text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </article>

      <div className="text-center mt-12">
        <Link href="/projects" className="font-bold text-emerald-400 hover:text-emerald-300">
          &larr; Torna a tutti i progetti
        </Link>
      </div>
    </div>
  );
}