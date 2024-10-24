import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import blogPosts from '@/app/data/blogpost.json';
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
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

        <main>
          <section className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {post.done === "Yes" ? (
                      <Link href={`/blog/${post.titleUrl}`} className="hover:underline">
                        {post.title}
                      </Link>
                    ) : (
                      post.title
                    )}
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date} • {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  {post.done === "Yes" ? (
                    <Link href={`/blog/${post.id}`} passHref>
                      <Button variant="outline">Read More</Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled>Coming Soon</Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
