'use client'

import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { mockFights, type FightItem } from '@/lib/fights'
import { cn } from '@/lib/utils'

function TickerItems({ items, hidden }: { items: FightItem[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((fight) => (
        <li key={fight.id} className="flex items-center gap-2 whitespace-nowrap px-4 text-[13px]">
          {fight.status === 'live' ? (
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
              <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />
              Live
            </span>
          ) : (
            <span
              className={cn(
                'text-[10px] font-bold uppercase tracking-[0.15em]',
                fight.sport === 'Muay Thai' ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {fight.sport === 'Muay Thai' ? 'MT' : 'MMA'}
            </span>
          )}
          <span className="font-medium text-foreground">{fight.headline}</span>
          <span aria-hidden="true" className="text-muted-foreground/60">
            {'·'}
          </span>
          <span
            className={cn(
              'tabular-nums',
              fight.status === 'result' ? 'font-semibold text-foreground/90' : 'text-muted-foreground',
            )}
          >
            {fight.detail}
          </span>
          <span aria-hidden="true" className="ml-4 h-3 w-px bg-border" />
        </li>
      ))}
    </ul>
  )
}

export function FightTicker({ items = mockFights }: { items?: FightItem[] }) {
  const [paused, setPaused] = useState(false)
  const toggle = () => setPaused((p) => !p)

  return (
    <section
      aria-label="Fight ticker"
      className="-mx-4 -mt-4 flex h-11 items-stretch overflow-hidden border-b border-border bg-card md:mx-0 md:mt-0 md:rounded-full md:border"
    >
      <button
        type="button"
        onClick={toggle}
        aria-pressed={paused}
        aria-label={paused ? 'Resume fight ticker' : 'Pause fight ticker'}
        className="relative z-10 flex min-w-11 shrink-0 items-center gap-1.5 bg-primary pl-3 pr-3 font-display text-sm uppercase tracking-wider text-primary-foreground"
      >
        {paused ? <Play className="size-3.5 fill-current" aria-hidden="true" /> : <Pause className="size-3.5 fill-current" aria-hidden="true" />}
        <span>Fight wire</span>
      </button>

      <div
        onClick={toggle}
        className="relative flex min-w-0 flex-1 cursor-pointer items-center overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)]"
      >
        <div
          className={cn(
            'flex w-max animate-ticker motion-reduce:animate-none md:hover:[animation-play-state:paused]',
            paused && '[animation-play-state:paused]',
          )}
        >
          <TickerItems items={items} />
          <TickerItems items={items} hidden />
        </div>
      </div>
    </section>
  )
}
