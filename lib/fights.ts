export type FightSport = 'Muay Thai' | 'MMA'
export type FightStatus = 'live' | 'upcoming' | 'result'

export type FightItem = {
  id: string
  sport: FightSport
  status: FightStatus
  headline: string
  detail: string
}

// Mock feed — replace with the live fight feed when it is wired up.
export const mockFights: FightItem[] = [
  { id: 'one-ff-172', sport: 'Muay Thai', status: 'upcoming', headline: 'ONE Friday Fights 172', detail: 'Fri 7:30 AM ET' },
  { id: 'ufc-321', sport: 'MMA', status: 'result', headline: 'UFC 321: Aspinall def. Gane', detail: 'KO R1' },
  { id: 'rajadamnern', sport: 'Muay Thai', status: 'live', headline: 'Rajadamnern World Series', detail: 'Live now' },
  { id: 'pfl-finals', sport: 'MMA', status: 'upcoming', headline: 'PFL Finals', detail: 'Sat 8 PM ET' },
  { id: 'lumpinee', sport: 'Muay Thai', status: 'result', headline: 'Lumpinee: Superlek def. Rodtang', detail: 'UD R5' },
  { id: 'one-fn', sport: 'MMA', status: 'upcoming', headline: 'ONE Fight Night 38', detail: 'Sat 9 PM ET' },
  { id: 'max-muay-thai', sport: 'Muay Thai', status: 'upcoming', headline: 'Max Muay Thai Pattaya', detail: 'Sun 6 AM ET' },
  { id: 'ufc-fn', sport: 'MMA', status: 'result', headline: 'UFC Fight Night: Pereira def. Ankalaev', detail: 'TKO R2' },
]
