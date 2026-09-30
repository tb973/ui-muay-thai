'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, RotateCcw, Search } from 'lucide-react'
import { exampleFighters, saenchai, type FighterProfile } from '@/lib/fighters'
import { StyleBreakdown } from '@/components/coach/style-breakdown'
import { TrainingProgram } from '@/components/coach/training-program'

export function TrainLike() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<{ searched: string; profile: FighterProfile } | null>(null)

  const runSearch = (name: string) => {
    const trimmed = name.trim()
    if (!trimmed) return
    setQuery(trimmed)
    setResult({ searched: trimmed, profile: saenchai })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    runSearch(query)
  }

  const isExample = result && result.searched.toLowerCase() !== result.profile.name.toLowerCase()

  return (
    <section aria-labelledby="train-like-title" className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          Fighter mimic
        </p>
        <h2 id="train-like-title" className="font-display text-4xl uppercase leading-none tracking-wide md:text-5xl">
          Train like <span className="text-primary">X</span>
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Name a fighter and get their style broken down, plus a program built to move like them.
        </p>
      </div>

      <form onSubmit={onSubmit} role="search" className="flex flex-col gap-3">
        <label htmlFor="fighter-name" className="sr-only">
          {"Enter a fighter's name"}
        </label>
        <div className="flex gap-2 rounded-full border border-input bg-card p-1.5 focus-within:border-primary">
          <div className="flex min-w-0 flex-1 items-center gap-2 pl-3">
            <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id="fighter-name"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter a fighter's name"
              autoComplete="off"
              enterKeyHint="search"
              className="h-11 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            disabled={!query.trim()}
            className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 font-semibold text-primary-foreground transition-opacity disabled:opacity-40"
          >
            Go
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {exampleFighters.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => runSearch(name)}
              className="min-h-11 rounded-full border border-border px-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {name}
            </button>
          ))}
        </div>
      </form>

      {result && (
        <div aria-live="polite" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              {isExample ? (
                <>
                  {`Showing example profile for `}
                  <span className="font-semibold text-foreground">{result.profile.name}</span>
                  {` — "${result.searched}" coming soon.`}
                </>
              ) : (
                <>
                  {'Profile for '}
                  <span className="font-semibold text-foreground">{result.profile.name}</span>
                </>
              )}
            </p>
            <button
              type="button"
              onClick={() => {
                setResult(null)
                setQuery('')
              }}
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Reset
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
            <StyleBreakdown profile={result.profile} />
            <TrainingProgram profile={result.profile} />
          </div>
        </div>
      )}
    </section>
  )
}
