"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MarketingPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Marketing Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            A collection of my marketing projects and achievements
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Media Content Creation */}
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow col-span-full">
            <h3 className="text-2xl font-semibold mb-4">Social Media Content Creation</h3>
            <p className="text-muted-foreground mb-4">
              Created and managed social media content resulting in over 85k reach and 1k+ follower growth within a year.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Personal Content</h4>
                <div className="max-w-[340px] w-full aspect-[9/16] mx-auto relative bg-secondary rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.instagram.com/reel/DAwD0-WunRu/embed"
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">University Club Content</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Reels */}
                  <div className="space-y-8">
                    <h5 className="font-medium mb-3">Reels</h5>
                    <div className="max-w-[340px] w-full aspect-[9/16] mx-auto relative bg-secondary rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.instagram.com/p/C358VPeI8Um/embed"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="max-w-[340px] w-full aspect-[9/16] mx-auto relative bg-secondary rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.instagram.com/p/C3vVsZaoM_G/embed"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Square Posts */}
                  <div className="space-y-4">
                    <h5 className="font-medium mb-3">Posts</h5>
                    <div className="max-w-[340px] w-full aspect-square mx-auto relative bg-secondary rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.instagram.com/p/C0r-AriIs_-/embed"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="max-w-[340px] w-full aspect-square mx-auto relative bg-secondary rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.instagram.com/p/CxgnjMGoDMJ/embed"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="max-w-[340px] w-full aspect-square mx-auto relative bg-secondary rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.instagram.com/p/CxqtWLuocPu/embed"
                        className="w-full h-full"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Facebook Content */}
                <div className="mt-8 space-y-6">
                  <h5 className="font-medium mb-3">Facebook Content</h5>
                  <div className="max-w-[500px] w-full aspect-video mx-auto relative bg-secondary rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.facebook.com/plugins/post.php?href=https://fb.watch/xhWaJoAgxo/"
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Achievements</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Generated over 85,000 reach across platforms</li>
                  <li>Grew follower base by 1,000+ within one year</li>
                  <li>Created and edited engaging video content for both personal brand and university club</li>
                  <li>Maintained consistent posting schedule across multiple platforms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Marketing Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Social Media Marketing",
                "Content Strategy",
                "Community Management",
                "Digital Marketing",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary p-3 rounded-md text-center text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="mb-6">
            Interested in working together? Let's discuss your marketing needs.
          </p>
          <Button asChild>
            <Link href="mailto:skander.karoui@gmail.com">
              Get in Touch
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}