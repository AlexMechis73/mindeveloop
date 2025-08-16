// lib/posts.ts
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/types/post';

const postsDirectory = path.join(process.cwd(), '_posts');

// Funzione per ottenere la lista di tutti i post, ordinati e senza il contenuto completo
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const post: Omit<Post, 'content'> = {
      id: slug,
      slug: slug,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      category: matterResult.data.category,
      type: matterResult.data.type,
      author: matterResult.data.author,
      publishDate: matterResult.data.publishDate,
      excerpt: matterResult.data.excerpt,
    };
    
    return post;
  });

  return allPostsData.sort((a, b) => {
    if (a.publishDate < b.publishDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Funzione per ottenere i dati e il contenuto di un singolo post
export function getPostData(slug: string) {
  try {
    const fullPath = path.join(process.cwd(), '_posts', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { 
      data: {
        ...data,
        slug,
      } as Omit<Post, 'content' | 'id'> & { slug: string },
      content 
    };
  } catch (error) {
    return null;
  }
}