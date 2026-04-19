import PricingCard from '@/components/PricingCard'
import FAQ from '@/components/FAQ'

const starterFeatures = [
  { text: '1 zip zone covered', included: true },
  { text: 'Up to 50 new homeowner leads/month', included: true },
  { text: 'Weekly email delivery every Monday', included: true },
  { text: 'Name, address & move-in date per lead', included: true },
  { text: 'Exclusive — no competitors in your category', included: true },
  { text: 'Cancel anytime, no fees', included: true },
  { text: 'Multi-zone coverage', included: false },
  { text: 'Priority zone selection', included: false },
]

const growthFeatures = [
  { text: '3 zip zones covered', included: true },
  { text: 'Up to 150 new homeowner leads/month', included: true },
  { text: 'Weekly email delivery every Monday', included: true },
  { text: 'Name, address & move-in date per lead', included: true },
  { text: 'Exclusive — no competitors in your category', included: true },
  { text: 'Cancel anytime, no fees', included: true },
  { text: 'Multi-zone coverage', included: true },
  { text: 'Priority zone selection', included: true },
]

const serviceCategories = [
  { icon: '🌿', label: 'Lawn Care' },
  { icon: '❄️', label: 'HVAC' },
  { icon: '🧹', label: 'House Cleaning' },
  { icon: '🐜', label: 'Pest Control' },
  { icon: '🎨', label: 'Painters' },
  { icon: '🔒', label: 'Home Security' },
]

const stats = [
  { value: '1,000+', label: 'New homeowners/month in Pittsburgh' },
  { value: '1 per zone', label: 'Exclusive per service category' },
  { value: '$0', label: 'Setup fees or contracts' },
]

const steps = [
  {
    number: '01',
    title: 'We track home sales',
    description:
      'Every day we pull fresh deed transfers and home sale records across the Pittsburgh metro. New closings hit our system within 24–48 hours.',
  },
  {
    number: '02',
    title: 'We find their contact info',
    description:
      'We match each new homeowner to available contact data — name, move-in address, and estimated move-in date. No cold lists, no stale data.',
  },
  {
    number: '03',
    title: 'You get weekly leads',
    description:
      'Every Monday morning you receive a clean list of new homeowners in your service zones. Reach them before anyone else does.',
  },
]

export default function Home() {
  const starterPriceId =
    process.env.STRIPE_STARTER_PRICE_ID ?? 'price_starter_placeholder'
  const growthPriceId =
    process.env.STRIPE_GROWTH_PRICE_ID ?? 'price_growth_placeholder'

  return (
    <main className="min-h-screen">
      {/* ─── NAV ─────────────────────────────────────────────── */}
      <nav className="bg-navy-700 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              FreshMoveLeads
            </span>
          </div>
          <a
            href="#pricing"
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            See Plans
          </a>
        </div>
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-navy-700 text-white pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-navy-600 border border-navy-500 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Now serving Pittsburgh metro area
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Get Exclusive New Homeowner{' '}
            <span className="text-green-400">Leads in Pittsburgh</span>
          </h1>

          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Every week, we deliver a fresh list of new homeowners in your service
            area — people who just moved in and need exactly what you offer.
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Exclusive per category. One job can pay for months of service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              Start Getting Leads — $99/mo
            </a>
            <a
              href="#how-it-works"
              className="border border-navy-400 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            >
              See How It Works
            </a>
          </div>

          {/* Service categories */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {serviceCategories.map((cat) => (
              <span
                key={cat.label}
                className="flex items-center gap-2 bg-navy-600 border border-navy-500 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                <span>{cat.icon}</span>
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="bg-green-500 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-green-100 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple. Automated. Delivered to your inbox every Monday.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-4 z-0" />
                )}
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="text-5xl font-extrabold text-gray-100 mb-4 leading-none select-none">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / VALUE PROP ────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Reach Homeowners Before Anyone Else
            </h2>
            <p className="section-subtitle">
              New homeowners are the most valuable leads you can get. They need
              everything — and they haven&apos;t picked their vendors yet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-700 text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Truly Exclusive</h3>
              <p className="text-gray-300 leading-relaxed">
                When you lock in a zone for your category, it&apos;s yours. We
                won&apos;t sell the same leads to another lawn care company, HVAC
                company, or cleaner in that zone. Your competition doesn&apos;t
                get this list.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">
                The ROI Is Obvious
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A single new lawn care customer at $150/month pays for your entire
                Starter subscription for 1.5 months. Land two customers and
                you&apos;re profitable for the year. These aren&apos;t leads —
                they&apos;re people actively looking for services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">
                Fresh Data Every Week
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Not a recycled database. Not a year-old list. Real home sales that
                closed this week, delivered Monday morning. Hit them while
                they&apos;re still setting up — before they&apos;ve found anyone
                else.
              </p>
            </div>

            <div className="bg-navy-700 text-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">No Lock-In</h3>
              <p className="text-gray-300 leading-relaxed">
                Month-to-month. Cancel anytime with one click. We&apos;re not
                trying to trap you — we just want to earn your business every
                month by delivering real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Pick your zone size. No setup fees, no long-term contracts. Zones
              are first-come, first-served — once a category is taken in a zone,
              it&apos;s gone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              name="Starter"
              price={99}
              description="Perfect for a single-location service business"
              features={starterFeatures}
              priceId={starterPriceId}
            />
            <PricingCard
              name="Growth"
              price={199}
              description="Cover more territory, get more leads"
              features={growthFeatures}
              priceId={growthPriceId}
              highlighted
              badge="Most Popular"
            />
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Zones are exclusive. First to sign up owns the category in that zone.{' '}
            <strong className="text-navy-700">Don&apos;t wait.</strong>
          </p>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Real questions from real business owners.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-24 px-4 bg-navy-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Start Getting Leads Today
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            New homeowners are moving into Pittsburgh every week. Every week you
            wait is leads going to someone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="bg-green-500 hover:bg-green-400 text-white font-bold px-12 py-5 rounded-xl text-lg transition-colors duration-200"
            >
              Get Started — $99/month
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No contract. Cancel anytime. Zones fill up fast.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-navy-900 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">
                FreshMoveLeads
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <a
                href="mailto:info@freshmoveleads.net"
                className="hover:text-white transition-colors"
              >
                info@freshmoveleads.net
              </a>
              <span className="hidden sm:inline">·</span>
              <span>Pittsburgh, PA</span>
              <span className="hidden sm:inline">·</span>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-navy-800 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} FreshMoveLeads. All rights reserved.
            Pittsburgh, PA.
          </div>
        </div>
      </footer>
    </main>
  )
}
