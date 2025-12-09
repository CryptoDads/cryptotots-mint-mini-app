const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjQ3MDU3OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDczREY2RmIzNTE3YWVFMDFlNjliRmE5ZjdkMjk2RTViQ0JCOTk5N2QifQ",
    payload: "eyJkb21haW4iOiJjcnlwdG90b3RzLW1pbnQtbWluaS1hcHAudmVyY2VsLmFwcCJ9",
    signature: "/X5crJsn1DcaAjoXKzsi0jjC8VXK+q/JKol9YR4/7ZwSRNkIf9AtJBbqDQySNx0MZxtUQ0bZK34TZI6Fxofn3Rw="
  },
  miniapp: {
    version: "1",
    name: "CryptoTots Minting Site", 
    subtitle: "Wen Tots?", 
    description: "Three years in the making, CryptoTots are finally here!",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "art-creativity",
    tags: ["nft", "minting", "crypto", "tots"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "Wen Tots?",
    ogTitle: "CryptoTots Minting Site",
    ogDescription: "Three years in the making, CryptoTots are finally here!",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

