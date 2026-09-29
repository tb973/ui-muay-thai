import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Eyebrow } from '@/components/page-heading'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden rounded-3xl border border-border bg-card"
    >
      <Image
        src="/images/hero-fighter.png"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 1100px, 100vw"
        className="-z-10 object-cover object-[70%_30%] opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/60 to-transparent md:bg-gradient-to-r md:from-background md:via-background/70 md:to-transparent"
      />

      <div className="flex min-h-[560px] flex-col justify-end gap-6 p-6 md:min-h-[520px] md:max-w-xl md:justify-center md:p-12">
        <Eyebrow>Your training, today</Eyebrow>
        <h1
          id="hero-title"
          className="font-display text-6xl uppercase leading-[0.9] tracking-wide text-balance md:text-8xl"
        >
          Get better. <span className="text-primary">One round</span> at a time.
        </h1>
        <p className="max-w-md text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
          Learn the movement. Practice with purpose. Build a strong foundation wherever you train.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/learn/stance-guard"
            className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
          >
            {"Start today's session"}
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="/pad-holder"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-7 text-base font-semibold backdrop-blur transition-colors hover:border-primary"
          >
            <Play className="size-4 fill-current" aria-hidden="true" />
            Quick pad round
          </Link>
        </div>
      </div>
    </section>
  )
}
