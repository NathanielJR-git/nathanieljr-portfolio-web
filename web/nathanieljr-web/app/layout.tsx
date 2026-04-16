import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NathanielJR Portfolio Web",
  description: "Nahtaniel Jonathan Rusli's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
