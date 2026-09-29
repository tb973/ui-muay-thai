export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span aria-hidden="true" className="h-px w-6 bg-primary" />
      {children}
    </p>
  )
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-3 pb-6 pt-2 md:pb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-wide text-balance md:text-7xl">
        {title}
      </h1>
      <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  )
}
