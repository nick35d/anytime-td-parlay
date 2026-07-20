import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anytime TD Parlay",
  description: "TD Parlay Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0b0f] text-white min-h-screen">
        <header className="bg-[#0f1014] border-b border-[#1f2933]">
          <nav className="max-w-6xl mx-auto flex items-center justify-center gap-10 py-5 text-lg font-semibold tracking-wide">
            <a href="/" className="hover:text-yellow-300 transition">Home</a>
            <a href="/draw" className="hover:text-yellow-300 transition">Draw</a>
            <a href="/history" className="hover:text-yellow-300 transition">History</a>
            <a href="/leaderboard" className="hover:text-yellow-300 transition">Leaderboard</a>
            <a href="/players" className="hover:text-yellow-300 transition">Player Pool</a>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
