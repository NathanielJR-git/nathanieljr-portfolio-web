"use client"

interface HeroProps {
  onVideoClick?: () => void
}

export function Hero({ onVideoClick }: HeroProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 pt-48 md:pt-32 pb-16">
      {/* Name */}
      <h1 className="text-center text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
        Nathaniel Jonathan Rusli
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center text-lg font-medium tracking-tight text-white sm:text-xl">
        Aspiring AI/ML Engineer
      </p>

      {/* Cinematic Video Container */}
      <div className="relative mt-24 md:mt-16 w-full max-w-4xl">

        {/* Video container */}
        <div 
          className="relative w-full max-w-4xl aspect-video mx-auto cursor-pointer"
          onClick={onVideoClick}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen scale-[1.35] sm:scale-[1.15] md:scale-100"
          >
            <source src="/memojis/nate-hero-memoji.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Bottom Section Label */}
      <div className="mt-24 md:mt-8 flex flex-col items-center justify-center">
        <h2 className="text-center text-xs font-large uppercase tracking-[0.3em] text-white mb-8">
          Click Me to Chat with NateBot!
        </h2>

        {/* Scroll Down Indicator */}
        <div className="flex flex-col items-center gap-2">
          {/* Animated Text */}
          <span 
            className="text-[10px] uppercase tracking-[0.3em] font-semibold bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_60%,rgba(255,255,255,0)_100%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer"
          >
            Scroll Down
          </span>
          
        </div>
      </div>
    </section>
  )
}
