// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getPostData, getSortedPostsData } from '@/lib/posts'; // Importiamo le funzioni corrette
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import NewsletterSignup from '@/components/NewsletterSignup';
import Card from '@/components/Card';

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

// La funzione per i metadati ora usa la nostra utility
export async function generateMetadata({ params }: PostDetailPageProps): Promise<Metadata> {
  const post = getPostData(params.slug);
  if (!post) {
    return { title: 'Articolo non trovato' };
  }
  return {
    title: `${post.data.title} | MindEveLoop Blog`,
    description: post.data.excerpt,
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  // Anche il componente ora usa la nostra utility
  const post = getPostData(params.slug);
  
  const allPosts = getSortedPostsData();
  const relatedPosts = allPosts.filter(p => p.slug !== params.slug).slice(0, 2);

  if (!post) {
    return <p className="mt-8 text-center text-red-500">Articolo non trovato.</p>;
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <article className="rounded-2xl border border-gray-800/50 bg-black/50 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent">
          {post.data.title}
        </h1>
        
        {post.data.subtitle && (
          <h2 className="mb-4 text-xl font-semibold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
            {post.data.subtitle}
          </h2>
        )}

        <div className="mb-4">
          <Link 
            href={`/blog/category/${encodeURIComponent(post.data.category)}`}
            className="inline-block bg-cyan-900/50 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors duration-300 hover:bg-cyan-800/50 hover:text-cyan-300"
          >
            {post.data.category}
          </Link>
        </div>

        <p className="text-sm text-gray-400 mb-6">
          Pubblicato da {post.data.author} il {new Date(post.data.publishDate).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="prose prose-invert text-gray-300 max-w-none prose-h2:text-white prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-2 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-strong:text-white">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Approfondisci</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map(relatedPost => (
            <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block h-full transition-all duration-300 hover:scale-[1.03] group">
              <Card title={relatedPost.title} icon={<span>📄</span>}>
                <p className="text-sm text-gray-500 mb-2">{relatedPost.category}</p>
                {relatedPost.excerpt}
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="font-bold text-emerald-400 hover:text-emerald-300">
            &larr; Vai all'archivio completo del Blog
          </Link>
        </div>
      </div>

      <div className="mt-24 w-full">
        <NewsletterSignup sourcePage={`Blog: ${post.data.title}`} />
      </div>
    </div>
  );
}
