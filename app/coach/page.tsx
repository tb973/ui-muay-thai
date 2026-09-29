import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { PageHeading } from '@/components/page-heading'

export const metadata: Metadata = {
  title: 'Coach | KRU',
  description: 'Ask your coach about technique, sticking points and shadowboxing combos.',
}

const prompts = [
  'Why does my teep push me off balance?',
  'Build me a 3-round shadowboxing plan',
  'How do I keep my guard up when I kick?',
]

export default function CoachPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeading
        eyebrow="Your corner"
        title="Ask your coach"
        description="Understand a movement, work on a sticking point, or build your next shadowboxing combo."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <section
          aria-labelledby="account-title"
          className="relative isolate flex min-h-80 flex-col justify-end gap-4 overflow-hidden rounded-3xl border border-border p-6 md:p-8"
        >
          <Image src="/images/pads.png" alt="" fill sizes="(min-width: 768px) 550px, 100vw" className="-z-10 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/10" />
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <MessageCircle className="size-6" aria-hidden="true" />
          </span>
          <h2 id="account-title" className="font-display text-4xl uppercase leading-none tracking-wide text-balance">
            A coach who remembers your questions
          </h2>
          <p className="max-w-sm text-pretty text-foreground/80">
            Create a KRU account to save conversations alongside your training preferences.
          </p>
          <button
            type="button"
            className="group inline-flex min-h-13 w-fit items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
          >
            Create account or sign in
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </section>

        <section aria-labelledby="prompts-title" className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 id="prompts-title" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Try asking
          </h2>
          <ul className="flex flex-col gap-2">
            {prompts.map((p) => (
              <li key={p} className="rounded-2xl bg-muted/60 px-4 py-4 text-base">
                {`"${p}"`}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
