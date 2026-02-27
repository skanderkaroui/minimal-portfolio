import { Calendar, ChevronLeft, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { ComponentPropsWithoutRef } from "react";

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
  contentPath?: string;
  contentType?: "markdown" | "text" | "html";
};

const publishedPosts = (blogPosts as BlogPost[]).filter(
  (post) => post.done === "Yes"
);

export async function generateStaticParams() {
  return publishedPosts.map((post) => ({
    slug: post.titleUrl,
  }));
}

async function getPostContent(post: BlogPost) {
  if (post.contentType === "text") {
    return (post.content ?? "This article is currently being prepared.").trim();
  }

  if ((post.contentType === "markdown" || post.contentType === "html") && post.contentPath) {
    try {
      const resolvedPath = path.join(process.cwd(), post.contentPath);
      return (await fs.readFile(resolvedPath, "utf8")).trim();
    } catch {
      return "This article is currently being prepared.";
    }
  }

  return (post.content ?? "").trim();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = publishedPosts.find((item) => item.titleUrl === slug);
  if (!post) return notFound();
  const content = await getPostContent(post);

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
            <p className="mt-6">{content}</p>
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: (props) => {
                  const {
                    href,
                    children,
                    target,
                    rel,
                    ...anchorProps
                  } = props as ComponentPropsWithoutRef<"a">;

                  const isExternalLink = href?.startsWith("http");

                  return (
                    <a
                      href={href}
                      target={target ?? (isExternalLink ? "_blank" : undefined)}
                      rel={rel ?? (isExternalLink ? "noopener noreferrer" : undefined)}
                      {...anchorProps}
                    >
                      {children}
                    </a>
                  );
                },
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt ?? ""}
                    loading="lazy"
                    className="rounded-md substack-image"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          )}
        </article>
      </div>
    </div>
  );
}
