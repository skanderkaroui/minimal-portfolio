import {
  Calendar,
  ChevronLeft,
  Clock,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
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
import { BlogEmailSubscribeForm } from "@/components/blog-email-subscribe";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ScrollProgress />
      <main className="mx-auto flex-1 w-full max-w-3xl px-4 py-8 md:py-16">
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

        <section className="mx-auto mt-10 mb-16 max-w-3xl">
          <BlogEmailSubscribeForm />
        </section>

        </main>

        <footer className="w-full border-t border-border mt-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 pb-6 sm:flex-row-reverse sm:py-4">
            <div className="flex flex-wrap justify-center gap-1">
              <a
                href="https://github.com/skanderkaroui"
                className="group inline-block p-2 hover:text-[#6f4cff] hover:rotate-6 sm:p-1"
                title="Skander Karoui on GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="inline-block size-6 scale-125 opacity-90 transition-transform group-hover:scale-110" />
                <span className="sr-only">Skander Karoui on GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/skander-karoui"
                className="group inline-block p-2 hover:text-[#0A66C2] hover:rotate-6 sm:p-1"
                title="Skander Karoui on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="inline-block size-6 scale-125 opacity-90 transition-transform group-hover:scale-110" />
                <span className="sr-only">Skander Karoui on LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/skander.karoui/"
                className="group inline-block p-2 hover:text-[#0866FF] hover:rotate-6 sm:p-1"
                title="Skander Karoui on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="inline-block size-6 scale-125 opacity-90 transition-transform group-hover:scale-110" />
                <span className="sr-only">Skander Karoui on Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/skander_karoui"
                className="group inline-block p-2 hover:text-[#E4405F] hover:rotate-6 sm:p-1"
                title="Skander Karoui on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="inline-block size-6 scale-125 opacity-90 transition-transform group-hover:scale-110" />
                <span className="sr-only">Skander Karoui on Instagram</span>
              </a>
              <a
                href="mailto:skander.karoui@gmail.com"
                className="group inline-block p-2 hover:text-[#6f4cff] hover:rotate-6 sm:p-1"
                title="Send an email to Skander Karoui"
              >
                <Mail className="inline-block size-6 scale-125 opacity-90 transition-transform group-hover:scale-110" />
                <span className="sr-only">Send an email to Skander Karoui</span>
              </a>
            </div>

            <div className="my-2 flex flex-col items-center whitespace-nowrap sm:flex-row">
              <a
                href="mailto:skander.karoui@gmail.com"
                className="hover:text-[#A97CF8] text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                © {new Date().getFullYear()} Skander Karoui
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}
