
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NEWS_DIR_BASE = path.join(process.cwd(), 'content', 'noticias');
const LANGUAGES = ['en', 'es', 'eu'];

export interface NewsItem {
  title: string;
  date: string;
  category?: string;
  slug: string;
  resumen?: string;
  image?: string | null;
  content?: string;
  translationId?: string;
}

export function getAllNews(locale: string): NewsItem[] {
  const NEWS_DIR = path.join(NEWS_DIR_BASE, locale);
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md'));

  const items: NewsItem[] = files.map((fileName) => {
    const fullPath = path.join(NEWS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const imgMatch = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
    const image = data.image ?? (imgMatch ? imgMatch[1] : null);

    const cleanedContent = data.image
      ? content.replace(/!\[[^\]]*\]\([^\)]+\)\s*/i, '')
      : content;

    const item: NewsItem = {
      title: data.title ?? fileName.replace(/\.md$/, ''),
      date: data.date ?? '1970-01-01',
      category: data.category ?? undefined,
      slug: data.slug ?? fileName.replace(/\.md$/, ''),
      resumen: data.resumen ?? undefined,
      image,
      content: cleanedContent,
      translationId: data.translationId ?? undefined,
    };

    return item;
  });

  items.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));
  return items;
}

export function getNewsBySlug(slug: string, locale: string): NewsItem | null {
  const items = getAllNews(locale);
  return items.find((i) => i.slug === slug) ?? null;
}

export function getTranslatedSlugs(slug: string, currentLocale: string): Record<string, string> {
  const currentPost = getNewsBySlug(slug, currentLocale);
  if (!currentPost || !currentPost.translationId) {
    return {};
  }

  const translatedSlugs: Record<string, string> = {};

  for (const lang of LANGUAGES) {
    if (lang === currentLocale) continue;
    const allNewsForLang = getAllNews(lang);
    const translatedPost = allNewsForLang.find(
      (p) => p.translationId === currentPost.translationId
    );
    if (translatedPost) {
      translatedSlugs[lang] = translatedPost.slug;
    }
  }

  return translatedSlugs;
}
