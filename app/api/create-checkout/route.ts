import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY

  // If no Stripe key, return a stub response (dev/preview mode)
  if (!stripeKey) {
    return NextResponse.json(
      {
        error:
          'Stripe is not configured. Set STRIPE_SECRET_KEY in your environment variables.',
      },
      { status: 503 }
    )
  }

  let body: { priceId?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { priceId } = body

  if (!priceId) {
    return NextResponse.json({ error: 'priceId is required' }, { status: 400 })
  }

  // Validate that the priceId matches one of our expected plans
  const validPriceIds = [
    process.env.STRIPE_STARTER_PRICE_ID,
    process.env.STRIPE_GROWTH_PRICE_ID,
  ].filter(Boolean)

  if (validPriceIds.length > 0 && !validPriceIds.includes(priceId)) {
    return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
  }

  try {
    // Dynamic import to avoid build errors when stripe isn't installed yet
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (req.headers.get('origin') ?? 'https://freshmoveleads.net')

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      customer_creation: 'always',
      metadata: {
        priceId,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Checkout failed'
    console.error('[create-checkout] Stripe error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
