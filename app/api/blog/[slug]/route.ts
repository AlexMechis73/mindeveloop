// app/api/blog/[slug]/route.ts
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/types/post';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const fullPath = path.join(process.cwd(), '_posts', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post: Post = {
      id: slug,
      slug: slug,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      type: data.type, // <-- PROPRIETÀ AGGIUNTA
      author: data.author,
      publishDate: data.publishDate,
      excerpt: data.excerpt,
      content: content,
    };

    return NextResponse.json(post);

  } catch (error) {
    console.error(`Errore nel caricamento del post ${slug}:`, error);
    return NextResponse.json({ message: 'Articolo non trovato' }, { status: 404 });
  }
}
