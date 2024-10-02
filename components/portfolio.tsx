'use client'

import { Github, Linkedin, Mail, ArrowRight, ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PortfolioComponent() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="mb-16 text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Skander Karoui</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">AI & Software Engineering Student</p>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#about" className="hover:underline">About</Link>  
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate full stack developer with 5 years of experience in building web applications. 
              I specialize in React, Node.js, and cloud technologies, creating efficient and scalable solutions 
              for complex problems. When I'm not coding, you can find me exploring new hiking trails or experimenting 
              with new recipes in the kitchen.
            </p>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  <div className="flex-[0_0_100%] min-w-0 pl-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Task Manager Pro</CardTitle>
                        <CardDescription>Efficient task management application</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          A sleek web application for efficient task management, built with React and Node.js.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link href="#" className="text-primary hover:underline inline-flex items-center">
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="flex-[0_0_100%] min-w-0 pl-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Artisan Market</CardTitle>
                        <CardDescription>E-commerce platform for artisans</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          An e-commerce platform connecting artisans with customers, powered by Next.js and Stripe.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link href="#" className="text-primary hover:underline inline-flex items-center">
                          View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute top-1/2 left-0 transform -translate-y-1/2"
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous project</span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute top-1/2 right-0 transform -translate-y-1/2"
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next project</span>
              </Button>
            </div>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <Button asChild>
              <Link href="mailto:skander.karoui@gmail.com">
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2024 Skander Karoui. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}