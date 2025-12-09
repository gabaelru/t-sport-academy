import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { getAllNews, getNewsBySlug } from '@/lib/news';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllNews();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function NewsPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20 container mx-auto px-4 md:px-6">
        <article className="py-12">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
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
                  // Renderizar imágenes dentro del markdown de forma responsiva
                  // eslint-disable-next-line @next/next/no-img-element
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

      <Footer />
    </div>
  );
}
