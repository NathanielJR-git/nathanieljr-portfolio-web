"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
  aspectRatio: string
}

const DESKTOP_PROJECTS: Project[] = [
  { title: "Custom x86 Operating System Kernel", description: "Architected a custom 32-bit x86 operating system from the ground up to establish fundamental low-level bare-metal execution. Engineered intricate memory management systems utilizing explicit hardware paging and a Global Descriptor Table for secure memory isolation. Designed a preemptive process scheduler and integrated an ext2-compatible file system to orchestrate concurrent multitasking and resilient data persistence.", techStack: ["Memory Paging", "Preemptive Scheduling", "Ext2 Filesystem", "Hardware Interrupts"], link: "#", image: "/projects/mini-x86-operating-system.gif", aspectRatio: "aspect-[3/4]" },
  { title: "Parallel Sobel Edge Detection", description: "Engineered a high-performance image processing engine implementing the Sobel operator across multiple parallel computing architectures. Optimized performance using OpenMP for multi-core threading, MPI for distributed memory systems, and AVX/CUDA for SIMD and GPU acceleration. This project demonstrates extreme proficiency in high-performance computing (HPC) and low-level hardware optimization for latency-critical tasks.", techStack: ["CUDA & AVX", "MPI", "OpenMP", "Parallel Computing"], link: "https://github.com/0xNathaniel/sobel-filter-parallel", image: "/projects/sobel-parallel-programming.jpg", aspectRatio: "aspect-video" },
  { title: "Raft Consensus Protocol Engine", description: "Developed a distributed consensus engine based on the Raft protocol to ensure fault tolerance and data consistency across a cluster of nodes. Engineered core components including leader election, log replication, and safety mechanisms to handle network partitions and node failures. This implementation provides a robust foundation for building resilient, strongly consistent distributed systems from scratch.", techStack: ["Distributed Systems", "Consensus Algorithms", "Network Programming"], link: "https://github.com/0xNathaniel/raft-protocol", image: "/projects/raft-from-scratch.gif", aspectRatio: "aspect-square" },
  { title: "Binomial Option Pricing Model (BOPM)", description: "Engineered a computational finance engine to calculate the theoretical fair value of derivatives using the Binomial Option Pricing Model. Designed a highly optimized, lattice-based algorithm leveraging Dynamic Programming (DP) to efficiently compute early exercise boundaries and terminal payoffs. This approach drastically reduced the time complexity for deep, multi-period market pricing simulations.", techStack: ["Quant Finance", "Dynamic Programming", "Computational Math"], link: "https://github.com/0xNathaniel/binomial-option-pricing-model", image: "/projects/binomial-option-pricing-model-dp.png", aspectRatio: "aspect-[4/5]" },
  { title: "Artificial Neural Network from Scratch", description: "Developed a fully functional Feed-Forward Neural Network (FFNN) entirely from scratch, intentionally bypassing high-level deep learning frameworks. Engineered the core mathematical components, including forward propagation, backpropagation, and a custom auto-differentiation engine. This project demonstrates a profound, ground-up understanding of the linear algebra and calculus underlying modern AI architectures.", techStack: ["Auto-Differentiation", "Linear Algebra", "Backpropagation", "NumPy"], link: "https://github.com/0xNathaniel/ffnn-from-scratch", image: "/projects/cultural-image-classification-dinov3-xai.png", aspectRatio: "aspect-[16/9]" },
  { title: "Reliable TCP over UDP", description: "Architected a custom reliable data transfer protocol built on top of UDP to simulate TCP-like behavior in lossy network environments. Engineered sophisticated flow control and error recovery mechanisms, including cumulative acknowledgments, sliding window protocols, and Go-Back-N/Selective Repeat logic. Successfully implemented congestion control algorithms to optimize throughput while maintaining network stability and data integrity.", techStack: ["Network Protocols", "TCP/UDP", "Flow Control", "Socket Programming"], link: "https://github.com/0xNathaniel/tcp-over-udp", image: "/projects/tcp-over-udp.gif", aspectRatio: "aspect-[3/4]" },
  { title: "Pothole Semantic Segmentation with EoMT", description: "Architected a high-precision semantic segmentation pipeline to automate the detection of road wear and potholes from drone imagery. The methodology involved rigorous statistical EDA to handle class imbalances before training. Deployed an Evaluation of Model Trust (EoMT) framework alongside PyTorch to ensure the reliability of predictions. Won 1st Place at the National Informatics Festival Unpad for this research.", techStack: ["PyTorch", "EoMT Framework", "Semantic Segmentation", "Computer Vision"], link: "https://github.com/0xNathaniel/pothole-segmentation", image: "/projects/pothole-semantic-segmentation-eomt.png", aspectRatio: "aspect-square" },
  { title: "IDX30 Equity Portfolio PCA Analysis", description: "Conducted rigorous quantitative research on the IDX30 index to construct an optimal equity portfolio using Principal Component Analysis (PCA). By performing dimensionality reduction on historical asset returns, I isolated the core market drivers and systemic risk factors affecting Indonesian blue-chip equities. The resulting statistical framework provided a mathematically sound basis for advanced asset allocation.", techStack: ["PCA", "Quantitative Finance", "Dimensionality Reduction", "Statistical Modeling"], link: "https://github.com/0xNathaniel/idx-pca-analysis", image: "/projects/idx30-pca-analysis.png", aspectRatio: "aspect-video" },
  { title: "AI-Powered Cinematic Portfolio & RAG Engine", description: "Architected a high-fidelity portfolio featuring an embedded Retrieval-Augmented Generation (RAG) chatbot. Engineered an advanced retrieval strategy utilizing query decomposition and multi-query routing via LangChain to handle complex user interactions. Orchestrated the entire deployment pipeline using Docker and GitHub Actions for a robust, containerized delivery on AWS infrastructure.", techStack: ["LangChain", "RAG Architecture", "AWS", "Docker"], link: "https://github.com/0xNathaniel/portfolio-web", image: "/projects/nathanieljr-portfolio-web.png", aspectRatio: "aspect-[4/5]" }
];

