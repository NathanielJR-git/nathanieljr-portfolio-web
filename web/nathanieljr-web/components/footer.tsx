"use client"

export function Footer() {
  const columns = [
    {
      header: "PAGES",
      links: [
        { label: "Home", href: "#" },
        { label: "Achievements", href: "#achievements" },
        { label: "NateBot", href: "#" },
        { label: "Resume", href: "#" },
      ],
    },
    {
      header: "PROJECTS (AI & ML)",
      links: [
        { label: "Custom RAG Engine", href: "#" },
        { label: "Pothole Segmentation", href: "#" },
        { label: "Insurance Claim Predictor", href: "#" },
      ],
    },
    {
      header: "PROJECTS (QUANT)",
      links: [
        { label: "Stat-Arb Trading Bot", href: "#" },
        { label: "Equity Research Platform", href: "#" },
        { label: "Portfolio Risk Optimizer", href: "#" },
      ],
    },
    {
      header: "LET'S CONNECT!",
      links: [
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Email", href: "mailto:hello@example.com" },
        { label: "CV", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-transparent py-24 px-6 border-t border-white/10 mt-20">
      {/* Top Section: Greeting */}
      <div className="text-center mb-16">
        <p className="text-xl md:text-2xl font-medium tracking-tight text-white">
          {"Thanks for visiting, feel free to check out my socials for more! 👋🏻 "}
        </p>
      </div>

      {/* Bottom Section: Directory Grid */}
      <nav className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 max-w-5xl mx-auto">
        {columns.map((column) => (
          <div key={column.header}>
            <h3 className="text-xs font-medium tracking-[0.2em] text-zinc-600 mb-6">
              {column.header}
            </h3>
            <ul className="flex flex-col gap-4">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Copyright */}
      <div className="mt-20 text-center">
        <p className="text-xs text-zinc-600">
          {"© 2025 Nathaniel Jonathan Rusli. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}