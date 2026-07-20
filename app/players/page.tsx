"use client";

import React from "react";

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

function Section({ title, players }: { title: string; players: Player[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((p) => (
          <div
            key={p.name}
            className="bg-[#1a1d24] border border-[#2a2f3a] p-4 rounded-xl shadow-md flex justify-between items-center"
          >
            <span className="font-medium">{p.name}</span>
            <span className="text-gray-400">{p.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlayersPage() {
  const qbs = PLAYER_POOL.filter((p) => p.position === "QB");
  const rbs = PLAYER_POOL.filter((p) => p.position === "RB");
  const wrs = PLAYER_POOL.filter((p) => p.position === "WR");
  const tes = PLAYER_POOL.filter((p) => p.position === "TE");

  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">
        Player Pool
      </h1>

      <Section title="Quarterbacks" players={qbs} />
      <Section title="Running Backs" players={rbs} />
      <Section title="Wide Receivers" players={wrs} />
      <Section title="Tight Ends" players={tes} />
    </div>
  );
}
