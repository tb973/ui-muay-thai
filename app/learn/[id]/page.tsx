import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Headphones } from 'lucide-react'
import { Eyebrow } from '@/components/page-heading'
import { lessons } from '@/lib/lessons'

export function generateStaticParams() {
  return lessons.map((l) => ({ id: l.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const lesson = lessons.find((l) => l.id === id)
  return { title: lesson ? `${lesson.title} | KRU` : 'Lesson | KRU', description: lesson?.description }
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const index = lessons.findIndex((l) => l.id === id)
  if (index === -1) notFound()
  const lesson = lessons[index]
  const next = lessons[index + 1]

  return (
    <article className="flex flex-col gap-8">
      <Link
        href="/learn"
        className="flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        All lessons
      </Link>

      <header className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground md:p-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-8 font-display text-[11rem] leading-none text-primary-foreground/10"
        >
          {lesson.number}
        </span>
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="rounded-full bg-primary-foreground px-3 py-1 text-primary">{lesson.category}</span>
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              {lesson.minutes} min
            </span>
          </div>
          <h1 className="font-display text-5xl uppercase leading-none tracking-wide md:text-7xl">{lesson.title}</h1>
          <p className="max-w-md text-pretty text-base font-medium text-primary-foreground/80">{lesson.description}</p>
        </div>
      </header>

      <section aria-labelledby="cues-title" className="flex flex-col gap-4">
        <Eyebrow>Key cues</Eyebrow>
        <h2 id="cues-title" className="sr-only">
          Key cues
        </h2>
        <ol className="flex flex-col gap-3">
          {lesson.cues.map((cue, i) => (
            <li key={cue} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 font-display text-lg text-primary">
                {i + 1}
              </span>
              <p className="text-base font-medium">{cue}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/pad-holder"
          className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground"
        >
          <Headphones className="size-5" aria-hidden="true" />
          Practice on pads
        </Link>
        {next && (
          <Link
            href={`/learn/${next.id}`}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-border px-7 font-semibold hover:border-primary"
          >
            Next: {next.title}
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  )
}
