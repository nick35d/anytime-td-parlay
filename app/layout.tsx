import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Anytime TD Parlay Draw',
  description: 'Weekly random TD parlay draws with friends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <header className="border-b border-slate-700 p-4 flex justify-between items-center bg-slate-900">
          <h1 className="text-xl font-bold">Anytime TD Parlay Draw</h1>
          <nav className="flex gap-4 text-sm">
            <a href="/" className="hover:underline">Home</a>
            <a href="/draw" className="hover:underline">Draw</a>
            <a href="/history" className="hover:underline">History</a>
            <a href="/leaderboard" className="hover:underline">Leaderboard</a>
            <a href="/players" className="hover:underline">Player Pool</a>
          </nav>
        </header>
        <main className="p-4 max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
