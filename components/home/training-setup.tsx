'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const stances = ['Orthodox', 'Southpaw'] as const
const goals = ['Learn the fundamentals', 'Improve conditioning', 'Build consistency'] as const

function Segmented<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly T[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-sm font-medium text-muted-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = opt === value
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(opt)}
              className={cn(
                'min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary/60',
              )}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function TrainingSetup() {
  const [stance, setStance] = useState<(typeof stances)[number]>('Orthodox')
  const [goal, setGoal] = useState<(typeof goals)[number]>('Learn the fundamentals')

  return (
    <section
      aria-labelledby="setup-title"
      className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 md:p-8"
    >
      <div className="flex flex-col gap-1">
        <h2 id="setup-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Your setup
        </h2>
        <p className="text-lg">
          <span className="font-semibold">{stance}</span>
          <span className="text-muted-foreground"> · </span>
          <span className="font-semibold">{goal}</span>
        </p>
      </div>
      <Segmented label="Stance" options={stances} value={stance} onChange={setStance} />
      <Segmented label="Goal" options={goals} value={goal} onChange={setGoal} />
    </section>
  )
}
