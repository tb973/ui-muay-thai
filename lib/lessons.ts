export type Lesson = {
  id: string
  number: string
  category: 'Foundation' | 'Hands' | 'Kicks'
  minutes: number
  title: string
  description: string
  cues: string[]
}

export const lessons: Lesson[] = [
  {
    id: 'stance-guard',
    number: '01',
    category: 'Foundation',
    minutes: 12,
    title: 'Stance & guard',
    description: 'Build a base you can move and strike from.',
    cues: ['Feet shoulder-width, lead foot slightly turned in', 'Weight balanced, heels light', 'Hands high, elbows tucked, chin down'],
  },
  {
    id: 'jab',
    number: '02',
    category: 'Hands',
    minutes: 15,
    title: 'The jab',
    description: 'Make a quick lead hand strike and return safely.',
    cues: ['Extend straight from your guard', 'Turn the fist over at the end', 'Snap it back to your cheek on the same line'],
  },
  {
    id: 'cross',
    number: '03',
    category: 'Hands',
    minutes: 16,
    title: 'The cross',
    description: 'Connect the rear hand to your hips and stance.',
    cues: ['Pivot the rear foot and turn the hip', 'Keep the lead hand home as you throw', 'Return to stance before the next strike'],
  },
  {
    id: 'movement',
    number: '04',
    category: 'Foundation',
    minutes: 14,
    title: 'Move without losing stance',
    description: 'Create angles while keeping your balance.',
    cues: ['Step with the foot closest to the direction', 'Never cross your feet', 'Keep your guard up as you move'],
  },
  {
    id: 'lead-teep',
    number: '05',
    category: 'Kicks',
    minutes: 18,
    title: 'Lead teep',
    description: 'Learn the chamber, extension and controlled return.',
    cues: ['Lift the knee high to chamber', 'Push through the ball of the foot', 'Return to stance, don\'t drop the foot forward'],
  },
  {
    id: 'rear-teep',
    number: '06',
    category: 'Kicks',
    minutes: 18,
    title: 'Rear teep',
    description: 'Practice a rear leg teep with a balanced recovery.',
    cues: ['Shift weight onto the lead leg', 'Drive the hip forward on extension', 'Recover back to a balanced guard'],
  },
]
