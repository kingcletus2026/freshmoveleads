'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do you find the new homeowners?',
    answer:
      'We monitor public home sale records and deed transfers across the Pittsburgh metro area daily. When a home sells and closes, we gather the new owner\'s name, address, and estimated move-in date. No scraping, no spam lists — all public record data.',
  },
  {
    question: 'What does "exclusive per category" mean?',
    answer:
      'We only sell each lead list to one company per service category per zip zone. If you\'re a lawn care company in Zone A, you\'re the only lawn care company getting those leads. Your competitors don\'t get the same list.',
  },
  {
    question: 'How many leads will I actually get?',
    answer:
      'Pittsburgh sees 1,000+ home sales per month across the metro area. The Starter plan (1 zip zone) gives you up to 50 leads/month. The Growth plan (3 zip zones) gives you up to 150 leads/month. Volume depends on your specific zones — denser areas produce more leads.',
  },
  {
    question: 'What\'s the ROI? Is it worth the money?',
    answer:
      'Do the math: if you\'re a lawn care company charging $150/month per customer, you only need to land ONE new client to pay for 1.5 months of the Starter plan. New homeowners are the best time to get them — they need everything set up fresh and haven\'t picked their vendors yet.',
  },
  {
    question: 'Can I cancel if it\'s not working?',
    answer:
      'Yes. No contracts, no cancellation fees. Cancel anytime from your account dashboard and you won\'t be charged again. We want you to stay because you\'re getting results, not because you\'re locked in.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-navy-700 pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === idx ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 bg-white">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
