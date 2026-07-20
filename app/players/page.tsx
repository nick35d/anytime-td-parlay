import React from 'react';

const PLAYER_POOL = [
  'Lamar Jackson',
  'Zay Flowers',
  'Derrick Henry',
  'Ja\'Marr Chase',
  'Tee Higgins',
  'Chase Brown',
  'Quinshon Judkins',
  'Harold Fannin Jr',
  'DK Metcalf',
  'Jaylen Warren',
  'David Montgomery',
  'Nico Collins',
  'Jonathan Taylor',
  'Alec Pierce',
  'Tyler Warren',
  'Bayshul Tuten',
  'Brian Thomas Jr',
  'Carnell Tate',
  'Josh Allen',
  'James Cook',
  'DJ Moore',
  'De\'Von Achane',
  'Malik Willis',
  'A.J. Brown',
  'Drake Maye',
  'TreVeyon Henderson',
  'Breece Hall',
  'Garrett Wilson',
  'Jaylen Waddle',
  'Courtland Sutton',
  'Bo Nix',
  'Travis Kelce',
  'Rashee Rice',
  'Kenneth Walker III',
  'Ashton Jeanty',
  'Brock Bowers',
  'Omarion Hampton',
  'Ladd McConkey',
  'Rome Odunze',
  'Luther Burden III',
  'Colston Loveland',
  'D\'Andre Swift',
  'Jahmyr Gibbs',
  'Amon-Ra St. Brown',
  'Jameson Williams',
  'Sam LaPorta',
  'Josh Jacobs',
  'Tucker Kraft',
  'Christian Watson',
  'Justin Jefferson',
  'Bijan Robinson',
  'Drake London',
  'Kyle Pitts',
  'Tetairoa McMillan',
  'Chris Olave',
  'Travis Etienne Jr',
  'Emeka Egbuka',
  'Bucky Irving',
  'CeeDee Lamb',
  'George Pickens',
  'Javonte Williams',
  'Cam Skattebo',
  'Jaxson Dart',
  'Jalen Hurts',
  'Saquon Barkley',
  'DeVonta Smith',
  'Jayden Daniels',
  'Terry McLaurin',
  'Trey McBride',
  'Jeremiah Love',
  'Marvin Harrison Jr',
  'Puka Nacua',
  'Davante Adams',
  'Kyren Williams',
  'Mike Evans',
  'Christian McCaffrey',
  'George Kittle',
  'Jaxon Smith-Njigba',
  'Jadarian Price',
];

export default function PlayersPage() {
  return (
    <div className="space-y-6">
      <section className="main-card">
        <h2 className="text-lg font-semibold">Player Pool</h2>
        <p className="text-sm text-slate-300 mb-4">
          This is your current hat. Later, this page will let you add/remove players and toggle active/inactive.
        </p>

        <div className="border border-slate-700 rounded p-4 text-sm bg-slate-950/40 max-h-[500px] overflow-y-auto">
          <ul className="space-y-1">
            {PLAYER_POOL.map((name) => (
              <li
                key={name}
                className="flex justify-between items-center border border-slate-700 rounded px-3 py-2 bg-slate-900/60"
              >
                <span>{name}</span>
                <span className="text-xs text-emerald-400">active</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
