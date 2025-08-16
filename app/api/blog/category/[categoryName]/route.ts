// app/api/blog/category/[categoryName]/route.ts
import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts';

export async function GET(
  request: Request,
  { params }: { params: { categoryName: string } }
) {
  const category = decodeURIComponent(params.categoryName);
  const allPosts = getSortedPostsData();
  
  const filteredPosts = allPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase());

  return NextResponse.json(filteredPosts);
}
