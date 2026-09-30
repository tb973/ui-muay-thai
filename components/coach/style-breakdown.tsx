import type { FighterProfile } from '@/lib/fighters'

function Label({ children }: { children: React.ReactNode }) {
  return <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{children}</h4>
}

export function StyleBreakdown({ profile }: { profile: FighterProfile }) {
  return (
    <article aria-labelledby="style-title" className="flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card">
      <header className="flex flex-col gap-1 bg-primary p-6 text-primary-foreground">
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">
          {profile.discipline} · Style breakdown
        </p>
        <h3 id="style-title" className="font-display text-5xl uppercase leading-none tracking-wide">
          {profile.name}
        </h3>
        <p className="text-sm font-medium opacity-80">{`"${profile.nickname}"`}</p>
      </header>

      <div className="flex flex-col gap-6 px-6 pb-6">
        <div className="flex flex-col gap-2">
          <Label>Stance</Label>
          <p className="font-display text-2xl uppercase tracking-wide">{profile.stance}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{profile.stanceNote}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Label>Signature techniques</Label>
          <ul className="flex flex-wrap gap-2">
            {profile.signatureTechniques.map((t) => (
              <li key={t} className="rounded-full bg-primary/15 px-3 py-1.5 text-sm font-medium text-primary">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Label>Tendencies</Label>
          <ul className="flex flex-col gap-2">
            {profile.tendencies.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Label>Strengths</Label>
          <ul className="grid grid-cols-2 gap-2">
            {profile.strengths.map((s) => (
              <li key={s} className="rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm font-medium">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
