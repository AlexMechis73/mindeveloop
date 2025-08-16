// app/blog/category/[categoryName]/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import type { Post } from '@/types/post';
import Link from 'next/link'; // Usiamo il Link di Next per la navigazione

type PostForList = Omit<Post, 'content'>;

interface CategoryPageProps {
  params: {
    categoryName: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [posts, setPosts] = useState<PostForList[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Decodifichiamo il nome della categoria per mostrarlo correttamente nel titolo
  const categoryName = decodeURIComponent(params.categoryName);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      try {
        const response = await fetch(`/api/blog/category/${params.categoryName}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Errore nel caricamento degli articoli per categoria:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPostsByCategory();
  }, [params.categoryName]); // L'effetto si riesegue se cambia la categoria

  if (loading) return <p className="mt-8 text-center">Caricamento articoli...</p>;

  return (
    <div>
      <div className="text-center my-12">
        <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Categoria: {categoryName}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Articoli trovati in questa categoria.
        </p>
      </div>

      <div className="grid w-full max-w-4xl mx-auto gap-8 md:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => (
            <a key={post.id} href={`/blog/${post.slug}`} className="block transition-all duration-300 hover:scale-[1.03] group">
              <Card title={post.title} icon={<span>📝</span>}>
                <p className="text-sm text-gray-500 mb-2">{new Date(post.publishDate).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div className="mb-3">
                  <span className="inline-block bg-cyan-900/50 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                {post.excerpt}
              </Card>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-400 md:col-span-2">Nessun articolo trovato in questa categoria.</p>
        )}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/blog" className="font-bold text-emerald-400 hover:text-emerald-300">
          &larr; Torna a tutti gli articoli
        </Link>
      </div>
    </div>
  );
}