"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Timeline,
  TimelineItem,
  TimelineItemDate,
  TimelineItemTitle,
  TimelineItemDescription
} from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Silicon Valley Fellowship",
    description: (
      <p>
        Attended the{" "}
        <a
          href="https://siliconvalleyfellowship.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-blue"
        >
          Silicon Valley Fellowship
        </a>{" "}
        and took part in{" "}
        <a
          href="https://treehacks.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-blue"
        >
          TreeHacks
        </a>{" "}
        in San Francisco, wrote a small blog about my learnings here: {" "}
        <Link href="/blog/chapter-sf" className="link-blue">
          Chapter SF
        </Link>
        .
      </p>
    ),
    date: new Date("2026-02-05"),
    variant: "default" as const
  },
  {
    title: "2024 IPOC Challenge",
    description: (
      <p>
        Took part in the{' '}
        <Link
          href="https://www.linkedin.com/posts/skander-karoui_happy-to-share-that-ive-recently-took-part-activity-7247153360540192769-t4BV?utm_source=share&utm_medium=member_desktop"
          className="link-blue"
        >
          2024 IPOC Challenge
        </Link>, where I represented my school in Ghana.
      </p>
    ),
    date: new Date("2024-09-01"),
    variant: "default" as const
  },
  {
    title: "Headstarter AI Projects",
    description: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Developed an AI Flashcard App with my friend{' '}
          <a href="https://www.linkedin.com/in/anasmubashar/" className="text-grey-500 italic hover:underline">
            Anas
          </a>{' '}
          using Next.js and Firebase (Headstarter AI program) [
          <Link href="https://github.com/skanderkaroui/AI-Flashcard-App" className="link-blue">
            Code
          </Link>
          ].
        </li>
        <li>
          Built an AI Customer Assistant with my friend{' '}
          <a href="https://www.linkedin.com/in/anasmubashar/" className="text-grey-500 italic hover:underline">
            Anas
          </a>{' '}
          using Next.js, Gemini API, and RAG (Headstarter AI program) [
          <Link href="https://github.com/skanderkaroui/customer-support-ai" className="link-blue">
            Code
          </Link>
          ].
        </li>
      </ul>
    ),
    date: new Date("2024-08-01"),
    variant: "secondary" as const
  },
  {
    title: "Pantry App Tracker",
    description: (
      <p>
        Worked on a Pantry App Tracker using Next.js and Firebase as part of the
        Headstarter AI program [
        <Link href="https://pantryapp-pi.vercel.app/" className="link-blue">Demo</Link>,
        <Link href="https://github.com/skanderkaroui/pantryapp" className="link-blue">Code</Link>].
      </p>
    ),
    date: new Date("2024-07-01"),
    variant: "outline" as const
  },
  {
    title: "AI Voice Assistant Project",
    description: (
      <>
        <p>
          Started working on <strong>auto</strong>, an AI voice assistant built with
          Faster Whisper, OpenAI, and Google Text-to-Speech.  
          <Link href="https://github.com/skanderkaroui/auto" className="link-blue">
            Code
          </Link>
          .
        </p>
        <p>
          Took part in Climate Change AI&apos;s{" "}
          <a href="https://www.climatechange.ai/events/summer_school2024" className="link-blue">
            virtual summer school
          </a>
          .
        </p>
      </>
    ),
    date: new Date("2024-06-01"),
    variant: "default" as const
  },
  {
    title: "Graduated from ENET'Com",
    description: (
      <p>
        Graduated from ENET'Com with a degree in telecommunications engineering.
      </p>
    ),
    date: new Date("2025-06-14"),
    variant: "default" as const
  },
  {
    title: "Software Engineer @ ReplyPilot",
    description: (
      <p>
        Worked as a Software Engineer at ReplyPilot, reviewing and testing the codebase
        to improve stability and reliability.
      </p>
    ),
    date: new Date("2025-01-22"),
    variant: "secondary" as const
  },
  {
    title: "AI Engineer Intern @ Grais",
    description: (
      <p>
        Started as an AI Engineer Intern at Grais, building conversational AI systems
        with RAG and end-to-end frontend/backend integrations.
      </p>
    ),
    date: new Date("2024-12-01"),
    variant: "outline" as const
  },
  {
    title: "Founding AI Engineer @ Grais",
    description: (
      <p>
        Started as the first engineer in the team and worked on conversational AI
        systems, implementing end-to-end solutions from frontend to backend and cloud deployment.
      </p>
    ),
    date: new Date("2025-06-15"),
    variant: "destructive" as const,
    className: "text-black"
  },
  {
    title: "AI Certifications & Competition",
    description: (
      <>
        <p>Completed 3 Nvidia certifications:</p>
        <p>
          <Link href="https://learn.nvidia.com/certificates?id=Pj1043ItSWKnf_--S-LMPQ" className="text-grey-500 italic hover:underline">
            DL Fundamentals
          </Link>
          {" · "}
          <Link href="https://learn.nvidia.com/certificates?id=ecpfbX4ETgeQhNl1n0PuyA" className="text-grey-500 italic hover:underline">
            Predictive Maintenance with AI
          </Link>
          {" · "}
          <Link href="https://learn.nvidia.com/certificates?id=7LNTaxf0QKGtbsnGZ_-vEQ" className="text-grey-500 italic hover:underline">
            Transformer NLP
          </Link>
        </p>
        <p>
          Also took part in the BirdCLEF Kaggle competition on species identification using EfficientNetV2.
        </p>
      </>
    ),
    date: new Date("2024-06-20"),
    variant: "outline" as const
  },
  {
    title: "IndabaX 2024",
    description: (
      <p>
        Participated in IndabaX 2024 by developing a dental image
        object detection model using Torchvision and ResNet architecture.
      </p>
    ),
    date: new Date("2024-05-01"),
    variant: "default" as const
  },
  {
    title: "Movie Recommendation System",
    description: (
      <p>
        Worked on a movie recommendation system with{' '}
        <a
          href="https://www.linkedin.com/in/oussama-boubaker-18aa15241/"
          className="text-grey-500 italic hover:underline"
        >
          Oussama
        </a>, exploring user-based, item-based, and content-based approaches. [
        <Link
          href="https://github.com/skanderkaroui/collaborative_filtering_movie_recommendation"
          className="link-blue"
        >
          Code
        </Link>
        ].
      </p>
    ),
    date: new Date("2024-03-01"),
    variant: "secondary" as const
  },
  {
    title: "Omdena Kenya Chapter",
    description: (
      <p>
        Completed the Omdena Kenya Chapter project on shoplifting detection,
        deployed using Streamlit, and built with YOLOv8 and PyTorchVideo. [
        <Link
          href="https://github.com/skanderkaroui/omdena_shoplifting_detection"
          className="link-blue"
        >
          Code
        </Link>
        ].
      </p>
    ),
    date: new Date("2023-08-01"),
    variant: "outline" as const
  },
  {
    title: "Elyadata Internship",
    description: (
      <p>
        Interned at Elyadata as a Software Data Engineer, where I built an
        Arabic document generation system for layout parsing using FastAPI and
        deployed it with Docker.
      </p>
    ),
    date: new Date("2023-06-01"),
    variant: "default" as const
  },
  {
    title: "Team Leadership",
    description: (
      <p>
        Selected as a Team Leader for{' '}
        <a className="link" href="https://www.facebook.com/RadioEnetcom/">
                      Orbeats Radio Club ENET'Com
        </a>, where I served from September 2023 to September 2024.
      </p>
    ),
    date: new Date("2023-09-01"),
    variant: "default" as const
  },
  {
    title: "archiveprepa.tn",
    description: (
      <p>
        Worked on{' '}
        <a href="https://archiveprepa.tn" className="link-blue">
          archiveprepa.tn
        </a>{' '}
        alongside my friend{' '}
        <a
          href="https://www.linkedin.com/in/insaf-hamdi-806351251/"
          className="text-grey-500 italic hover:underline"
        >
          Insaf
        </a>{' '}
        to build a website for preparatory students reaching around 200k views per year.
      </p>
    ),
    date: new Date("2022-06-01"),
    variant: "default" as const
  }
];

