"use client"

import { useState, useRef, useEffect } from "react"
import { Send, X } from "lucide-react"
import Image from "next/image"

interface NateBotProps {
  isOpen: boolean
  onClose: () => void
}

type Message = {
  role: "user" | "bot"
  content: string
}

export function NateBot({ isOpen, onClose }: NateBotProps) {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hey there! I'm NateBot, Nathaniel's digital twin. Feel free to ask anything about me!"
    }
  ])
  
  const bottomRef = useRef<HTMLDivElement>(null)

  // Scroll downwards when messages change or loading state toggles
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    
    // Add user message to state
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.content }),
      })
      
      const data = await response.json()
      
      const botMessage: Message = { 
        role: "bot", 
        content: data.response || "Sorry, I couldn't process that right now." 
      }
      
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev, 
        { role: "bot", content: "Oops, something went wrong on my head. Please ask me again later!" }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:items-end md:justify-end md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Chat Container */}
      <div className="relative z-10 flex h-[600px] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/80 p-4 backdrop-blur">
          <div className="flex items-center gap-3">
            {/* Bot Avatar */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white p-1">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/memojis/nate-memoji-happy.jpg"
                  alt="NateBot"
                  fill
                  className="object-contain scale-105"
                />
              </div>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">NateBot</h2>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-zinc-500">Online Now</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 custom-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "bot" && (
                <div className="mr-2 h-8 w-8 flex-shrink-0 rounded-full bg-white p-1 relative">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={
                        msg.content.toLowerCase().startsWith("sorry") || msg.content.toLowerCase().startsWith("oops")
                          ? "/memojis/nate-memoji-dizzy.jpg"
                          : "/memojis/nate-memoji-happy.jpg"
                      }
                      alt="NateBot"
                      fill
                      className="object-contain scale-105"
                    />
                  </div>
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2 break-words ${
                  msg.role === "user"
                    ? "rounded-2xl rounded-tr-none bg-white text-black"
                    : "rounded-2xl rounded-tl-none bg-zinc-900 text-zinc-200"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}

          {/* Thinking State */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="mr-2 h-8 w-8 flex-shrink-0 rounded-full bg-white p-1 relative">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/memojis/nate-memoji-thinking.jpg"
                    alt="NateBot thinking"
                    fill
                    className="object-contain scale-105"
                  />
                </div>
              </div>
              <div className="rounded-2xl rounded-tl-none bg-zinc-900 px-4 py-3">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500 [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-500" />
                </div>
              </div>
            </div>
          )}
          
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-zinc-800 bg-zinc-950 p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              placeholder="Ask NateBot anything..."
              className="w-full rounded-full border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:border-zinc-700 focus:outline-none disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-zinc-200 disabled:opacity-50 disabled:bg-zinc-700 disabled:text-zinc-400"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
