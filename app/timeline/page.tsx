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
              <h2 className="text-xl font-semibold mb-2">August 2024</h2>
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
                  Participated in Climate Change AI’s{" "}
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
        </main>
      </div>
    </div>
  );
}
