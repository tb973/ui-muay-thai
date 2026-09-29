'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils'

const CALLS = ['Jab', 'Cross', 'Jab, cross', 'Teep', 'Jab, cross, jab', 'Check', 'Double jab', 'Cross, teep']
const ROUND_SECONDS = 180
const paces = [
  { label: 'Easy', seconds: 5 },
  { label: 'Steady', seconds: 4 },
  { label: 'Fast', seconds: 3 },
] as const

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function randomCall(prev?: string) {
  let next = CALLS[Math.floor(Math.random() * CALLS.length)]
  while (next === prev) next = CALLS[Math.floor(Math.random() * CALLS.length)]
  return next
}

export function PadRound() {
  const [remaining, setRemaining] = useState(ROUND_SECONDS)
  const [running, setRunning] = useState(false)
  const [pace, setPace] = useState<number>(4)
  const [call, setCall] = useState('Ready')
  const [callCount, setCallCount] = useState(0)
  const [voice, setVoice] = useState(true)
  const tick = useRef(0)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setRunning(false)
          setCall('Time')
          return 0
        }
        return r - 1
      })
      tick.current += 1
      if (tick.current % pace === 0) {
        setCall((prev) => randomCall(prev))
        setCallCount((c) => c + 1)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [running, pace])

  useEffect(() => {
    if (!voice || call === 'Ready' || typeof window === 'undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(call))
  }, [call, callCount, voice])

  const start = () => {
    if (remaining === 0) reset()
    if (call === 'Ready' || call === 'Time') {
      setCall(randomCall())
      setCallCount((c) => c + 1)
    }
    setRunning(true)
  }

  const reset = () => {
    setRunning(false)
    setRemaining(ROUND_SECONDS)
    setCall('Ready')
    setCallCount(0)
    tick.current = 0
  }

  const progress = 1 - remaining / ROUND_SECONDS

  return (
    <div className="flex flex-col gap-4">
      <section
        aria-label="Round"
        className="relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 md:py-14"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-muted">
          <div className="h-full bg-primary transition-[width] duration-1000 ease-linear" style={{ width: `${progress * 100}%` }} />
        </div>

        <div className="flex w-full items-center justify-between text-sm">
          <span className="font-semibold uppercase tracking-widest text-muted-foreground">Round 1</span>
          <span className="font-semibold text-muted-foreground">{callCount} calls</span>
        </div>

        <p className="font-display text-8xl tabular-nums leading-none tracking-wide md:text-9xl" aria-label="Time remaining">
          {formatTime(remaining)}
        </p>

        <div
          aria-live="assertive"
          className={cn(
            'flex min-h-28 w-full items-center justify-center rounded-2xl px-4 text-center',
            running ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground',
          )}
        >
          <p key={callCount} className="animate-call-pop font-display text-4xl uppercase tracking-wide md:text-5xl">
            {call}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={reset}
            aria-label="Reset round"
            className="flex size-14 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={running ? () => setRunning(false) : start}
            aria-label={running ? 'Pause round' : 'Start round'}
            className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary transition-transform active:scale-95"
          >
            {running ? (
              <Pause className="size-8 fill-current" aria-hidden="true" />
            ) : (
              <Play className="ml-1 size-8 fill-current" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setVoice((v) => !v)}
            aria-label={voice ? 'Mute voice calls' : 'Enable voice calls'}
            aria-pressed={voice}
            className="flex size-14 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            {voice ? <Volume2 className="size-5" aria-hidden="true" /> : <VolumeX className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </section>

      <fieldset className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-5">
        <legend className="sr-only">Call pace</legend>
        <p className="text-sm font-medium text-muted-foreground" aria-hidden="true">
          Call pace
        </p>
        <div className="grid grid-cols-3 gap-2">
          {paces.map((p) => (
            <button
              key={p.label}
              type="button"
              aria-pressed={pace === p.seconds}
              onClick={() => setPace(p.seconds)}
              className={cn(
                'flex min-h-14 flex-col items-center justify-center rounded-2xl border text-sm font-semibold transition-colors',
                pace === p.seconds
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-border text-foreground hover:border-primary/60',
              )}
            >
              {p.label}
              <span className="text-xs font-normal text-muted-foreground">every {p.seconds}s</span>
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
