import { getAllNews } from '@/lib/news';
import NoticiasSection from '@/components/sections/noticias';

export default async function NoticiasPage({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  console.log('Idioma: ', lang);
  const posts = getAllNews(lang);

  return (
    <main className="flex-1 pt-20 container mx-auto px-4 md:px-6">
      <NoticiasSection posts={posts} lang={lang} />
    </main>
  );
}
