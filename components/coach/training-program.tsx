import { Dumbbell, Flame, Repeat, Timer } from 'lucide-react'
import type { FighterProfile } from '@/lib/fighters'

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Flame
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-3 border-t border-border pt-5 first:border-t-0 first:pt-0">
      <h4 className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        {title}
      </h4>
      {children}
    </section>
  )
}

export function TrainingProgram({ profile }: { profile: FighterProfile }) {
  const { drills, combos, conditioning, rounds } = profile.program

  return (
    <article aria-labelledby="program-title" className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Training program</p>
        <h3 id="program-title" className="font-display text-3xl uppercase leading-none tracking-wide text-balance">
          {`Move like ${profile.name}`}
        </h3>
      </div>

      <Block icon={Repeat} title="Drills">
        <ul className="flex flex-col gap-2">
          {drills.map((d) => (
            <li key={d.name} className="flex flex-col gap-1 rounded-2xl bg-muted/50 p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold">{d.name}</span>
                <span className="shrink-0 text-xs font-semibold tabular-nums text-primary">{d.volume}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{d.detail}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={Flame} title="Combos">
        <ol className="flex flex-col gap-2">
          {combos.map((combo, i) => (
            <li key={combo.join('-')} className="flex items-center gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground tabular-nums">
                {i + 1}
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-sm">
                {combo.map((move, j) => (
                  <span key={move + j} className="flex items-center gap-1.5">
                    {j > 0 && (
                      <span aria-hidden="true" className="text-muted-foreground">
                        {'→'}
                      </span>
                    )}
                    <span className="rounded-md border border-border px-2 py-1 font-medium">{move}</span>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Block>

      <Block icon={Dumbbell} title="Conditioning">
        <ul className="flex flex-col gap-3">
          {conditioning.map((c) => (
            <li key={c.name} className="flex flex-col gap-0.5">
              <span className="font-semibold">{c.name}</span>
              <span className="text-sm text-muted-foreground">{c.detail}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block icon={Timer} title="Round structure">
        <p className="text-sm text-muted-foreground">
          {`${rounds.length} × 3 min rounds · 1 min rest`}
        </p>
        <ol className="flex flex-col gap-2">
          {rounds.map((r) => (
            <li key={r.round} className="flex items-stretch gap-3 overflow-hidden rounded-2xl border border-border">
              <span className="flex w-12 shrink-0 flex-col items-center justify-center bg-secondary font-display text-2xl">
                <span className="sr-only">Round </span>
                {r.round}
              </span>
              <div className="flex flex-col gap-0.5 py-3 pr-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">{r.focus}</span>
                <span className="text-sm leading-relaxed">{r.work}</span>
              </div>
            </li>
          ))}
        </ol>
      </Block>
    </article>
  )
}
