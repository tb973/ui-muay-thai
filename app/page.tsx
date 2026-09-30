import { FightTicker } from '@/components/home/fight-ticker'
import { Hero } from '@/components/home/hero'
import { UpNext } from '@/components/home/up-next'
import { ProgressStats } from '@/components/home/progress-stats'
import { TrainModes } from '@/components/home/train-modes'
import { TrainingSetup } from '@/components/home/training-setup'
import { Eyebrow } from '@/components/page-heading'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-4 md:gap-6">
        <FightTicker />
        <Hero />
      </div>

      <section aria-labelledby="path-title" className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Eyebrow>Your path</Eyebrow>
          <h2 id="path-title" className="font-display text-4xl uppercase tracking-wide md:text-5xl">
            Pick up where you left off
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr]">
          <UpNext />
          <ProgressStats />
        </div>
      </section>

      <TrainModes />
      <TrainingSetup />

      <p className="text-center text-xs leading-relaxed text-muted-foreground md:hidden">
        Solo learning · No contact training · Always train within your limits
      </p>
    </div>
  )
}
