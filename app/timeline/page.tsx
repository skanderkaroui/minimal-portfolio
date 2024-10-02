import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TimelinePage() {
  const timelineEvents = [
    {
      date: "October 2024",
      events: [
        "Launched a new AI-powered chatbot for customer service",
        "Attended TechCon 2024 in San Francisco",
        "Presented research on AI ethics at local university",
        "Contributed to open-source NLP library",
      ],
    },
    {
      date: "September 2024",
      events: [
        "Completed advanced course in GraphQL",
        "Started mentoring junior developers in the team",
      ],
    },
    {
      date: "August 2024",
      events: [
        "Led the migration of our main project to Next.js 14",
        "Implemented new accessibility features across all company websites",
      ],
    },
    {
      date: "July 2024",
      events: [
        "Presented at the annual company tech showcase",
        "Contributed to open-source project React Router",
      ],
    },
    {
      date: "June 2024",
      events: [
        "Completed AWS Solutions Architect certification",
        "Launched v2.0 of Task Manager Pro with enhanced features",
      ],
    },
    {
      date: "May 2024",
      events: [
        "Implemented CI/CD pipeline using GitHub Actions",
        "Started working on a new e-commerce platform for artisans",
      ],
    },
  ];

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
            {timelineEvents.map((event, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">{event.date}</h2>
                <ul className="list-disc list-inside space-y-2">
                  {event.events.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
