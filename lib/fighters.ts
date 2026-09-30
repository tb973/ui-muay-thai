export type FighterProfile = {
  name: string
  nickname: string
  discipline: string
  camp: string
  stance: string
  stanceNote: string
  signatureTechniques: string[]
  tendencies: string[]
  strengths: string[]
  program: {
    drills: { name: string; detail: string; volume: string }[]
    combos: string[][]
    conditioning: { name: string; detail: string }[]
    rounds: { round: number; focus: string; work: string }[]
  }
}

// Mock profile — replace with AI-generated profiles when that is wired up.
export const saenchai: FighterProfile = {
  name: 'Saenchai',
  nickname: 'The Muay Thai Genius',
  discipline: 'Muay Thai',
  camp: 'Evolve MMA / PKSaenchaimuaythaigym',
  stance: 'Southpaw',
  stanceNote: 'Switches stance freely mid-exchange to open angles and confuse timing.',
  signatureTechniques: ['Cartwheel kick', 'Step-through teep', 'Switch kick', 'Catch-and-sweep', 'Cartwheel flying knee'],
  tendencies: [
    'Fights at the edge of range, then darts in and out',
    'Draws the kick, catches it, and counters instantly',
    'Uses feints and rhythm changes to freeze opponents',
    'Pivots off the line rather than backing straight up',
  ],
  strengths: ['Elite timing', 'Footwork and angles', 'Balance and sweeps', 'Ring IQ', 'Kick catching'],
  program: {
    drills: [
      { name: 'Switch-step footwork', detail: 'Switch stance on every third step while circling. Keep hands tight.', volume: '3 × 2 min' },
      { name: 'Teep feint ladder', detail: 'Lift the knee as if to teep, freeze, then throw the real teep or a switch kick.', volume: '3 × 2 min' },
      { name: 'Catch-and-sweep shadow', detail: 'Visualize a body kick, catch with the elbow, step out and sweep with the rear leg.', volume: '4 × 90 sec' },
      { name: 'In-out range work', detail: 'Step in with a jab, fire one strike, step out on an angle. Never stay in the pocket.', volume: '3 × 2 min' },
    ],
    combos: [
      ['Jab', 'Switch', 'Left body kick'],
      ['Teep feint', 'Right cross', 'Left head kick'],
      ['Catch', 'Right cross', 'Sweep'],
      ['Jab', 'Jab', 'Step-through teep'],
      ['Switch knee', 'Pivot out', 'Left kick'],
    ],
    conditioning: [
      { name: 'Skipping rope', detail: '3 × 3 min, alternating single leg and switch step.' },
      { name: 'Single-leg balance holds', detail: '4 × 30 sec each leg, eyes forward, guard up.' },
      { name: 'Lateral bounds', detail: '3 × 10 each side for explosive angle changes.' },
      { name: 'Core: hanging knee raises', detail: '3 × 12 for knee power and clinch balance.' },
    ],
    rounds: [
      { round: 1, focus: 'Rhythm & range', work: 'Light jabs and teeps, switch stance often' },
      { round: 2, focus: 'Feint game', work: 'Feint first on every exchange, then kick' },
      { round: 3, focus: 'Counter kicks', work: 'Imagine catching kicks, sweep and cross' },
      { round: 4, focus: 'Angles', work: 'Strike, pivot, strike — never back up straight' },
      { round: 5, focus: 'Showtime', work: 'Free flow with your signature combos' },
    ],
  },
}

export const exampleFighters = ['Saenchai', 'Rodtang', 'Buakaw', 'Israel Adesanya']
