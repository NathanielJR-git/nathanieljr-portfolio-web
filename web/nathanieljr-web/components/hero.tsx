"use client"

interface HeroProps {
  onVideoClick?: () => void
}

export function Hero({ onVideoClick }: HeroProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-16">
      {/* Name */}
      <h1 className="text-center text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
        Nathaniel Jonathan Rusli
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center text-lg font-medium tracking-tight text-white sm:text-xl">
        Aspiring AI/ML Engineer
      </p>

      {/* Cinematic Video Container */}
      <div className="relative mt-16 w-full max-w-4xl">

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
            // mix-blend-screen adalah kunci untuk menghilangkan background hitam!
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
          >
            <source src="/memojis/nate-hero-memoji.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
