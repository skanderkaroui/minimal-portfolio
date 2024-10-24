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
import SkanderImg from "@/app/data/images/ghana_photo_hozirontal.jpg";

const LeetCodeStats = () => {
  const [solvedCount, setSolvedCount] = useState("around 150");

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcodeapi-v1.vercel.app/skirrrrrra"
        );
        const data = await response.json();
        // Define the type for the response data
        type SubmissionStats = {
          difficulty: string;
          count: number;
        };

        type LeetCodeData = {
          skirrrrrra: {
            submitStatsGlobal: {
              acSubmissionNum: SubmissionStats[];
            };
          };
        };

        const totalSolved =
          (
            data as LeetCodeData
          ).skirrrrrra.submitStatsGlobal.acSubmissionNum.find(
            (item: SubmissionStats) => item.difficulty === "All"
          )?.count || 0; // Use optional chaining and default to 0 if not found
        setSolvedCount(totalSolved.toString()); // Convert number to string
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return <span>{solvedCount}</span>;
};

export function PortfolioComponent() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set the default theme to 'dark'
    if (theme === 'system') {
      setTheme('dark');
    }
  }, [theme, setTheme]);

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
            alt={"Skander's Image"}
            width={400}
            height={300}
            style={{
              objectFit: "cover",
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "30px",
            }}
            className="rounded-md mt-24 mb-8 mx-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Skander Karoui
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Telecommunication Engineering Student
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            passionate about <span className="font-bold text-primary">AI</span>{" "}
            &{" "}
            <span className="font-bold text-primary">Software Engineering</span>
          </p>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            {/*<Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link> */}
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
            {/* <h2 className="text-2xl font-semibold mb-4">About Me</h2> */}
            <div className="text-center">
              <p className="text-primary">
                I am a final-year engineering student from Tunisia pursuing a
                degree in Telecommunication engineering. I am mostly interested
                in AI and entrepreneurship and would love to contribute to any
                project that can spark my interest.
              </p>
            </div>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-semibold mb-6">
              What I'm working on right now:
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>an AI voice assistant to join and help in meetings</li>
              <li>
                <a
                  href="https://www.skander.xyz"
                  className="text-blue-500 transition-colors duration-400 ease-in-out hover:text-yellow-500 hover:underline"
                >
                  this
                </a>{" "}
                website
              </li>
              <li>
                solving Leetcode problems, currently solved <LeetCodeStats />{" "}
                problem.
              </li>{" "}
            </ul>
          </section>

          <section id="past-work">
            <h2 className="text-2xl font-semibold mb-6">What I've done:</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Served as a Team Leader for my university's{" "}
                <a
                  className="link"
                  href="https://www.facebook.com/RadioEnetcom/"
                >
                  radio club
                </a>
                , where we worked on events and digital content
              </li>
              <li>Took part in the OST competition where I</li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-primaryforeground mb-4">
              I&apos;m always open to new opportunities and collaborations so
              feel free to reach out to me via email here.
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4 mb-6">
              <Button asChild>
                <Link href="mailto:skander.karoui@gmail.com">
                  contact me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-primary foreground mb-4">
              If you're interested in checking my other socials they're here
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
                  href="https://www.linkedin.com/in/skander-karoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/in/skander_karoui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
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
