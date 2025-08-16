// app/blog/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import type { Post } from '@/types/post';
import Link from 'next/link';

type PostForList = Omit<Post, 'content'>;

export default function BlogPage() {
  const [posts, setPosts] = useState<PostForList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Errore nel caricamento degli articoli:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="mt-8 text-center">Caricamento articoli...</p>;

  return (
    <div>
      <div className="text-center my-12">
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          Blog
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Approfondimenti, guide e riflessioni sul mondo dell'AI e dello sviluppo strategico.
        </p>
      </div>

      <div className="grid w-full max-w-4xl mx-auto gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <Link href={`/blog/${post.slug}`} className="block transition-all duration-300 hover:scale-[1.03] group flex-grow">
              <Card title={post.title} icon={<span>📝</span>}>
                <p className="text-sm text-gray-500 mb-2">{new Date(post.publishDate).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div className="mb-3">
                  {/* --- MODIFICA QUI: IL TAG È ORA UN LINK --- */}
                  <Link 
                    href={`/blog/category/${encodeURIComponent(post.category)}`} 
                    className="inline-block bg-cyan-900/50 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors duration-300 hover:bg-cyan-800/50 hover:text-cyan-300"
                    onClick={(e) => e.stopPropagation()} // Impedisce al click di propagarsi al link della card
                  >
                    {post.category}
                  </Link>
                </div>
                {post.excerpt}
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
