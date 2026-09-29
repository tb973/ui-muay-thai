import type { Metadata } from 'next'
import { Film } from 'lucide-react'
import { Eyebrow, PageHeading } from '@/components/page-heading'
import { VideoForm } from '@/components/video/video-form'

export const metadata: Metadata = {
  title: 'Video to practice | KRU',
  description: 'Turn a YouTube Muay Thai clip into a controlled practice plan.',
}

export default function VideoPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-12">
      <div className="flex flex-col gap-6">
        <PageHeading
          eyebrow="Video to practice"
          title="See the move. Learn the sequence."
          description="Paste a short public YouTube clip. KRU marks the moments it can identify and builds a controlled practice plan."
        />
      </div>
      <div className="flex flex-col gap-8">
        <VideoForm />
        <section aria-labelledby="plans-title" className="flex flex-col gap-4">
          <Eyebrow>Your video plans</Eyebrow>
          <h2 id="plans-title" className="sr-only">
            Your video plans
          </h2>
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-border px-6 py-10 text-center">
            <Film className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">Your analyzed videos will appear here.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
