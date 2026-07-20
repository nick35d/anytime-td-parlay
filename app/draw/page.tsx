"use client";

import React, { useState, useEffect } from "react";

type Player = {
  name: string;
  position: "QB" | "RB" | "WR" | "TE";
};

const PLAYER_POOL: Player[] = [
  // QBs
  { name: "Lamar Jackson", position: "QB" },
  { name: "Josh Allen", position: "QB" },
  { name: "Malik Willis", position: "QB" },
  { name: "Drake Maye", position: "QB" },
  { name: "Bo Nix", position: "QB" },
  { name: "Jaxson Dart", position: "QB" },
  { name: "Jayden Daniels", position: "QB" },
  { name: "Jalen Hurts", position: "QB" },

  // RBs
  { name: "Derrick Henry", position: "RB" },
  { name: "Chase Brown", position: "RB" },
  { name: "Quinshon Judkins", position: "RB" },
  { name: "Bayshul Tuten", position: "RB" },
  { name: "Ashton Jeanty", position: "RB" },
  { name: "Omarion Hampton", position: "RB" },
  { name: "Bucky Irving", position: "RB" },
  { name: "Cam Skattebo", position: "RB" },
  { name: "Jeremiah Love", position: "RB" },
  { name: "Jadarian Price", position: "RB" },
  { name: "Jaylen Warren", position: "RB" },
  { name: "David Montgomery", position: "RB" },
  { name: "Jonathan Taylor", position: "RB" },
  { name: "D'Andre Swift", position: "RB" },
  { name: "Josh Jacobs", position: "RB" },
  { name: "De'Von Achane", position: "RB" },
  { name: "TreVeyon Henderson", position: "RB" },
  { name: "Breece Hall", position: "RB" },
  { name: "Bijan Robinson", position: "RB" },
  { name: "Travis Etienne Jr", position: "RB" },
  { name: "Saquon Barkley", position: "RB" },
  { name: "Kyren Williams", position: "RB" },
  { name: "Christian McCaffrey", position: "RB" },
  { name: "Javonte Williams", position: "RB" },

  // WRs
  { name: "Zay Flowers", position: "WR" },
  { name: "Ja'Marr Chase", position: "WR" },
  { name: "Tee Higgins", position: "WR" },
  { name: "DK Metcalf", position: "WR" },
  { name: "Nico Collins", position: "WR" },
  { name: "DJ Moore", position: "WR" },
  { name: "A.J. Brown", position: "WR" },
  { name: "Garrett Wilson", position: "WR" },
  { name: "Jaylen Waddle", position: "WR" },
  { name: "Courtland Sutton", position: "WR" },
  { name: "Rashee Rice", position: "WR" },
  { name: "Ladd McConkey", position: "WR" },
  { name: "Amon-Ra St. Brown", position: "WR" },
  { name: "Jameson Williams", position: "WR" },
  { name: "Chris Olave", position: "WR" },
  { name: "CeeDee Lamb", position: "WR" },
  { name: "George Pickens", position: "WR" },
  { name: "Terry McLaurin", position: "WR" },
  { name: "Marvin Harrison Jr", position: "WR" },
  { name: "Davante Adams", position: "WR" },
  { name: "Mike Evans", position: "WR" },
  { name: "Jaxon Smith-Njigba", position: "WR" },
  { name: "Brian Thomas Jr", position: "WR" },
  { name: "Carnell Tate", position: "WR" },
  { name: "Rome Odunze", position: "WR" },
  { name: "Luther Burden III", position: "WR" },
  { name: "Emeka Egbuka", position: "WR" },
  { name: "Tetairoa McMillan", position: "WR" },
  { name: "Puka Nacua", position: "WR" },

  // TEs
  { name: "Harold Fannin Jr", position: "TE" },
  { name: "Tyler Warren", position: "TE" },
  { name: "Colston Loveland", position: "TE" },
  { name: "Trey McBride", position: "TE" },
  { name: "Travis Kelce", position: "TE" },
  { name: "Brock Bowers", position: "TE" },
  { name: "Sam LaPorta", position: "TE" },
  { name: "Tucker Kraft", position: "TE" },
  { name: "Kyle Pitts", position: "TE" },
  { name: "George Kittle", position: "TE" },
];

function DrawAnimation({ players }: { players: Player[] }) {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setRevealed([]);
    setIndex(0);

    let cancelled = false;

    const revealNext = () => {
      if (cancelled) return;
      setRevealed((prev) => [...prev, players[index].name]);
      setIndex((i) => i + 1);
    };

    if (players.length > 0) {
      const interval = setInterval(() => {
        revealNext();
      }, 900);

      return () => {
        cancelled = true;
        clearInterval(interval);
      };
    }
  }, [players]);

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Hat */}
      <div className="relative w-48 h-48">
        <div className="absolute bottom-0 w-full h-24 bg-black rounded-b-full border border-gray-700 shadow-xl" />

        {/* Hand */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-200 rounded-full shadow-lg animate-[wiggle_1.2s_ease-in-out_infinite]" />
      </div>

      {/* Cards */}
      <div className="mt-8 flex flex-col gap-4">
        {revealed.map((name) => (
          <div
            key={name}
            className="w-72 bg-white text-black p-4 rounded-lg shadow-xl animate-slide text-center font-bold tracking-wide"
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
    <div className="text-white">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight">
        Your Anytime TD Parlay
      </h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <label className="text-lg font-medium">Number of Players</label>
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="p-3 rounded bg-[#1a1d24] text-white border border-[#2a2f3a]"
        >
          <option value={1}>1 Player</option>
          <option value={2}>2 Players</option>
          <option value={3}>3 Players</option>
          <option value={4}>4 Players</option>
        </select>

        <button
          onClick={handleDraw}
          className="bg-green-600 hover:bg-green-700 transition p-3 rounded text-white font-semibold shadow-md"
        >
          Draw My Players
        </button>
      </div>

      {drawnPlayers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Your Draw</h2>
          <DrawAnimation players={drawnPlayers} />
        </div>
      )}
    </div>
  );
}
