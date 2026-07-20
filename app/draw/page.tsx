"use client";

import React, { useState, useEffect } from "react";

type Player = {
  name: string;
  position: string;
  team: string;
};

const PLAYER_POOL: Player[] = [
  { name: "Christian McCaffrey", position: "RB", team: "SF" },
  { name: "Justin Jefferson", position: "WR", team: "MIN" },
  { name: "Sam LaPorta", position: "TE", team: "DET" },
  { name: "Amon-Ra St. Brown", position: "WR", team: "DET" },
  { name: "Bijan Robinson", position: "RB", team: "ATL" },
  { name: "Lamar Jackson", position: "QB", team: "BAL" },
];

function DrawAnimation({ players }: { players: Player[] }) {
  const [revealed, setRevealed] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRevealed((prev) => [...prev, players[i].name]);
      i++;
      if (i >= players.length) clearInterval(interval);
    }, 1200);
    return () => clearInterval(interval);
  }, [players]);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="relative w-40 h-40">
        {/* Hat */}
        <div className="absolute bottom-0 w-full h-20 bg-black rounded-b-full"></div>

        {/* Hand */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-200 rounded-full animate-bounce"></div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {revealed.map((name, idx) => (
          <div
            key={idx}
            className="w-48 bg-white text-black p-3 rounded shadow-md animate-slide"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DrawPage() {
  const [count, setCount] = useState(2);
  const [drawnPlayers, setDrawnPlayers] = useState<Player[]>([]);

  const handleDraw = () => {
    const shuffled = [...PLAYER_POOL].sort(() => Math.random() - 0.5);
    setDrawnPlayers(shuffled.slice(0, count));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Anytime TD Parlay Draw</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <label className="text-lg">Number of Players</label>
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="p-3 rounded bg-gray-800 text-white"
        >
          <option value={1}>1 Player</option>
          <option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
          <option value={4}>4 Players</option>
        </select>

        <button
          onClick={handleDraw}
          className="bg-green-600 hover:bg-green-700 transition p-3 rounded text-white font-semibold"
        >
          Draw My Players
        </button>
      </div>

      {drawnPlayers.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Your Draw:</h2>
          <DrawAnimation players={drawnPlayers} />
        </div>
      )}
    </div>
  );
}
