"use client";

import React, { useState, useEffect } from "react";

type Player = {
  name: string;
  position: "QB" | "RB" | "WR" | "TE";
};

const PLAYER_POOL: Player[] = [
  { name: "Lamar Jackson", position: "QB" },
  { name: "Josh Allen", position: "QB" },
  { name: "Malik Willis", position: "QB" },
  { name: "Drake Maye", position: "QB" },
  { name: "Bo Nix", position: "QB" },
  { name: "Jaxson Dart", position: "QB" },
  { name: "Jayden Daniels", position: "QB" },
  { name: "Jalen Hurts", position: "QB" },

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState<string[]>([]);
  const [stage, setStage] = useState<"handDown" | "handUp" | "unfold" | "done">(
    "handDown"
  );

  useEffect(() => {
    if (players.length === 0) return;

    let cancelled = false;

    const runSequence = (i: number) => {
      if (cancelled) return;

      setStage("handDown");

      setTimeout(() => {
        if (cancelled) return;
        setStage("handUp");
      }, 900);

      setTimeout(() => {
        if (cancelled) return;
        setStage("unfold");
      }, 1800);

      setTimeout(() => {
        if (cancelled) return;
        setRevealed((prev) => [...prev, players[i].name]);
        setStage("done");

        if (i + 1 < players.length) {
          setTimeout(() => runSequence(i + 1), 1200);
        }
      }, 2600);
    };

    runSequence(0);

    return () => {
      cancelled = true;
    };
  }, [players]);

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Cowboy Hat (cowprint) */}
      <svg width="220" height="120" viewBox="0 0 220 120">
        <defs>
          <pattern id="cowprint" patternUnits="userSpaceOnUse" width="40" height="40">
            <rect width="40" height="40" fill="white" />
            <circle cx="10" cy="10" r="10" fill="black" />
            <circle cx="30" cy="25" r="12" fill="black" />
            <circle cx="15" cy="30" r="8" fill="black" />
          </pattern>
        </defs>

        <path
          d="M20 80 Q110 10 200 80 Q150 110 70 110 Q10 100 20 80Z"
          fill="url(#cowprint)"
          stroke="black"
          strokeWidth="3"
        />
      </svg>

      {/* Hand */}
      <div
        className={`transition-transform duration-700 ${
          stage === "handDown"
            ? "translate-y-0"
            : stage === "handUp"
            ? "-translate-y-20"
            : "-translate-y-24"
        }`}
      >
        <svg width="140" height="140" viewBox="0 0 140 140">
          <path
            d="M40 20 Q60 10 80 20 Q100 30 110 60 Q115 80 100 100 Q80 120 60 110 Q40 100 30 80 Q20 60 30 40Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Paper Unfold */}
      {stage === "unfold" && (
        <div className="flex gap-1 mt-4">
          <div className="w-24 h-32 bg-white border border-gray-400 origin-left animate-[unfoldLeft_0.8s_ease-out_forwards]" />
          <div className="w-24 h-32 bg-white border border-gray-400 origin-right animate-[unfoldRight_0.8s_ease-out_forwards]" />
        </div>
      )}

      {/* Name Reveal */}
      {stage === "done" && revealed.length > 0 && (
        <div className="mt-6 text-center">
          <div className="text-black bg-white p-4 rounded shadow-xl text-xl font-bold animate-slide">
            {revealed[revealed.length - 1]}
          </div>
        </div>
      )}

      {/* All revealed names */}
      <div className="mt-10 flex flex-col gap-3">
        {revealed.map((name) => (
          <div
            key={name}
            className="text-black bg-white p-3 rounded shadow-md text-lg font-semibold"
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
