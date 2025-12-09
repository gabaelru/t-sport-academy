import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getAllNews } from '@/lib/news';
import NoticiasSection from '@/components/sections/noticias';

export default function NoticiasPage() {
  const posts = getAllNews(); // solo aquí (Server Component)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20 container mx-auto px-4 md:px-6">
        <NoticiasSection posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
