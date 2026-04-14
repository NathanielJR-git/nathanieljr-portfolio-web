"use client"

import { useEffect, useState } from "react"
// Menghilangkan import lucide-react (Crosshair) karena kita akan buat SVG kustom

interface NavbarProps {
  onChatbotClick?: () => void
}

export function Navbar({ onChatbotClick }: NavbarProps) {
  const [time, setTime] = useState<string>("")
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  // System time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Auto-shrink on scroll past Hero
  useEffect(() => {
    const handleScroll = () => {
      // Threshold is roughly the height of the screen (Hero area)
      const threshold = window.innerHeight * 0.8
      
      if (window.scrollY > threshold) {
        setIsExpanded(false)
      } else {
        setIsExpanded(true)
      }
    }

    // Passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    let targetPosition = 0;

    if (targetId !== "#top") {
      const targetElement = document.getElementById(targetId.substring(1));
      if (!targetElement) return;
      targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    }

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200; // 1200 ms request by user
    let start: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animation);
  };

  const navLinks = [
    { label: "NateBot", href: "#natebot" },
    { label: "Projects", href: "#projects-section" },
    { label: "Achievements", href: "#achievements-section" },
  ]

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center rounded-full border border-white/20 bg-[#101010]/80 p-3 shadow-xl backdrop-blur-md cursor-pointer transition-all duration-[1200ms] ease-in-out group hover:bg-[#101010]/90 hover:border-white/30 ${isExpanded ? 'gap-6 px-6' : 'gap-4 px-4'}`}
        aria-label="Toggle Navigation"
      >
        {/* Left: Custom Click Cursor Logo */}
        <div 
          onClick={(e) => {
            e.stopPropagation()
            handleSmoothScroll(e, "#top")
          }}
          className={`flex items-center gap-3 transition-transform duration-[1200ms] ease-in-out flex-shrink-0 cursor-pointer ${isExpanded ? 'rotate-0' : '-rotate-[20deg] scale-110'}`}
        >
          <svg
            className="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* macOS Cursor/Pointer style */}
            <path d="M4 4l7.07 17 2.51-7.39 7.39-2.51L4 4z" fill="white" />
            <path d="M13 13l6 6" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </svg>
        </div>

        {/* Center: Nav Links & Socials (Collapsible) */}
        <div
          className={`flex items-center overflow-hidden transition-all duration-[1200ms] ease-in-out ${
            isExpanded ? "max-w-[800px] opacity-100 gap-6 px-2" : "max-w-0 opacity-0 gap-0 px-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent nav toggle when clicking links inside
        >
          <ul className="flex items-center gap-6 whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.label === "NateBot" && onChatbotClick ? (
                  <button
                    onClick={onChatbotClick}
                    className="text-sm font-medium text-white transition-colors hover:text-zinc-300"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm font-medium text-white transition-colors hover:text-zinc-300"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Social Links inside collapsible center part */}
          <div className="flex items-center gap-3 border-x border-white/20 px-4 whitespace-nowrap ml-2 hidden sm:flex">
            <a
              href="https://www.linkedin.com/in/nathanieljr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-zinc-300"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/omgitsnathaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-zinc-300"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Time (Hidden on Mobile, Visible on Desktop) */}
        <div className={`hidden md:flex items-center transition-opacity duration-[1200ms] ease-in-out flex-shrink-0 ${isExpanded ? "opacity-100" : "opacity-80"}`}>
          <span className="min-w-[4.5rem] text-right text-sm font-medium text-white pointer-events-none">
            {time}
          </span>
        </div>
      </nav>
    </header>
  )
}
