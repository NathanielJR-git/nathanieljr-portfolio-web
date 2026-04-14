"use client"

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 pt-32 pb-16">
      {/* Name */}
      <h1 className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        Nathaniel Jonathan Rusli
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center text-lg text-zinc-500 sm:text-xl">
        Aspiring AI Engineer and Quant
      </p>

      {/* Cinematic Video Container */}
      <div className="relative mt-16 w-full max-w-4xl">

        {/* Video container */}
        <div className="relative w-full max-w-4xl aspect-video mx-auto">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            // mix-blend-screen adalah kunci untuk menghilangkan background hitam!
            className="absolute inset-0 w-full h-full object-contain mix-blend-screen"
          >
            <source src="/nate-hero-memoji.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
