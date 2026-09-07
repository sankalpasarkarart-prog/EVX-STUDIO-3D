import { Inter, Outfit, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-cursive" });

export const metadata = {
  title: "EVX STUDIO — Best Video Editing and Post Production Company in India",
  description: "EVX STUDIO is the best Video Editing and Post Production Company in India with 15+ professional video editors.",
  keywords: ["video editing", "post production company", "best video editor in India", "EVX STUDIO"],
  authors: [{ name: "ESHAN (Sankalpa Sarkar) — EVX STUDIO" }],
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  metadataBase: new URL("https://www.evxstudio.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.evxstudio.in/",
    title: "EVX STUDIO — Premium Video Editing & Media Production | From $15",
    description: "15+ skilled editors crafting YouTube shorts, corporate videos, SaaS animations & more. Plans from only $15.",
    siteName: "EVX STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVX STUDIO — Premium Video Editing & Media Production | From $15",
  },
};

import Background3D from "@/components/Background3D";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable} js-loaded`}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body>
        <Background3D />
        {children}
        <Script src="/script.js" strategy="afterInteractive" />
        <Script src="/cart.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