export default function TimelinePage() {
  const [isListView, setIsListView] = useState(false);

  const timelineItems = useMemo(
    () =>
      [...timelineData].sort((a, b) => a.date.getTime() - b.date.getTime()),
    []
  );

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
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              My Timeline
            </h1>
            <Button
              variant="outline"
              onClick={() => setIsListView(!isListView)}
            >
              {isListView ? "View as timeline" : "View as list"}
            </Button>
          </div>
        </header>

        <main>
          {isListView ? (
            <section className="space-y-8">
        <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">
                  February 2026
                </h2>
      <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Attended the Silicon Valley Fellowship and took part in TreeHacks in
                    San Francisco through{" "}
                    <a
                      href="https://siliconvalleyfellowship.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-blue"
                    >
                      Silicon Valley Fellowship
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://treehacks.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-blue"
                    >
                      TreeHacks
                    </a>
                    , and wrote a small blog about my learnings in{" "}
                    <Link href="/blog/chapter-sf" className="link-blue">
                      Chapter SF
                    </Link>
                    .
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">June 2025</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Graduated from ENET&apos;Com with a degree in telecommunications
                    engineering.
                  </li>
                  <li className="text-primary">
                    Started as the first engineer in Grais&apos; AI team, leading
                    conversational AI projects and implementing end-to-end solutions
                    from frontend to backend.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">January 2025</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Worked as an AI Engineer Intern at Grais, building conversational AI
                    systems with RAG and end-to-end frontend/backend integration.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">December 2024</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Worked as a Software Engineer at Grais, reviewing and testing the
                    codebase to improve reliability.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">
                  September 2024
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Took part in the{" "}
                    <Link
                      href="https://www.linkedin.com/posts/skander-karoui_happy-to-share-that-ive-recently-took-part-activity-7247153360540192769-t4BV?utm_source=share&utm_medium=member_desktop"
                      className="link-blue"
                    >
                      2024 IPOC Challenge
                    </Link>{" "}
                    where I represented my school in Ghana.
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">
                  August 2024
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Developed an AI Flashcard App alongside my friend{" "}
                    <a
                      href="https://www.linkedin.com/in/anasmubashar/"
                      className="text-grey-500 italic hover:underline"
                    >
                      Anas
                    </a>{" "}
                    using Next.js and Firebase (Headstarter AI program) [
                    <Link
                      href="https://github.com/skanderkaroui/AI-Flashcard-App"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                  <li className="text-primary">
                    Built an AI Customer Assistant alongside my friend{" "}
                    <a
                      href="https://www.linkedin.com/in/anasmubashar/"
                      className="text-grey-500 italic hover:underline"
                    >
                      Anas
                    </a>{" "}
                    using Next.js, Gemini API, and RAG (Headstarter AI program) [
                    <Link
                      href="https://github.com/skanderkaroui/customer-support-ai"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">July 2024</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Worked on a Pantry App Tracker using Next.js and Firebase as
                    part of the Headstarter AI program [
                    <Link
                      href="https://pantryapp-pi.vercel.app/"
                      className="link-blue"
                    >
                      Demo
                    </Link>
                    ,
                    <Link
                      href="https://github.com/skanderkaroui/pantryapp"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">June 2024</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Started working on "auto," an AI voice assistant built using
                    Faster Whisper, OpenAI, and Google Text-to-Speech [
                    <Link
                      href="https://github.com/skanderkaroui/auto"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                  <li className="text-primary">
                    Participated in Climate Change AI&apos;s{" "}
                    <a
                      href="https://www.climatechange.ai/events/summer_school2024"
                      className="link-blue"
                    >
                      virtual summer school
                    </a>
                    .
                  </li>
                  <li className="text-primary">
                    Received 3 Nvidia AI certifications:
                    <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                      <li>
                        <Link
                          href="https://learn.nvidia.com/certificates?id=Pj1043ItSWKnf_--S-LMPQ"
                          className="text-grey-500 italic hover:underline"
                        >
                          Fundamentals of Deep Learning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://learn.nvidia.com/certificates?id=ecpfbX4ETgeQhNl1n0PuyA"
                          className="text-grey-500 italic hover:underline"
                        >
                          Applications of AI for Predictive Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://learn.nvidia.com/certificates?id=7LNTaxf0QKGtbsnGZ_-vEQ"
                          className="text-grey-500 italic hover:underline"
                        >
                          Building Transformer-Based NLP Applications
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text-primary">
                    Participated in the BirdCLEF 2024 Kaggle competition where I worked on
                    bird species identification using EfficientNetV2 [
                    <a
                      href="https://www.kaggle.com/code/skanderkaroui/birdclef24-skander-s-attempt-train/notebook"
                      className="link-blue"
                    >
                      Notebook
                    </a>
                    ].
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-primary pl-4 pb-1">
                <h2 className="text-xl font-semibold mb-2">2023-2024</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-primary">
                    Participated in IndabaX 2024 by developing a dental image
                    object detection model utilizing Torchvision and ResNet
                    architecture.
                  </li>
                  <li>
                    Worked on a movie recommendation system alongside my friend
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/oussama-boubaker-18aa15241/"
                      className="text-grey-500 italic hover:underline"
                    >
                      Oussama
                    </a>{" "}, exploring user-based, item-based, and
                    content-based collaboration [
                    <Link
                      href="https://github.com/skanderkaroui/collaborative_filtering_movie_recommendation"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                  <li className="text-primary">
                    I was selected as a Team Leader for{" "}
                    <a
                      className="link"
                      href="https://www.facebook.com/RadioEnetcom/"
                    >
                      Orbeats Radio Club ENET'Com
                    </a>{" "}
                    where I served from June 2023 to June 2024.
                  </li>
                  <li className="text-primary">
                    Completed the Omdena Kenya Chapter project on shoplifting
                    detection, deployed using a Streamlit app, and built using YOLOv8 and
                    the PyTorchVideo library [
                    <Link
                      href="https://github.com/skanderkaroui/omdena_shoplifting_detection"
                      className="link-blue"
                    >
                      Code
                    </Link>
                    ].
                  </li>
                  <li className="text-primary">
                    Interned at Elyadata as a Software Data Engineer, where I
                    developed an Arabic document generation system for layout
                    parsing using FastAPI and deployed it with Docker.
                  </li>
                  <li>
                    Worked on{" "}
                    <a
                      href="https://archiveprepa.tn"
                      className="link-blue"
                    >
                      archiveprepa.tn
                    </a>{" "}
                    alongside my friend{" "}
                    <a
                      href="https://www.linkedin.com/in/insaf-hamdi-806351251/"
                      className="text-grey-500 italic hover:underline"
                    >
                      Insaf
                    </a>
                    , a website for preparatory students generating 200k views per year.
                  </li>
                </ul>
              </div>
            </section>
          ) : (
            <div className="w-full overflow-x-auto rounded-md border border-border/40 p-4 bg-background">
              <div className="min-w-[1000px]">
                <Timeline orientation="horizontal" className="w-full">
                  {timelineItems.map((item, idx) => (
                    <TimelineItem
                      key={`${item.title}-${idx}`}
                      variant={item.variant}
                      className={item.className}
                    >
                      <TimelineItemDate>{item.date}</TimelineItemDate>
                      <TimelineItemTitle>{item.title}</TimelineItemTitle>
                      <TimelineItemDescription>{item.description}</TimelineItemDescription>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
