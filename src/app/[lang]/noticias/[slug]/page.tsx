import { getAllNews, getNewsBySlug, getTranslatedSlugs } from '@/lib/news';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type Props = {
  params: { slug: string; lang: string };
};

export async function generateStaticParams() {
  const languages = ['en', 'es', 'eu'];
  const params: { slug: string; lang: string }[] = [];
  for (const lang of languages) {
    const posts = getAllNews(lang);
    for (const p of posts) {
      params.push({ slug: p.slug, lang });
    }
  }
  return params;
}

export default async function NewsPage({ params }: Props) {
  const { slug, lang } = await params;
  const post = getNewsBySlug(slug, lang);
  if (!post) return notFound();

  return (
    <main className="flex-1 pt-24 pb-20 bg-black">
      <article className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#c56585] leading-tight">
            {post.title}
          </h1>

          <p className="text-sm text-[#8abcca]">
            {post.date}
          </p>
        </header>

        {/* Imagen destacada */}
        {post.image && (
          <div className="mb-10">
            <div
              className="relative w-full
                        h-[260px] sm:h-[320px] md:h-[380px]
                        rounded-xl
                        overflow-hidden
                        bg-[#0f0f14]
                        border border-[#8abcca]/30"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
        {/* Contenido */}
        <div
          className="prose prose-lg max-w-none
                     prose-headings:text-[#c56585]
                     prose-p:text-[#a595aa]
                     prose-strong:text-[#c56585]
                     prose-a:text-[#e23a63]
                     prose-a:no-underline hover:prose-a:underline
                     prose-ul:text-[#a595aa]
                     prose-ol:text-[#a595aa]
                     prose-blockquote:border-l-[#e23a63]
                     prose-blockquote:text-[#a595aa]
                     prose-img:rounded-xl
                     prose-img:mx-auto"
        >
          <ReactMarkdown
            components={{
              img: ({ node, ...props }: any) => (
                <img
                  {...props}
                  className={
                    (props.className ? props.className + ' ' : '') +
                    'max-w-full h-auto mx-auto rounded-xl'
                  }
                />
              ),
            }}
          >
            {post.content ?? ''}
          </ReactMarkdown>
        </div>

        {/* Separador final */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#8abcca]/40 to-transparent" />
      </article>
    </main>
  );
}
