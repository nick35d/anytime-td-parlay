import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anytime TD Parlay Draw",
  description: "Randomized TD parlay player generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <nav className="flex items-center justify-center gap-8 py-4 bg-gray-900 text-white text-lg">
          <a href="/" className="hover:text-yellow-300 transition">Home</a>
          <a href="/draw" className="hover:text-yellow-300 transition">Draw</a>
          <a href="/history" className="hover:text-yellow-300 transition">History</a>
          <a href="/leaderboard" className="hover:text-yellow-300 transition">Leaderboard</a>
          <a href="/players" className="hover:text-yellow-300 transition">Player Pool</a>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
