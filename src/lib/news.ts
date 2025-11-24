import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NEWS_DIR = path.join(process.cwd(), 'content', 'noticias');

export type NewsItem = {
  title: string;
  date: string;
  category?: string;
  slug: string;
  resumen?: string;
  image?: string | null;
  content?: string;
};

export function getAllNews(): NewsItem[] {
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md'));

  const items: NewsItem[] = files.map((fileName) => {
    const fullPath = path.join(NEWS_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // prefer explicit frontmatter `image`, otherwise extract first image from markdown content
    const imgMatch = content.match(/!\[[^\]]*\]\(([^)]+)\)/);
    const image = data.image ?? (imgMatch ? imgMatch[1] : null);

    // if the frontmatter specifies an explicit image, remove the first markdown image
    // from the content to avoid rendering it twice (once as header image and once
    // inside the markdown body).
    const cleanedContent = data.image ? content.replace(/!\[[^\]]*\]\([^\)]+\)\s*/i, '') : content;

    const item: NewsItem = {
      title: data.title ?? fileName.replace(/\.md$/, ''),
      date: data.date ?? '1970-01-01',
      category: data.category ?? undefined,
      slug: data.slug ?? fileName.replace(/\.md$/, ''),
      resumen: data.resumen ?? undefined,
      image,
      content: cleanedContent,
    };

    return item;
  });

  // sort by date desc
  items.sort((a, b) => (a.date > b.date ? -1 : a.date < b.date ? 1 : 0));
  return items;
}

export function getNewsBySlug(slug: string): NewsItem | null {
  const items = getAllNews();
  return items.find((i) => i.slug === slug) ?? null;
}
