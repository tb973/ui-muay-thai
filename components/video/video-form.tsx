'use client'

import { useState } from 'react'
import { ArrowRight, Link2, ScanLine, Telescope } from 'lucide-react'
import { cn } from '@/lib/utils'

const scans = [
  { id: 'quick', label: 'Quick scan', hint: 'Clips under 5 minutes', icon: ScanLine },
  { id: 'deep', label: 'Deep scan', hint: 'Longer videos, takes more time', icon: Telescope },
] as const

const YOUTUBE = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com|youtu\.be)\/.+/i

export function VideoForm() {
  const [url, setUrl] = useState('')
  const [scan, setScan] = useState<(typeof scans)[number]['id']>('quick')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!YOUTUBE.test(url.trim())) {
      setError('Paste a YouTube video or Short link.')
      return
    }
    setError(null)
    setSubmitted(true)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-5 md:p-8" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="video-url" className="text-sm font-medium">
          YouTube Short or video link
        </label>
        <div
          className={cn(
            'flex items-center gap-3 rounded-2xl border bg-background px-4 focus-within:border-primary',
            error ? 'border-destructive' : 'border-input',
          )}
        >
          <Link2 className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            id="video-url"
            type="url"
            inputMode="url"
            autoComplete="off"
            placeholder="https://youtube.com/shorts/..."
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setSubmitted(false)
            }}
            aria-invalid={!!error}
            aria-describedby={error ? 'video-url-error' : undefined}
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/60"
          />
        </div>
        {error && (
          <p id="video-url-error" className="text-sm text-destructive">
            {error}
          </p>
        )}
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-sm font-medium">Choose a scan</legend>
        <div className="grid grid-cols-2 gap-2">
          {scans.map((s) => {
            const Icon = s.icon
            const selected = scan === s.id
            return (
              <label
                key={s.id}
                className={cn(
                  'flex cursor-pointer flex-col gap-2 rounded-2xl border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                  selected ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/60',
                )}
              >
                <input
                  type="radio"
                  name="scan"
                  value={s.id}
                  checked={selected}
                  onChange={() => setScan(s.id)}
                  className="sr-only"
                />
                <Icon className={cn('size-5', selected ? 'text-primary' : 'text-muted-foreground')} aria-hidden="true" />
                <span className="font-semibold">{s.label}</span>
                <span className="text-xs leading-relaxed text-muted-foreground">{s.hint}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <button
        type="submit"
        className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground transition-transform active:scale-[0.98]"
      >
        Analyze movements
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>

      <p aria-live="polite" className="text-pretty text-center text-sm leading-relaxed text-muted-foreground">
        {submitted
          ? 'Link received. Sign in to run the analysis and save the plan to your history.'
          : 'Try a clear clip of one or two moves first. Review the marked moments before trying a move.'}
      </p>
    </form>
  )
}
