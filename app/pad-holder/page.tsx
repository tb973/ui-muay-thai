import type { Metadata } from 'next'
import { PageHeading } from '@/components/page-heading'
import { PadRound } from '@/components/pad-holder/pad-round'

export const metadata: Metadata = {
  title: 'Pad holder | KRU',
  description: 'Hear pad calls and work through a solo Muay Thai round.',
}

export default function PadHolderPage() {
  return (
    <div className="mx-auto max-w-xl">
      <PageHeading
        eyebrow="Solo round"
        title="Pad holder"
        description="Press play and throw what you hear. Keep strikes controlled and return to guard every time."
      />
      <PadRound />
    </div>
  )
}
