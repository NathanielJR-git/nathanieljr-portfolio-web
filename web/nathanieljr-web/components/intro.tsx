"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Intro() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const texts = gsap.utils.toArray('.intro-text')

      // One timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",     
          end: "bottom bottom", 
          scrub: 1,             
        },
      })

      // Animation for each sentence
      texts.forEach((text, i) => {
        // Light text up
        tl.to(text as HTMLElement, { 
          color: "rgba(255, 255, 255, 1)", 
          duration: 1,
          ease: "power1.inOut"
        })
        
        // If not last line, decrease opacity
        if (i !== texts.length - 1) {
          tl.to(text as HTMLElement, { 
            color: "rgba(255, 255, 255, 0.3)", 
            duration: 0.8,
            ease: "power1.inOut"
          }, "+=0.5") 
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-4xl px-6 text-center">
          <p className="intro-text text-3xl md:text-6xl font-medium tracking-tight text-white/20 mb-4 block">
            {"Hey, I'm Nathaniel! 👋🏻 I'm heading into my final year of Computer Science at ITB."}
          </p>
          <p className="intro-text text-3xl md:text-6xl font-medium tracking-tight text-white/20 mb-4 block">
            {"I'm a massive nerd when it comes to AI, Data, and Finance—and I've snagged a few national wins in data science and equity research along the way!"}
          </p>
          <p className="intro-text text-3xl md:text-6xl font-medium tracking-tight text-white/20 mb-4 block">
            {"Keep scrolling to check out some of the coolest things I've built."}
          </p>
        </div>
      </div>
    </section>
  )
}