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
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <Link href="/blog" passHref>
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="prose dark:prose-invert lg:prose-lg xl:prose-xl max-w-none">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <Calendar className="mr-2 h-4 w-4" />
            <span className="mr-4">{post.date}</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>

          {post.image ? (
            <Image
              src={post.image}
              alt=""
              width={1200}
              height={675}
              className="mb-8 h-auto w-full rounded-lg object-cover"
              priority
            />
          ) : null}

          <p className="text-lg">{post.description}</p>

          {post.contentType === "text" ? (
            <p className="text-lg leading-relaxed">
              {post.content ?? "This article is currently being prepared."}
            </p>
          ) : (
            <div className="space-y-6 text-lg leading-relaxed">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => (
                    <p className="text-lg leading-relaxed">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-semibold mt-6 mb-2">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-6 mb-2">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mt-4 mb-2">
                      {children}
                    </h3>
                  ),
                  a: ({ children, href }) => (
                    <a href={href} className="underline underline-offset-4">
                      {children}
                    </a>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc space-y-2 pl-6">{children}</ul>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-6 overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={alt ?? ""}
                        className="h-auto w-full rounded-lg object-cover"
                      />
                    </div>
                  ),
                }}
              >
                {(post.content ?? "").trim()}
              </ReactMarkdown>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
