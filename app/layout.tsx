import "./globals.css";
import type { Metadata } from "next";

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
        <main className="min-h-screen flex flex-col items-center px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
