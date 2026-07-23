# Club72 Gym OneLink

Premium, mobile-first OneLink for Club72 Gym with facilities, memberships,
trial booking, trainers, gallery, payments, and Google Reviews.

## Local development

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm build
pnpm start
```

## Live Google Reviews

Copy `.env.local.example` to `.env.local` and add:

```text
GOOGLE_PLACES_API_KEY=YOUR_GOOGLE_PLACES_API_KEY
NEXT_PUBLIC_GOOGLE_PLACE_ID=YOUR_CLUB72_GOOGLE_PLACE_ID
```

Without these values, the reviews UI uses its safe fallback. After both
variables are added in Vercel and the project is redeployed, the homepage and
reviews page automatically switch to live Google rating and review data.

## Vercel

Import `ygvy6tf6tv78/72club_gym-onelink` in Vercel. The included
`vercel.json` uses pnpm and the standard Next.js build output.
