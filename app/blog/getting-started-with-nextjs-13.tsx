import Link from "next/link"
import { ChevronLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  id: "1",
  titleUrl: "getting-started-with-nextjs-13",
  title: "Getting Started with Next.js 13",
  date: "October 15, 2024",
  readTime: "5 min read",
}

export default function GettingStartedWithNextJs13() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
        <Link href="/blog" passHref>
          <Button variant="ghost" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        
        <article className="prose dark:prose-invert lg:prose-lg xl:prose-xl max-w-none">
          <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
          <div className="flex items-center text-muted-foreground mb-8">
            <Calendar className="mr-2 h-4 w-4" />
            <span className="mr-4">{metadata.date}</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>{metadata.readTime}</span>
          </div>
          
          <p className="text-lg mb-6">Next.js 13 introduces several exciting features that enhance the developer experience and application performance. In this post, we'll explore how to get started with Next.js 13 and leverage its new capabilities.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. The New App Directory</h2>
          <p className="mb-4">Next.js 13 introduces a new <code className="bg-muted px-1 py-0.5 rounded">app</code> directory structure that supports layouts, nested routing, and more. Here's how you can start using it:</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Server Components</h2>
          <p className="mb-4">Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client. They're the default in the new app directory:</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">
{`// This is a Server Component
export default function ServerComponent() {
  return <h1>Hello from the server!</h1>
}`}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Improved Data Fetching</h2>
          <p className="mb-4">Next.js 13 simplifies data fetching with the new <code className="bg-muted px-1 py-0.5 rounded">fetch</code> API that supports caching and revalidation out of the box:</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
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