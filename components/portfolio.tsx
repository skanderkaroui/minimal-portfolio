"use client";

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SkanderImg from "@/app/data/images/fun-sf-pic.jpg";

const LeetCodeStats = () => {
  const [solvedCount, setSolvedCount] = useState("around 150");

  useEffect(() => {
    const controller = new AbortController();

    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/skirrrrrra",
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error(`Failed request: ${response.status}`);
        }
        const data = await response.json();

        if (controller.signal.aborted) return;

        if (data.status === "success") {
          setSolvedCount(data.totalSolved.toString());
        } else {
          console.error("Failed to fetch LeetCode stats:", data.message);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchLeetCodeStats();

    return () => {
      if (!controller.signal.aborted) {
        controller.abort();
      }
    };
  }, []);

  return <span>{solvedCount}</span>;
};

export function PortfolioComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 my-4">
        <header className="mb-16 text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Image
            src={SkanderImg}
            alt="Skander's Image"
            width={400}
            height={300}
            priority
            className="rounded-md mt-24 mb-8 mx-auto object-cover"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Skander Karoui
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Telecommunication Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Working on <span className="font-bold text-primary">AI</span>{" "}
            &{" "}
            <span className="font-bold text-primary">Software Engineering</span>
          </p>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="/timeline" className="hover:underline">
              Timeline
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:skander.karoui@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/skanderkaroui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/skander-karoui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about">
            <div className="text-center">
              <p className="text-primary">
                I am a Telecommunication engineer just recently graduated from ENET'Com. Primarily
                interested in AI and startups, and actively working
                on new exciting projects everyday.
              </p>
            </div>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-semibold mb-6">
              What I'm working on right now
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Working on {" "}
                <a
                  href="https://www.ormelo.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-blue"
                >
                   Ormelo
                  </a>
                  , an AI agent that scours the internet and finds you, your ideal customer.
              </li>
              <li>
                Founding AI Engineer at{" "}
                <a
                  href="https://grais.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-blue"
                >
                  Grais
                </a>
                , we are building a conversational AI agent designed for social media,
                think of it as Cursor but for Whatsapp
              </li>
              <li>
                Learning about data structures and algorithms while solving
                LeetCode problems, currently solved{" "}
                <a href="https://leetcode.com/skirrrrrra" className="link-blue">
                  <LeetCodeStats /> problems
                </a>
              </li>
            </ul>
          </section>

          <section id="past-work">
            <h2 className="text-2xl font-semibold mb-6">
              What I've done so far
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Built an AI voice assistant called "auto" designed to help make better
                decisions in meetings
              </li>
              <li>
                Served as a Team Leader for my university's{" "}
                <a
                  className="link"
                  href="https://www.facebook.com/RadioEnetcom/"
                >
                  radio club
                </a>{" "}
                last year, which was composed of 50 members. We organized events
                and created digital content
              </li>
              <li>
                Took part in the OST competition, during which I worked with{" "}
                <a href="http://www.instaware.tn/" className="link-blue">
                  Instaware
                </a>{" "}
                as a Business Developer. We attended over 100 hours of
                entrepreneurship and startup training and won second prize in
                the competition
              </li>
              <li>
                Built more than 5 AI and software projects{" "}
                <a
                  href="/timeline"
                  className="text-blue-500 transition-colors duration-400 ease-in-out hover:text-yellow-500 hover:underline"
                >
                  (more here)
                </a>
                .
              </li>
              <li>
                Completed 90 hours of Data Science training and received a "Data
                Science with Python" certification from Datacamp
              </li>
              <li>
                Worked on{" "}
                <a href="https://archiveprepa.tn" className="link-blue">
                  archiveprepa.tn
                </a>{" "}
                alongside my friend{" "}
                <a
                  href="https://www.linkedin.com/in/insaf-hamdi-806351251/"
                  className="text-grey-500 italic hover:underline"
                >
                  Insaf
                </a>
                , a website for preparatory students generating 200k views per
                year
              </li>
            </ul>
          </section>

          <section id="fun-stuff">
            <h2 className="text-2xl font-semibold mb-6">
              What I Do in My Free Time
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                I love reading books. Here are some{" "}
                <a
                  href="https://www.goodreads.com/review/list/59496587-skander-karoui?shelf=read"
                  className="link-blue"
                >
                  books
                </a>{" "}
                that I've read
              </li>
              <li>
                I'm passionate about sports and have been lifting weights on and
                off for over 4 years now
              </li>
              <li>
                I also do random stuff, check out my{" "}
                <a
                  href="https://www.instagram.com/skander_karoui"
                  className="link-blue"
                >
                  Instagram
                </a>{" "}
                if you're interested
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-primaryforeground mb-4">
              I&apos;m always open to new opportunities and collaborations, so
              feel free to reach out to me.
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4 mb-6">
              <Button asChild>
                <Link href="mailto:skander.karoui@gmail.com">
                  Contact me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-primaryforeground mb-4">
              If you're interested in checking out my other socials, you can
              find them here:
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/skander.karoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/skander_karoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2024 Skander Karoui. No rights reserved 😝.</p>
        </footer>
      </div>
    </div>
  );
}
