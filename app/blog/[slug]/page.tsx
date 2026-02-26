import { Calendar, ChevronLeft, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import blogPosts from "@/app/data/blogpost.json";

type BlogPost = {
  id: string;
  titleUrl: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  done: "Yes" | "No";
  image?: string;
  content?: string;
  contentType?: "markdown" | "text";
};

const publishedPosts = (blogPosts as BlogPost[]).filter(
  (post) => post.done === "Yes"
);

export async function generateStaticParams() {
  return publishedPosts.map((post) => ({
    slug: post.titleUrl,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = publishedPosts.find((item) => item.titleUrl === slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <div className="mx-auto max-w-3xl px-4 py-8 md:py-16">
        <Link href="/blog" passHref>
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="blog-article-shell font-bookerly">
          <header className="border-b border-border pb-8">
            <h1 className="article-title">{post.title}</h1>
            {post.description ? (
              <p className="post-subtitle">{post.description}</p>
            ) : null}
            <div className="meta-row">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
              <span className="meta-divider" />
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </header>

          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="my-8 h-auto w-full rounded-lg object-cover"
              priority
            />
          ) : null}

          {post.contentType === "text" ? (
            <p className="mt-6">{post.content ?? "This article is currently being prepared."}</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                p: ({ children }) => <p>{children}</p>,
                h1: ({ children }) => <h1>{children}</h1>,
                h2: ({ children }) => <h2>{children}</h2>,
                h3: ({ children }) => <h3>{children}</h3>,
                h4: ({ children }) => <h4>{children}</h4>,
                a: ({ href, children }) => (
                  <a href={href}>{children}</a>
                ),
                ul: ({ children }) => <ul>{children}</ul>,
                ol: ({ children }) => <ol className="my-6 list-decimal space-y-2 pl-6">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                hr: () => <hr />,
                blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt ?? ""}
                    loading="lazy"
                  />
                ),
              }}
            >
              {(post.content ?? "").trim()}
            </ReactMarkdown>
          )}
        </article>
      </div>
    </div>
  );
}
