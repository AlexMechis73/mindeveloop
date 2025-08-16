// types/post.ts

export interface Post {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  category: string;
  type: 'pillar' | 'cluster'; // <-- CAMPO STRATEGICO AGGIUNTO
  author: string;
  publishDate: string;
  excerpt: string;
  content: string;
}