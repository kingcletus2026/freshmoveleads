export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-navy-700 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-4">
          You&apos;re In!
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Your zone is locked in. We&apos;ll send your first lead list next
          Monday morning.
        </p>
        <p className="text-gray-400 mb-10">
          Check your email for your confirmation and account details. If you
          have any questions, reach us at{' '}
          <a
            href="mailto:hello@freshmoveleads.com"
            className="text-green-400 hover:text-green-300"
          >
            hello@freshmoveleads.com
          </a>
          .
        </p>

        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}
