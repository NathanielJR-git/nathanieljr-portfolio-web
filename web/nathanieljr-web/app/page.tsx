"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { NateBotOverlay } from "@/components/natebot-overlay"

export default function Page() {
  const [isNateBotOpen, setIsNateBotOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-zinc-950">
      
      {/* Wrapper z-50 memastikan Navbar selalu di atas lapisan Hero & Intro saat di-scroll */}
      <div className="relative z-50">
        <Navbar onChatbotClick={() => setIsNateBotOpen(true)} />
      </div>
      
      {/* Hero Section */}
      <Hero />

      {/* Bottom Section Label */}
      <section className="pb-24">
        <h2 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
          Click Me!
        </h2>
      </section>
      
      {/* Intro Section */}
      <Intro />

      {/* NateBot Overlay */}
      <NateBotOverlay
        isOpen={isNateBotOpen}
        onClose={() => setIsNateBotOpen(false)}
      />
      
    </main>
  )
}