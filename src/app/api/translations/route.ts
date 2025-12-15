import { getTranslatedSlugs } from '@/lib/news';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const lang = searchParams.get('lang');

  if (!slug || !lang) {
    return NextResponse.json({ error: 'Missing slug or lang parameter' }, { status: 400 });
  }

  try {
    const translatedSlugs = getTranslatedSlugs(slug, lang);
    return NextResponse.json(translatedSlugs);
  } catch (error) {
    console.error('Error fetching translated slugs:', error);
    return NextResponse.json({ error: 'Failed to fetch translations' }, { status: 500 });
  }
}
