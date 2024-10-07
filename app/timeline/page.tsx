import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelinePage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Timeline</h1>
        </header>

        <main>
          <section className="space-y-8">
            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">September 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">
                  Took part in the <Link href="https://www.linkedin.com/posts/skander-karoui_happy-to-share-that-ive-recently-took-part-activity-7247153360540192769-t4BV?utm_source=share&utm_medium=member_desktop" className="text-grey-500 italic hover:underline">IPOC Challenge</Link> where I got to represent my school.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">
                  Worked on a <Link href="https://github.com/skanderkaroui/pantryapp" className="text-grey-500 italic hover:underline">Pantry Tracking</Link> app as part of Headstarter AI Fellowship
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">July 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">
                  Led the migration of our main project to Next.js 14.
                </li>
                <li className="text-muted-foreground">
                  Implemented new accessibility features across all company websites.
                </li>
              </ul>
            </div>


            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">June 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">
                  Received 3 AI Certifications from Nvidia:
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                    <li>
                      <Link href="https://learn.nvidia.com/certificates?id=Pj1043ItSWKnf_--S-LMPQ" className="text-grey-500 italic hover:underline">Fundamentals of Deep Learning</Link>
                    </li>
                    <li>
                      <Link href="https://learn.nvidia.com/certificates?id=ecpfbX4ETgeQhNl1n0PuyA" className="text-grey-500 italic hover:underline">Applications of AI for Predictive Maintenance</Link>
                    </li>
                    <li>
                      <Link href="https://learn.nvidia.com/certificates?id=7LNTaxf0QKGtbsnGZ_-vEQ" className="text-grey-500 italic hover:underline">Building Transformer-Based Natural Language Processing Applications</Link>
                    </li>
                  </ul>
                </li>
                <li className="text-muted-foreground">
                  Participated in Climate Change AI Summer 2024
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
