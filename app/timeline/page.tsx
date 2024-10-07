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
                <li className="text-muted-foreground">Completed AI Software Engineering Fellowship at Headstarter.</li>
                <li className="text-muted-foreground">Built AI Customer Assistant using Next.js, Gemini API, and RAG.</li>
                <li className="text-muted-foreground">Developed AI Flashcard App with Next.js and Firebase.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Worked on the Pantry App Tracker using Next.js, React, and Firebase.</li>
                <li className="text-muted-foreground">Deployed Pantry App Tracker on Vercel.</li>
                <li className="text-muted-foreground">Led Orbeats Club Radio ENET'com with 30+ active members.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">July 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Interned at Belive Technology as an AI intern where I built an AI voice assistant.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">June 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Participated in Climate Change AI’s virtual program.</li>
                <li className="text-muted-foreground">Received 3 NVIDIA certifications:
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                    <li><Link href="https://learn.nvidia.com/certificates?id=Pj1043ItSWKnf_--S-LMPQ" className="text-grey-500 italic hover:underline">Fundamentals of Deep Learning</Link></li>
                    <li><Link href="https://learn.nvidia.com/certificates?id=ecpfbX4ETgeQhNl1n0PuyA" className="text-grey-500 italic hover:underline">Applications of AI for Predictive Maintenance</Link></li>
                    <li><Link href="https://learn.nvidia.com/certificates?id=7LNTaxf0QKGtbsnGZ_-vEQ" className="text-grey-500 italic hover:underline">Building Transformer-Based NLP Applications</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">2023</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Completed Omdena Kenya Chapter project on shoplifting detection.</li>
                <li className="text-muted-foreground">Developed a Streamlit app using yolov8 and PytorchVideo Library.</li>
                <li className="text-muted-foreground">Interned at ELYADATA as a Data Engineer, using Docker and FastAPI.</li>
                <li className="text-muted-foreground">Developed an Arabic document generation system for layout parsing.</li>
                <li className="text-muted-foreground">Achieved certifications:
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                    <li>Azure Data Fundamentals</li>
                    <li>TensorFlow for AI/ML by DeepLearning AI</li>
                    <li>Cisco CCNA Industrial</li>
                    <li>Google Foundations of Project Management</li>
                    <li>Data Scientist with Python Certification</li>
                  </ul>
                </li>
                <li className="text-muted-foreground">Led projects and gained experience in React Native, Agile methodologies, and project management at ENET'Com Junior Enterprise.</li>
                <li className="text-muted-foreground">Designed web and mobile prototypes using Figma.</li>
              </ul>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}
