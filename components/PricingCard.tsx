'use client'

import { useState } from 'react'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: PricingFeature[]
  priceId: string
  highlighted?: boolean
  badge?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  priceId,
  highlighted = false,
  badge,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        highlighted
          ? 'bg-navy-700 text-white shadow-2xl ring-2 ring-green-500'
          : 'bg-white text-gray-900 shadow-lg border border-gray-100'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-1 ${
            highlighted ? 'text-white' : 'text-navy-700'
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-sm ${highlighted ? 'text-navy-200' : 'text-gray-500'}`}
        >
          {description}
        </p>
      </div>

      <div className="mb-8">
        <span
          className={`text-5xl font-extrabold ${
            highlighted ? 'text-white' : 'text-navy-700'
          }`}
        >
          ${price}
        </span>
        <span
          className={`text-lg ml-1 ${
            highlighted ? 'text-navy-200' : 'text-gray-500'
          }`}
        >
          /month
        </span>
        <p
          className={`text-sm mt-1 ${
            highlighted ? 'text-green-400' : 'text-green-600'
          }`}
        >
          No contract — cancel anytime
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            {feature.included ? (
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className={`w-5 h-5 mt-0.5 shrink-0 ${
                  highlighted ? 'text-navy-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span
              className={`text-sm ${
                feature.included
                  ? highlighted
                    ? 'text-gray-100'
                    : 'text-gray-700'
                  : highlighted
                  ? 'text-navy-400'
                  : 'text-gray-400'
              }`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {error && (
        <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
      )}

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-4 rounded-lg font-semibold text-base transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
          highlighted
            ? 'bg-green-500 hover:bg-green-400 text-white'
            : 'bg-navy-700 hover:bg-navy-600 text-white'
        }`}
      >
        {loading ? 'Loading...' : 'Get Started'}
      </button>
    </div>
  )
}
