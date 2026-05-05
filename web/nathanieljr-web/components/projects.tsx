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
  { title: "AI-Powered Cinematic Portfolio & RAG Engine (This Website)", description: "Architected a high-fidelity portfolio featuring an embedded Retrieval-Augmented Generation (RAG) chatbot. Engineered an advanced retrieval strategy utilizing query decomposition and multi-query routing via LangChain to handle complex user interactions. Orchestrated the entire deployment pipeline using Docker and GitHub Actions for a robust, containerized delivery on AWS infrastructure.", techStack: ["LangChain", "RAG", "ChromaDB", "FastAPI", "Next.js", "GSAP", "AWS", "Docker", "GitHub Actions"], link: "https://github.com/NathanielJR-git/nathanieljr-portfolio-web", image: "/projects/nathanieljr-portfolio-web.png", aspectRatio: "aspect-[4/5]" },
  { title: "Automated Stock Tearsheet Generator with Batch Pipeline", description: "Architected an end-to-end financial Data Lakehouse implementing a Medallion architecture on Amazon S3. Engineered a robust ETL pipeline using Apache Airflow and PySpark for large-scale batch processing, integrated with an LLM engine to extract quantitative sentiment from unstructured market news. Designed a decoupled, serverless presentation layer utilizing AWS Athena, AWS Glue and FastAPI to serve interactive tearsheets and technical charts via plotly.", techStack: ["Airflow", "Spark", "AWS (S3, Athena, Glue)", "Parquet", "FastAPI", "Streamlit", "Docker"], link: "https://github.com/NathanielJR-git/stock-quantamental-tearsheet", image: "/projects/automated-stock-tearsheet-generator.png", aspectRatio: "aspect-square" },
  { title: "Pothole Semantic Segmentation with Statistical EDA and EoMT", description: "Architected a high-precision semantic segmentation pipeline to automate the detection of road wear and potholes from drone imagery. The methodology involved rigorous statistical EDA to handle class imbalances before training. Deployed an Evaluation of Model Trust (EoMT) framework alongside PyTorch to ensure the reliability of predictions. Won 1st Place at the National Informatics Festival Unpad for this research.", techStack: ["PyTorch", "EoMT", "U-Net", "SegFormer", "Hugging Face", "OpenCV", "Semantic Segmentation", "Computer Vision"], link: "#", image: "/projects/pothole-semantic-segmentation-eomt.png", aspectRatio: "aspect-square" },
  { title: "Cultural Image Classification with DINOv3 and Explainable AI (XAI)", description: "Architected a state-of-the-art cultural image classifier using the DINOv3-Huge vision transformer with a custom classification head for fine-grained Indonesian cultural heritage recognition. Conducted extensive transfer learning from self-supervised pretraining, integrating feature extraction, hyperparameter optimization, and explainable AI techniques to interpret model decisions on complex visual patterns. Delivered robust performance through meticulous fine-tuning and comprehensive evaluation, securing 5th place nationally in the Logika UI Data Science Competition.", techStack: ["DINOv3", "ResNet", "EfficientNet", "Grad-CAM", "Attention Rollout", "PyTorch", "Hugging Face", ], link: "#", image: "/projects/cultural-image-classification-dinov3-xai.png", aspectRatio: "aspect-[16/9]" },
  { title: "Mealdrop", description: "Engineered scalable backend microservices and responsive mobile interfaces as a Software Engineer for the Mealdrop platform. Designed and optimized complex relational database schemas in PostgreSQL to handle high-volume, concurrent transaction data efficiently. Streamlined the server infrastructure on AWS, ensuring high availability and seamless data synchronization with the Flutter client.", techStack: ["System Architecture", "AWS", "PostgreSQL", "Flutter"], link: "#", image: "/projects/mealdrop.png", aspectRatio: "aspect-square" },
  { title: "E-commerce with Real Time Auction", description: "Architected a high-concurrency e-commerce and real-time auction engine leveraging ACID-compliant database locking mechanisms to ensure deterministic bid resolution and prevent race conditions during high-frequency trading. Engineered bidirectional, event-driven WebSocket channels to instantly propagate market state mutations, bid histories, and precise countdown synchronizations across distributed client architectures. Designed a robust cursor-based data ingestion pipeline and an asynchronous push-notification cryptosystem using VAPID authentication, scaling efficiently to resolve concurrent connections while maintaining strict transactional data integrity.", techStack: ["React.js", "Node.js", "HTML", "CSS", "PHP", "WebSocket", "Docker", "PostgreSQL"], link: "#", image: "/projects/ecommerce-auction.png", aspectRatio: "aspect-[3/4]" },
  { title: "Binomial Option Pricing Model (BOPM) with Dynamic Programming (DP)", description: "Engineered a computational finance engine to calculate the theoretical fair value of derivatives using the Binomial Option Pricing Model. Designed a highly optimized, lattice-based algorithm leveraging Dynamic Programming (DP) to efficiently compute early exercise boundaries and terminal payoffs. This approach drastically reduced the time complexity for deep, multi-period market pricing simulations.", techStack: ["Options Pricing", "Dynamic Programming", "Finance"], link: "https://github.com/0xNathaniel/binomial-option-pricing-model", image: "/projects/binomial-option-pricing-model-dp.png", aspectRatio: "aspect-[4/5]" },
  { title: "Mini x86 Operating System", description: "Architected a custom 32-bit x86 operating system from the ground up to establish fundamental low-level bare-metal execution. Engineered intricate memory management systems utilizing explicit hardware paging and a Global Descriptor Table for secure memory isolation. Designed a preemptive process scheduler and integrated an ext2-compatible file system to orchestrate concurrent multitasking and resilient data persistence.", techStack: ["Operating System Concepts", "C", "Assembly"], link: "#", image: "/projects/mini-x86-operating-system.gif", aspectRatio: "aspect-[3/4]" },
  { title: "Sobel Detection Parallel Programming", description: "Engineered a high-performance image processing engine implementing the Sobel operator using CUDA for SIMT and GPU acceleration. This project demonstrates extreme proficiency in high-performance computing (HPC) and low-level hardware optimization for latency-critical tasks.", techStack: ["CUDA", "C++"], link: "#", image: "/projects/sobel-parallel-programming.jpg", aspectRatio: "aspect-video" },
];

const MOBILE_PROJECTS: Project[] = DESKTOP_PROJECTS.slice(0, 5);

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