"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) return;
    localStorage.setItem("userName", name.trim());
    router.push("/draw");
  };

  return (
    <div className="text-white flex flex-col items-center mt-20">
      <h1 className="text-5xl font-extrabold mb-8 tracking-tight">
        Anytime TD Parlay
      </h1>

      <div className="bg-[#1a1d24] p-6 rounded-xl border border-[#2a2f3a] shadow-lg w-full max-w-md">
        <label className="block text-lg mb-3 font-medium">
          Enter Your Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-[#0f1014] border border-[#2a2f3a] text-white"
          placeholder="Your name..."
        />

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 transition p-3 rounded text-white font-semibold"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
