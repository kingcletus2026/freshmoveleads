# FreshMoveLeads Site

Landing page for FreshMoveLeads — exclusive new homeowner leads for Pittsburgh local service businesses.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Stripe** (subscriptions)
- **Vercel** (deployment)

## Local Development

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local
# Fill in your Stripe keys

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_live_...` or `sk_test_...`) |
| `STRIPE_STARTER_PRICE_ID` | Stripe Price ID for the $99/mo Starter plan |
| `STRIPE_GROWTH_PRICE_ID` | Stripe Price ID for the $199/mo Growth plan |
| `NEXT_PUBLIC_BASE_URL` | Your site URL (e.g. `https://freshmoveleads.com`) |

## Stripe Setup

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Create two products:
   - **FreshMoveLeads Starter** — $99/month recurring → copy the Price ID
   - **FreshMoveLeads Growth** — $199/month recurring → copy the Price ID
3. Add the Price IDs to your `.env.local`

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo in the [Vercel dashboard](https://vercel.com) and it auto-deploys on push.

**Add environment variables** in Vercel Dashboard → Project → Settings → Environment Variables.

## Project Structure

```
app/
  page.tsx              # Main landing page
  layout.tsx            # Root layout + metadata
  globals.css           # Global styles + Tailwind
  success/
    page.tsx            # Post-checkout success page
  api/
    create-checkout/
      route.ts          # Stripe checkout API route
components/
  PricingCard.tsx       # Pricing card with Stripe checkout
  FAQ.tsx               # Accordion FAQ component
```

## Customization

- **Colors:** Edit `tailwind.config.js` — primary is `navy-700` (#1e3a5f), CTA is `green-500` (#22c55e)
- **Copy:** Edit `app/page.tsx` directly — all copy is inline
- **FAQ questions:** Edit `components/FAQ.tsx` — the `faqs` array at the top
- **Pricing features:** Edit `app/page.tsx` — `starterFeatures` and `growthFeatures` arrays
- **Contact email:** Search `hello@freshmoveleads.com` and replace with your real email
