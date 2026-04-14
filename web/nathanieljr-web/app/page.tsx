"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Footer } from "@/components/footer"
import { NateBot } from "@/components/natebot"

export default function Page() {
  const [isNateBotOpen, setIsNateBotOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-zinc-950">
      
      <div className="relative z-50">
        <Navbar onChatbotClick={() => setIsNateBotOpen(true)} />
      </div>
      
      {/* Hero Section */}
      <Hero onVideoClick={() => setIsNateBotOpen(true)} />

      {/* Bottom Section Label */}
      <section className="pb-24">
        <h2 className="text-center text-xs font-large uppercase tracking-[0.3em] text-white">
          Click to Chat with My Clone!
        </h2>
      </section>
      
      {/* Intro Section */}
      <Intro />

      {/* Projects Section */}
      <Projects />

      {/* Achievements Section */}
      <Achievements />

      {/* Footer Section */}
      <Footer />

      {/* NateBot Overlay */}
      <NateBot
        isOpen={isNateBotOpen}
        onClose={() => setIsNateBotOpen(false)}
      />
      
    </main>
  )
}