'use client';

import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem('td_parlay_name');
    if (stored) setSavedName(stored);
  }, []);

  const handleSaveName = () => {
    if (!name.trim()) return;
    window.localStorage.setItem('td_parlay_name', name.trim());
    setSavedName(name.trim());
  };

  return (
    <div className="space-y-6">
      <section className="main-card">
        <h2 className="text-lg font-semibold mb-2">Welcome</h2>
        {!savedName ? (
          <>
            <p className="text-sm text-slate-300 mb-4">
              Enter your name to join the game. This is how we track your draws, history, and leaderboard.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-3 py-2 rounded border border-slate-700 bg-slate-900 text-slate-100 text-sm w-full"
              />
              <button onClick={handleSaveName} className="button-primary w-full">
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-slate-300 mb-4">
              You&apos;re playing as <span className="font-semibold">{savedName}</span>. Head to the Draw page to make your weekly pick.
            </p>
            <a href="/draw" className="button-primary w-full text-center">
              Go to Draw Page
            </a>
          </>
        )}
      </section>

      <section className="main-card">
        <h2 className="text-lg font-semibold mb-2">Season Leaderboard</h2>
        <p className="text-sm text-slate-300 mb-4">
          This will show total parlays hit and total rushing/receiving TDs from draws.
        </p>
        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40">
          <p>Leaderboard coming soon...</p>
        </div>
      </section>

      <section className="main-card">
        <h2 className="text-lg font-semibold mb-2">This Week&apos;s Summary</h2>
        <p className="text-sm text-slate-300 mb-4">
          This will show everyone&apos;s draws and live TD status once wired to a backend.
        </p>
        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40">
          <p>Weekly summary coming soon...</p>
        </div>
      </section>
    </div>
  );
}
