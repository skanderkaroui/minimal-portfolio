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
                  Took part in the <Link href="https://www.linkedin.com/posts/skander-karoui_happy-to-share-that-ive-recently-took-part-activity-7247153360540192769-t4BV?utm_source=share&utm_medium=member_desktop" className="text-grey-500 italic hover:underline">2024 IPOC Challenge</Link> where I got to represent my school in Ghana.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Developed an <Link href="https://github.com/skanderkaroui/AI-Flashcard-App" className="text-grey-500 italic hover:underline">AI Flashcard App</Link> with Next.js and Firebase as part of Headstarter AI program.</li>
                <li className="text-muted-foreground">Built an <Link href="https://github.com/skanderkaroui/customer-support-ai" className="text-grey-500 italic hover:underline">AI Customer Assistant</Link> using Next.js, Gemini API, and RAG as part of Headstarter AI program.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">July 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Worked on a <Link href="https://pantryapp-pi.vercel.app/" className="text-grey-500 italic hover:underline">Pantry App Tracker</Link> using Next.js, React, and Firebase as part of Headstarter AI program.</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">June 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Started working on <Link href="https://github.com/skanderkaroui/auto" className="text-grey-500 italic hover:underline">auto</Link> an AI voice assistant built using Faster Whisper, OpenAI and Google Text to Speech.</li>
                <li className="text-muted-foreground">Participated in Climate Change AI’s virtual program.</li>
                <li className="text-muted-foreground">Received 3 Nvidia AI certifications:
                  <ul className="list-disc list-inside space-y-1 mt-1 pl-5">
                    <li><Link href="https://learn.nvidia.com/certificates?id=Pj1043ItSWKnf_--S-LMPQ" className="text-grey-500 italic hover:underline">Fundamentals of Deep Learning</Link></li>
                    <li><Link href="https://learn.nvidia.com/certificates?id=ecpfbX4ETgeQhNl1n0PuyA" className="text-grey-500 italic hover:underline">Applications of AI for Predictive Maintenance</Link></li>
                    <li><Link href="https://learn.nvidia.com/certificates?id=7LNTaxf0QKGtbsnGZ_-vEQ" className="text-grey-500 italic hover:underline">Building Transformer-Based NLP Applications</Link></li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-primary pl-4 pb-1">
              <h2 className="text-xl font-semibold mb-2">May 2024</h2>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-muted-foreground">Worked on a <Link href="https://github.com/skanderkaroui/auto" className="text-grey-500 italic hover:underline">Movie Recommendation System</Link> alongside my friend <Link href="https://www.linkedin.com/in/oussama-boubaker-18aa15241?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADwg-7oBnMSRCuguLrNrJdWBZONxtvBwKU4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BMy%2Fg2UCgSP6B4sZj3dGGPA%3D%3D" className="text-red-500 italic hover:underline">Bouba</Link> where we explored User-Based, Item-Based and Content-Based Collaborative Filtering.</li>
                <li className="text-muted-foreground">Participated in Climate Change AI’s virtual program.</li>
                <li className="text-muted-foreground">Received 3 Nvidia AI certifications:
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
                <li className="text-muted-foreground">I was selected as a Team Leader for Orbeats Radio Club ENET'Com where I served from June 2023 to June 2024.</li>
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
              </ul>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}
