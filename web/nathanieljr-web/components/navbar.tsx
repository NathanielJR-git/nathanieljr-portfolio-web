"use client"

import { useEffect, useState } from "react"
import { Crosshair } from "lucide-react"

interface NavbarProps {
  onChatbotClick?: () => void
}

export function Navbar({ onChatbotClick }: NavbarProps) {
  const [time, setTime] = useState<string>("")

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

  const navLinks = [
    { label: "Chatbot", href: "#chatbot" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
  ]

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-6 rounded-full border border-zinc-700/50 bg-zinc-800/80 px-6 py-3 shadow-xl backdrop-blur-md">
        {/* Left: Crosshair and Logo */}
        <div className="flex items-center gap-3">
          <Crosshair className="h-4 w-4 text-zinc-400" />
          <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-pink-500 bg-clip-text text-lg font-bold text-transparent">
            N
          </span>
        </div>

        {/* Center: Nav Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.label === "Chatbot" && onChatbotClick ? (
                <button
                  onClick={onChatbotClick}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle Placeholder & Time */}
        <div className="flex items-center gap-4">
          <div className="h-5 w-10 rounded-full border border-zinc-600 bg-zinc-700/50">
            <div className="ml-auto h-5 w-5 rounded-full border border-zinc-500 bg-zinc-400" />
          </div>
          <span className="min-w-[4.5rem] text-right text-sm font-medium text-zinc-400">
            {time}
          </span>
        </div>
      </nav>
    </header>
  )
}
