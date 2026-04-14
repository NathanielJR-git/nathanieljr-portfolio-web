"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { NateBotOverlay } from "@/components/natebot-overlay"

export default function Page() {
  const [isNateBotOpen, setIsNateBotOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-zinc-950">
      
      <Navbar onChatbotClick={() => setIsNateBotOpen(true)} />
      
      <Hero />

      {/* Bottom Section Label */}
      <section className="pb-24">
        <h2 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
          Click Me!
        </h2>
      </section>

      {/* NateBot Overlay */}
      <NateBotOverlay
        isOpen={isNateBotOpen}
        onClose={() => setIsNateBotOpen(false)}
      />
      
    </main>
  )
}