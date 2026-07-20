import React from 'react';

export default function LeaderboardPage() {
  return (
    <div className="space-y-6">
      <section className="main-card">
        <h2 className="text-lg font-semibold">Season Leaderboard</h2>
        <p className="text-sm text-slate-300 mb-4">
          This will show total parlays hit, total rushing/receiving TDs, and hit rate for each player.
        </p>
        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40">
          <p>Leaderboard table coming soon...</p>
        </div>
      </section>

      <section className="main-card">
        <h2 className="text-lg font-semibold">Fun Metrics</h2>
        <p className="text-sm text-slate-300 mb-4">
          Luck score, best/worst players YTD, most/least drawn players, and more.
        </p>
        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40">
          <p>Metrics coming soon...</p>
        </div>
      </section>
    </div>
  );
}
