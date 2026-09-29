import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex min-h-11 items-center gap-2.5" aria-label="KRU home">
      <span
        aria-hidden="true"
        className="flex size-9 -skew-x-6 items-center justify-center rounded-md bg-primary font-display text-xl text-primary-foreground"
      >
        K
      </span>
      <span className="font-display text-2xl tracking-wide">
        KRU<span className="text-primary">.</span>
      </span>
    </Link>
  )
}
