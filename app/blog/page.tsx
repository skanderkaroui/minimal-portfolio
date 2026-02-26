import Link from "next/link";
import blogPosts from "@/app/data/blogpost.json";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, Clock } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  titleUrl: string;
  description: string;
  date: string;
  readTime: string;
  done: "Yes" | "No";
  image?: string;
};

const publishedPosts = (blogPosts as BlogPost[]).filter((post) => post.done === "Yes");

export default function BlogPage() {
  const posts = publishedPosts;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 font-bookerly">
        <header className="mb-8">
          <Link href="/" passHref>
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Blog</h1>
          <p className="text-lg text-muted-foreground">Thoughts, ideas, and insights about things I'm interested in</p>
        </header>

        <div className="px-2 py-6">
          <div className="border-b border-border" />
        </div>

        <main>
          <section className="divide-y divide-border">
            {posts.map((post) => (
              <article key={post.id} className="py-6 first:pt-0">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                  <div className="min-w-0 flex-1">
                    <Link href={`/blog/${post.titleUrl}`} className="group block">
                      <h2 className="text-2xl md:text-3xl leading-tight font-semibold group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-base md:text-lg text-muted-foreground">
                        {post.description}
                      </p>
                    </Link>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.image ? (
                    <div className="w-full md:w-60 flex-shrink-0">
                      <img
                        src={post.image}
                        alt=""
                        className="w-full h-auto rounded-md object-cover"
                      />
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
