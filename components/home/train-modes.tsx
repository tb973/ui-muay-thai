import Link from 'next/link'
import { ArrowRight, Camera, Headphones, Link2, type LucideIcon } from 'lucide-react'
import { Eyebrow } from '@/components/page-heading'

type Mode = { href: string; title: string; description: string; icon: LucideIcon; tag: string }

const modes: Mode[] = [
  {
    href: '/learn',
    title: 'Train with camera',
    description: 'See your body positions, practice controlled reps and hear clear cues.',
    icon: Camera,
    tag: 'Form check',
  },
  {
    href: '/pad-holder',
    title: 'Pad holder',
    description: 'Hear calls and work through a solo round at your own pace.',
    icon: Headphones,
    tag: 'Audio rounds',
  },
  {
    href: '/video',
    title: 'Analyze a video',
    description: 'Break down visible moves in a YouTube clip and get a plan to try.',
    icon: Link2,
    tag: 'Breakdown',
  },
]

export function TrainModes() {
  return (
    <section aria-labelledby="modes-title" className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Eyebrow>Built for real practice</Eyebrow>
        <h2 id="modes-title" className="font-display text-4xl uppercase tracking-wide md:text-5xl">
          Train your way
        </h2>
      </div>

      <ul className="grid gap-3 md:grid-cols-3">
        {modes.map((mode) => {
          const Icon = mode.icon
          return (
            <li key={mode.title}>
              <Link
                href={mode.href}
                className="group flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary/60 md:flex-col md:p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-1 flex-col gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {mode.tag}
                  </span>
                  <h3 className="text-lg font-semibold">{mode.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
                </div>
                <ArrowRight
                  className="mt-1 size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary md:hidden"
                  aria-hidden="true"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
