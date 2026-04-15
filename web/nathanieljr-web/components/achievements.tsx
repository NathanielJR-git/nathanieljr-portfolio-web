"use client"

import { useState } from "react"
import Image from "next/image"

const achievements = [
  { id: 1, title: "Most Outstanding Student of Global Consumer Intelligence (GCI) UTokyo", image: "/achievements/most-outstanding-student-gci.png" },
  { id: 2, title: "2nd Winner of ARA Data Science Competition", image: "/achievements/ara-dsc.png" },
  { id: 3, title: "1st Winner of IFEST Data Analytics Competition", image: "/achievements/ifest-dac.png" },
  { id: 4, title: "5th Place Finalist of Logika UI Data Science Competition", image: "/achievements/logika-ui-dsc.png" },
  { id: 5, title: "Top 5 Finalist of INFEST Equity Research Competition", image: "/achievements/infest-erc.png" },
  { id: 6, title: "1st Winner of Talent Growth x MarkPlus Business Case Competition", image: "/achievements/talentgrowth-markplus-nbcc.png" },
  { id: 7, title: "1st Winner of StudentxCEOs Business Case Competition", image: "/achievements/studentxceos-bcc.png" },
  { id: 8, title: "3rd Winner of Investing Analysis Competition", image: "/achievements/inacomp-erc.png" },
  { id: 9, title: "Bakti BCA Scholarship Awardee", image: "/achievements/bakti-bca-scholarship.jpg" },
]

type Achievement = typeof achievements[0]

export function Achievements() {
  const [activeAchievement, setActiveAchievement] = useState<Achievement | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    // Inherit bg-[#101010] from the main page
    <section id="achievements-section" className="py-24 px-6 md:px-12 relative">
      {/* Section Title */}
      <h2 className="text-zinc-500 text-sm uppercase tracking-widest mb-16">
        Achievements
      </h2>

      {/* Single List Layout (No Grid) and Mobile Blur Adjustment */}
      <div className={`transition-all duration-500 ease-out ${isMobileOpen ? "blur-[2px] opacity-40" : ""}`}>
        <div className="group/list">
          <ul className="flex flex-col gap-10 md:gap-10" onMouseLeave={() => !isMobileOpen && setActiveAchievement(null)}>
            {achievements.map((achievement, index) => (
              <li
                key={achievement.id}
                className="group/item relative cursor-pointer md:cursor-default"
                data-image={achievement.image}
                onMouseEnter={() => setActiveAchievement(achievement)}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActiveAchievement(achievement)
                    setIsMobileOpen(true)
                  }
                }}
              >
                <div className="flex items-baseline justify-between gap-4 transition-all duration-500 ease-out group-hover/item:text-white group-hover/list:text-zinc-700 group-hover/list:blur-[1.5px] group-hover/item:!text-white group-hover/item:!blur-none group-hover/item:scale-[1.02] origin-left">
                  {/* Achievement Text */}
                  <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal italic tracking-tight text-white transition-all duration-500 ease-out">
                    {achievement.title}
                  </span>
                  
                  {/* Index Number */}
                  <span className="text-sm md:text-base font-mono text-zinc-700 shrink-0 transition-colors duration-500">
                    {String(achievements.length - index).padStart(2, "0")}
                  </span>
                </div>

                {/* Subtle separator line */}
                <div className="absolute -bottom-3 md:-bottom-4 left-0 right-0 h-px bg-zinc-900 group-hover/item:bg-zinc-800 transition-colors duration-500" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Hover: Dead-Center Floating Certificate */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transition-all duration-500 ease-out hidden md:block ${
          activeAchievement && !isMobileOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="relative aspect-[4/3] w-[600px] xl:w-[700px] rounded-xl overflow-hidden bg-[#101010] shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-zinc-800">
          {activeAchievement ? (
            <Image
              src={activeAchievement.image}
              alt={activeAchievement.title}
              fill
              className="object-contain"
            />
          ) : null}
        </div>
      </div>

      {/* Mobile: Fullscreen Overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center p-6 z-50 bg-black/80 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setIsMobileOpen(false)
          setActiveAchievement(null)
        }}
        data-mobile-overlay
      >
        <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {activeAchievement ? (
              <Image
                src={activeAchievement.image}
                alt={activeAchievement.title}
                fill
                className="object-contain"
                data-mobile-preview-image
              />
            ) : null}
          </div>
          
          {/* Close hint */}
          <p className="text-center text-zinc-500 text-sm mt-4">Tap anywhere to close</p>
        </div>
      </div>
    </section>
  )
}