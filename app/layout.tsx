import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreshMoveLeads — Exclusive New Homeowner Leads in Pittsburgh',
  description:
    'Get weekly lists of new homeowners in Pittsburgh who just moved into your service area. Exclusive leads per category — lawn care, HVAC, cleaning, pest control, and more. No contract, cancel anytime.',
  keywords: [
    'new homeowner leads Pittsburgh',
    'exclusive leads Pittsburgh',
    'lawn care leads',
    'HVAC leads Pittsburgh',
    'house cleaning leads',
    'pest control leads Pittsburgh',
    'local service leads',
  ],
  openGraph: {
    title: 'FreshMoveLeads — Exclusive New Homeowner Leads in Pittsburgh',
    description:
      'Weekly leads. Exclusive per category. No contract. One new customer pays for months of service.',
    url: 'https://freshmoveleads.com',
    siteName: 'FreshMoveLeads',
    type: 'website',
  },
  metadataBase: new URL('https://freshmoveleads.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
