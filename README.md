# thirdweb Ecosystem Wallets with social profiles

This is an example app that shows how to connect a thirdweb Ecosystem Wallet to a social profiles.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

Create a `.env.local` file with the following variables. You can copy these from the `.env.example` file:

```bash
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your-thirdwebclient-id
NEXT_PUBLIC_ECOSYSTEM_WALLET_NAME=your-thirdweb-ecosystem-wallet-name
NEXT_PUBLIC_PARTNER_ID=your-thirdweb-partner-id

```

Make sure to replace the placeholder values with your actual credentials. Remember to never commit your `.env.local` file to version control.
