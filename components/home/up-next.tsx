import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { lessons } from '@/lib/lessons'

export function UpNext() {
  const lesson = lessons[0]

  return (
    <Link
      href={`/learn/${lesson.id}`}
      className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground transition-transform active:scale-[0.99] md:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-10 font-display text-[12rem] leading-none text-primary-foreground/10"
      >
        {lesson.number}
      </span>

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          Up next · {lesson.category}
        </span>
        <span className="flex items-center gap-1.5 text-sm font-semibold">
          <Clock className="size-4" aria-hidden="true" />
          {lesson.minutes} min
        </span>
      </div>

      <div className="relative flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-4xl uppercase leading-none tracking-wide md:text-5xl">
            {lesson.title}
          </h3>
          <p className="max-w-xs text-pretty font-medium text-primary-foreground/75">{lesson.description}</p>
        </div>
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-primary transition-transform group-hover:rotate-45">
          <ArrowUpRight className="size-6" aria-hidden="true" />
          <span className="sr-only">Start lesson</span>
        </span>
      </div>
    </Link>
  )
}
