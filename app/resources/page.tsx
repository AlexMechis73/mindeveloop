'use client';

import NewsletterSignup from '@/components/NewsletterSignup';
import React, { useState, useEffect } from 'react';
import Card from '@/components/Card'; // Riutilizziamo il nostro componente Card!

interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  downloadUrl: string;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch('/api/resources');
      const data = await response.json();
      setResources(data);
      setLoading(false);
    };
    fetchResources();
  }, []);

  if (loading) return <p className="mt-8 text-center">Caricamento risorse...</p>;

  return (
    <div>
      <div className="text-center my-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Risorse Gratuite
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Una collezione di strumenti, guide e template per accelerare la tua innovazione.
        </p>
      </div>

      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} title={resource.title} icon={<span>📄</span>}>
            {resource.description}
            <div className="mt-4">
              <a href={resource.downloadUrl} className="font-bold text-emerald-400 hover:text-emerald-300">
                Download ({resource.type})
              </a>
            </div>
          </Card>
        ))}
      </div>
      
      {/* --- INSERIMENTO DEL NUOVO COMPONENTE --- */}
      <NewsletterSignup sourcePage="Resources" />
    </div>
  );
}
