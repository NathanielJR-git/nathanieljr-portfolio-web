"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Mock data for an AI/Quant Engineer portfolio
const column1Projects = [
  {
    title: "Neural Trading Engine",
    description: "Deep reinforcement learning system for algorithmic trading with real-time market adaptation.",
    image: "/placeholder.svg",
    techStack: ["Python", "PyTorch", "FastAPI", "Redis"],
    link: true,
  },
  {
    title: "Sentiment Analysis Pipeline",
    description: "NLP pipeline processing financial news and social media for market sentiment indicators.",
    image: "/placeholder.svg",
    techStack: ["Python", "Transformers", "Kafka"],
    link: true,
  },
  {
    title: "Portfolio Optimizer",
    description: "Mean-variance optimization with custom risk constraints and factor exposure analysis.",
    image: "/placeholder.svg",
    techStack: ["Python", "NumPy", "CVXPY"],
    link: false,
  },
]

const column2Projects = [
  {
    title: "Real-time Data Lakehouse",
    description: "Scalable data infrastructure handling 10M+ events/day for quantitative research.",
    image: "/placeholder.svg",
    techStack: ["Spark", "Delta Lake", "Airflow"],
    link: true,
  },
  {
    title: "Options Pricing Engine",
    description: "Monte Carlo and Black-Scholes implementations with GPU acceleration.",
    image: "/placeholder.svg",
    techStack: ["Python", "CUDA", "NumPy"],
    link: false,
  },
]

const column3Projects = [
  {
    title: "LLM Research Assistant",
    description: "RAG-powered assistant for querying and synthesizing academic finance papers.",
    image: "/placeholder.svg",
    techStack: ["LangChain", "Pinecone", "GPT-4"],
    link: true,
  },
  {
    title: "Market Microstructure Sim",
    description: "Agent-based simulation modeling order book dynamics and market maker behavior.",
    image: "/placeholder.svg",
    techStack: ["Python", "Mesa", "Plotly"],
    link: false,
  },
  {
    title: "Crypto Arbitrage Bot",
    description: "Cross-exchange arbitrage detection with sub-second execution latency.",
    image: "/placeholder.svg",
    techStack: ["Rust", "WebSocket", "PostgreSQL"],
    link: true,
  },
  {
    title: "Risk Dashboard",
    description: "Real-time VaR, stress testing, and exposure monitoring for multi-asset portfolios.",
    image: "/placeholder.svg",
    techStack: ["Next.js", "D3.js", "Python"],
    link: true,
  },
]

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  link: boolean
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-zinc-900 aspect-[4/5]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-10">
          {/* Top Right: Visit Link */}
          {project.link && (
            <div className="flex justify-end">
              <a
                href="#"
                className="text-white text-sm font-medium hover:underline underline-offset-4 transition-colors"
              >
                Visit ↗
              </a>
            </div>
          )}
          
          {/* Bottom Left: Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-zinc-200 font-medium text-lg">{project.title}</h3>
        <p className="text-zinc-500 text-sm">{project.description}</p>
      </div>
    </div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLElement>(null)
  
  // Create an array of refs for the 3 columns
  const columnsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    // Only run this asymmetric logic on desktop screens (md: 768px+)
    // because on mobile, columns are stacked vertically.
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      const columns = columnsRef.current.filter(Boolean) as HTMLDivElement[]
      if (columns.length === 0) return

      // Measure heights of all columns
      const heights = columns.map(col => col.offsetHeight)
      const maxHeight = Math.max(...heights)

      columns.forEach((col, index) => {
        const height = heights[index]
        
        // If a column is shorter than the longest one
        if (height < maxHeight) {
          // Push it down to align the bottoms visually at the start
          const yOffset = maxHeight - height
          gsap.set(col, { y: yOffset })

          // Animate it back to y: 0 during scroll so they all finish identically
          gsap.to(col, {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",      // Start animating when the section hits top of viewport
              end: "bottom bottom",  // Finish animating when the section bottom hits bottom of viewport
              scrub: true,
            },
          })
        }
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="projects-section" className="py-24 px-6 md:px-12 relative">
      {/* Section Title */}
      <h2 className="text-zinc-500 text-sm uppercase tracking-widest mb-16">
        Projects
      </h2>
      
      {/* 3-Column Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
        {/* Column 1 */}
        <div ref={el => { columnsRef.current[0] = el }} className="flex flex-col gap-10" data-column="1">
          {column1Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        {/* Column 2 */}
        <div ref={el => { columnsRef.current[1] = el }} className="flex flex-col gap-10" data-column="2">
          {column2Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        {/* Column 3 */}
        <div ref={el => { columnsRef.current[2] = el }} className="flex flex-col gap-10" data-column="3">
          {column3Projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}