const MOBILE_PROJECTS: Project[] = [
  DESKTOP_PROJECTS[0], // OS Kernel
  DESKTOP_PROJECTS[1], // Sobel Parallel
  DESKTOP_PROJECTS[2], // Raft
  DESKTOP_PROJECTS[3], // BOPM
  DESKTOP_PROJECTS[8]  // AI Portfolio/RAG
];

// Helper to chunk the desktop array into 3 columns
const desktopColumn1 = DESKTOP_PROJECTS.filter((_, i) => i % 3 === 0);
const desktopColumn2 = DESKTOP_PROJECTS.filter((_, i) => i % 3 === 1);
const desktopColumn3 = DESKTOP_PROJECTS.filter((_, i) => i % 3 === 2);

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-zinc-900 w-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-10">
          {/* Top Right: Visit Link */}
          {project.link !== "#" && (
            <div className="flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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

      columns.forEach((col) => {
        // Use fromTo to strictly lock initial state and dynamically calculate the ending state
        gsap.fromTo(col, 
          { y: 0 }, 
          {
            y: () => {
              // Calculate heights dynamically so it's immune to image loading/hydration timing issues
              const heights = columns.map(c => c.offsetHeight)
              const maxHeight = Math.max(...heights)
              const offset = Math.max(0, maxHeight - col.offsetHeight)
              return offset
            },
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",      // Start exactly when section hits top of viewport
              end: "bottom bottom",  // Finish animating when section bottom hits bottom
              scrub: 1,              // Smooth scrubbing
              invalidateOnRefresh: true // Re-measure on resize or layout shifts
            },
          }
        )
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

      {/* --- MOBILE LAYOUT (1 Column, 5 Projects) --- */}
      <div className="flex flex-col gap-10 md:hidden">
        {MOBILE_PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      
      {/* --- DESKTOP LAYOUT (3 Columns, 9 Projects, Asymmetric Scroll) --- */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-10 items-start">
        {/* Column 1 */}
        <div ref={el => { columnsRef.current[0] = el }} className="flex flex-col gap-10" data-column="1">
          {desktopColumn1.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        {/* Column 2 */}
        <div ref={el => { columnsRef.current[1] = el }} className="flex flex-col gap-10" data-column="2">
          {desktopColumn2.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        
        {/* Column 3 */}
        <div ref={el => { columnsRef.current[2] = el }} className="flex flex-col gap-10" data-column="3">
          {desktopColumn3.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}