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
    <main className="flex-1 pt-20 container mx-auto px-4 md:px-6">
      <article className="py-12">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{post.date}</p>

        {post.image ? (
          <div className="w-full mb-6 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        ) : null}

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }: any) => (
                <img
                  {...props}
                  className={
                    (props.className ? props.className + ' ' : '') +
                    'max-w-full h-auto mx-auto'
                  }
                />
              ),
            }}
          >
            {post.content ?? ''}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
