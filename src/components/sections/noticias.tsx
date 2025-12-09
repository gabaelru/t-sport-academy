import { NewsItem } from "@/lib/news";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface NoticiasProps {
  posts: NewsItem[];
}

export default function NoticiasSection({ posts }: NoticiasProps) {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Noticias</h1>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No hay noticias todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col md:flex-row items-start bg-card p-4 rounded-lg shadow-sm gap-4"
            >
              {post.image && (
                <div className="w-full md:w-40 h-40 md:h-28 overflow-hidden rounded-md flex-shrink-0 flex items-center justify-center bg-muted/40">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{post.date}</p>

                {post.resumen && (
                  <p className="text-foreground/90">{post.resumen}</p>
                )}
                <div className="mt-4">
                    <Button asChild variant="outline">
                    <Link href={`/noticias/${post.slug}`} className="text-sm">Leer más</Link>
                    </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
