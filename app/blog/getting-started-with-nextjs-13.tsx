import Link from "next/link"
import { ChevronLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/ui/scroll-progress"

export const metadata = {
  id: "1",
  titleUrl: "getting-started-with-nextjs-13",
  title: "Getting Started with Next.js 13",
  date: "October 15, 2024",
  readTime: "5 min read",
  description:
    "Next.js 13 introduces several exciting features that enhance the developer experience and application performance.",
}

export default function GettingStartedWithNextJs13() {
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

        <article className="blog-article-shell font-bookerly">
          <header className="border-b border-border pb-8">
            <h1 className="article-title">{metadata.title}</h1>
            <p className="post-subtitle">{metadata.description}</p>
            <div className="meta-row">
              <Calendar className="h-4 w-4" />
              <span>{metadata.date}</span>
              <span className="meta-divider" />
              <Clock className="h-4 w-4" />
              <span>{metadata.readTime}</span>
            </div>
          </div>

          <p className="mb-6">
            Next.js 13 introduces several exciting features that enhance the developer
            experience and application performance. In this post, we'll explore how to
            get started with Next.js 13 and leverage its new capabilities.
          </p>

          <h2>1. The New App Directory</h2>
          <p className="mb-4">Next.js 13 introduces a new <code>app</code> directory structure that supports layouts, nested routing, and more. Here's how you can start using it:</p>
          <pre>
            <code className="text-sm">
{`// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// app/page.js
export default function Home() {
  return <h1>Welcome to Next.js 13!</h1>
`}
            </code>
          </pre>

          <h2>2. Server Components</h2>
          <p className="mb-4">Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client. They're the default in the new app directory:</p>
          <pre>
            <code className="text-sm">
{`// This is a Server Component
export default function ServerComponent() {
  return <h1>Hello from the server!</h1>
}`}
            </code>
          </pre>

          <h2>3. Improved Data Fetching</h2>
          <p className="mb-4">Next.js 13 simplifies data fetching with the new <code>fetch</code> API that supports caching and revalidation out of the box:</p>
          <pre>
            <code className="text-sm">
{`async function getData() {
  const res = await fetch('https://api.example.com/data', { next: { revalidate: 60 } })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Use data */}</main>
}`}
            </code>
          </pre>

          <p className="mt-6">These are just a few of the exciting new features in Next.js 13. As you explore further, you'll discover how these improvements can help you build faster, more efficient web applications.</p>
        </article>
      </div>
    </div>
  )
}
