import { Calendar, ChevronLeft, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

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
};

const publishedPosts = (blogPosts as BlogPost[]).filter(
  (post) => post.done === "Yes"
);

export async function generateStaticParams() {
  return publishedPosts.map((post) => ({
    slug: post.titleUrl,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = publishedPosts.find((item) => item.titleUrl === params.slug);
  if (!post) return notFound();

  const paragraphs = (post.content ?? "")
    .split("\n\n")
    .filter(Boolean);

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
            <img
              src={post.image}
              alt=""
              className="mb-8 h-auto w-full rounded-lg object-cover"
            />
          ) : null}

          <p className="text-lg">{post.description}</p>

          {paragraphs.length > 0 ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg">
              This article is currently being prepared. Check back soon for the full
              write-up and key takeaways.
            </p>
          )}
        </article>
      </div>
    </div>
  );
}
