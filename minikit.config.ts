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
    header: "",
    payload: "",
    signature: ""
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
    primaryCategory: "collectibles",
    tags: ["nft", "minting", "crypto", "tots"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "Wen Tots?",
    ogTitle: "CryptoTots Minting Site",
    ogDescription: "Three years in the making, CryptoTots are finally here!",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

