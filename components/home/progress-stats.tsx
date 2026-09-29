import { lessons } from '@/lib/lessons'

const skillsPracticed = 0
const sessionsCompleted = 0
const minutesTrained = 0

export function ProgressStats() {
  const pct = Math.round((skillsPracticed / lessons.length) * 100)

  return (
    <section
      aria-labelledby="progress-title"
      className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 md:p-8"
    >
      <div className="flex items-center justify-between">
        <h2 id="progress-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          The work adds up
        </h2>
        <span className="text-xs font-semibold text-primary">{pct}%</span>
      </div>

      <div className="flex flex-col gap-3">
        <p className="flex items-baseline gap-2">
          <span className="font-display text-6xl leading-none">{skillsPracticed}</span>
          <span className="text-lg text-muted-foreground">/ {lessons.length} skills</span>
        </p>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={lessons.length}
          aria-valuenow={skillsPracticed}
          aria-label="Skills practiced"
          className="flex gap-1.5"
        >
          {lessons.map((l, i) => (
            <span
              key={l.id}
              className={i < skillsPracticed ? 'h-2 flex-1 rounded-full bg-primary' : 'h-2 flex-1 rounded-full bg-muted'}
            />
          ))}
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-muted/60 p-4">
          <dt className="text-sm text-muted-foreground">Sessions</dt>
          <dd className="font-display text-4xl leading-tight">{sessionsCompleted}</dd>
        </div>
        <div className="rounded-2xl bg-muted/60 p-4">
          <dt className="text-sm text-muted-foreground">Time trained</dt>
          <dd className="font-display text-4xl leading-tight">
            {minutesTrained}
            <span className="ml-1 font-sans text-base font-medium text-muted-foreground">min</span>
          </dd>
        </div>
      </dl>
    </section>
  )
}
