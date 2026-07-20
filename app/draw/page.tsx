'use client';

import React, { useEffect, useState } from 'react';

type Player = { name: string };

const PLAYER_POOL: Player[] = [
  { name: 'Lamar Jackson' },
  { name: 'Ja\'Marr Chase' },
  { name: 'Christian McCaffrey' },
  { name: 'Justin Jefferson' },
  { name: 'Bijan Robinson' },
  { name: 'Amon-Ra St. Brown' },
];

function getRandomPlayers(count: number): Player[] {
  const shuffled = [...PLAYER_POOL].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function DrawPage() {
  const [savedName, setSavedName] = useState<string | null>(null);
  const [drawn, setDrawn] = useState<Player[] | null>(null);
  const [animKey, setAnimKey] = useState<number>(0);
  const [playerCount, setPlayerCount] = useState<number>(2); // default 2

  useEffect(() => {
    const stored = window.localStorage.getItem('td_parlay_name');
    if (stored) setSavedName(stored);
  }, []);

  const handleDraw = () => {
    const players = getRandomPlayers(playerCount);
    setDrawn(players);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="space-y-6">
      <section className="main-card">
        <h2 className="text-lg font-semibold">Draw Players</h2>

        <p className="text-sm text-slate-300">
          {savedName
            ? `You are drawing for ${savedName}.`
            : `Enter your name on the Home page first.`}
        </p>

        <div className="mt-4">
          <label className="text-sm text-slate-300 block mb-1">
            Number of Players
          </label>
          <select
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="px-3 py-2 rounded border border-slate-700 bg-slate-900 text-slate-100 text-sm w-full"
          >
            <option value={1}>1 Player</option>
            <option value={2}>2 Players</option>
            <option value={3}>3 Players</option>
            <option value={4}>4 Players</option>
          </select>
        </div>

        <button
          onClick={handleDraw}
          className="button-primary mt-4 w-full"
          disabled={!savedName}
        >
          {savedName ? 'Draw My Players' : 'Name Required'}
        </button>

        {drawn && (
          <div className="draw-container" key={animKey}>
            <div className="hat-rim" />
            <div className="hat" />
            <div className="hand">
              <div className="hand-shape" />
            </div>
            <div className="paper flex items-center justify-center text-xs font-semibold text-slate-900">
              {drawn[0]?.name}
            </div>
          </div>
        )}

        {drawn && (
          <div className="mt-6 space-y-2">
            <h3 className="text-md font-semibold">Your Draw:</h3>
            <ul className="space-y-1 text-sm">
              {drawn.map((p) => (
                <li
                  key={p.name}
                  className="border border-slate-700 rounded px-3 py-2 bg-slate-900/60"
                >
                  {p.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="main-card">
        <h3 className="text-md font-semibold mb-2">Your Weekly History</h3>
        <p className="text-sm text-slate-300">
          This will show all your draws for the current week once we hook up the backend.
        </p>
        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40">
          <p>History coming soon...</p>
        </div>
      </section>
    </div>
  );
}
