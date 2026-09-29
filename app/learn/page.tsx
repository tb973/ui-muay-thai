import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { PageHeading } from '@/components/page-heading'
import { lessons } from '@/lib/lessons'

export const metadata: Metadata = {
  title: 'Learn | KRU',
  description: 'A step-by-step Muay Thai curriculum, from stance to teeps.',
}

export default function LearnPage() {
  return (
    <>
      <PageHeading
        eyebrow="Foundations course"
        title="Learn the basics"
        description="Six short lessons that build on each other. Master each movement before adding the next."
      />

      <ol className="grid gap-3 md:grid-cols-2">
        {lessons.map((lesson, i) => (
          <li key={lesson.id}>
            <Link
              href={`/learn/${lesson.id}`}
              className="group flex h-full items-center gap-5 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary/60 md:p-6"
            >
              <span
                className={
                  i === 0
                    ? 'font-display text-5xl leading-none text-primary'
                    : 'font-display text-5xl leading-none text-muted-foreground/40'
                }
              >
                {lesson.number}
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  <span>{lesson.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" aria-hidden="true" />
                    {lesson.minutes} min
                  </span>
                </div>
                <h2 className="text-lg font-semibold">{lesson.title}</h2>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{lesson.description}</p>
              </div>
              <ArrowRight
                className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
