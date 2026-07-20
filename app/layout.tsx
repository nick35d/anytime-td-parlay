import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hat Pull",
  description: "Hat Pull – random TD draw with clean reveal animation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
        <header className="w-full border-b border-gray-700 mb-8">
          <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
            <h1 className="text-2xl font-bold tracking-tight">Hat Pull</h1>

            <div className="flex gap-6 text-lg">
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
              <Link href="/draw" className="hover:text-gray-300 transition">
                Draw
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen flex flex-col items-center px-4 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
