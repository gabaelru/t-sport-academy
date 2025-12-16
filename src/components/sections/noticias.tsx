'use client';

import { NewsItem } from "@/lib/news";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface NoticiasProps {
  posts: NewsItem[];
  lang: string;
}

export default function NoticiasSection({ posts, lang }: NoticiasProps) {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-black">
      <h1 className="text-3xl font-bold mb-10 text-[#c56585]">
        {t('Noticias.Titulo')}
      </h1>

      {posts.length === 0 ? (
        <p className="text-[#a595aa]">
          No hay noticias todavía.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col md:flex-row gap-4 md:gap-6
                         p-5 md:p-6
                         rounded-xl
                         bg-[#0f0f14]
                         border border-[#8abcca]/30
                         shadow-lg shadow-black/40
                         transition-all
                         hover:shadow-xl hover:-translate-y-0.5"
            >
              {post.image && (
                <div
                  className="w-full md:w-40 h-40 md:h-28
                             rounded-lg
                             overflow-hidden
                             bg-[#8abcca]/10
                             flex items-center justify-center
                             shrink-0"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover
                               transition-transform
                               group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <h2 className="text-lg md:text-xl font-semibold mb-1 text-[#c56585]">
                  {post.title}
                </h2>

                <p className="text-xs mb-3 text-[#8abcca]">
                  {post.date}
                </p>

                {post.resumen && (
                  <p className="text-sm leading-relaxed text-[#a595aa]">
                    {post.resumen}
                  </p>
                )}

                <div className="mt-5">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#8abcca] text-[#8abcca]
                               hover:bg-[#8abcca]/15
                               hover:text-[#8abcca]"
                  >
                    <Link
                      href={`/${lang}/noticias/${post.slug}`}
                      className="text-sm font-medium"
                    >
                      Leer más
                    </Link>
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