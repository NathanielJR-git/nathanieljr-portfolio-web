"use client"

import { useState } from "react"
import { Send, X } from "lucide-react"

interface NateBotOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function NateBotOverlay({ isOpen, onClose }: NateBotOverlayProps) {
  const [message, setMessage] = useState("")

  // Placeholder: Implement GSAP face cross-fade and state handling here

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Chat Container */}
      <div className="relative z-10 flex h-[80vh] w-full max-w-2xl flex-col rounded-3xl border border-zinc-800 bg-zinc-900/95 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div className="flex items-center gap-4">
            {/* Memoji placeholder */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">NateBot</h2>
              <p className="text-sm text-zinc-500">AI Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat History Placeholder */}
        <div className="flex flex-1 flex-col items-center justify-center p-6">
          {/* Placeholder for Memoji faces ('happy', 'thinking') */}
          <div className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <span className="text-6xl">👋</span>
          </div>
          <p className="text-center text-zinc-500">
            Start a conversation with NateBot
          </p>
        </div>

        {/* Input */}
        <div className="border-t border-zinc-800 p-4">
          <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-800/50 px-4 py-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask NateBot anything..."
              className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-white transition-transform hover:scale-105">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
