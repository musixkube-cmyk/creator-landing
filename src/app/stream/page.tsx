import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Stream on MusicOSY — Continuous Listening Built on One Catalog",
  description:
    "MusicOSY streaming: continuous sessions, setlists, discovery and rights-consistent playback across web, mobile and connected devices.",
  openGraph: {
    title: "Stream on MusicOSY — Continuous Listening Built on One Catalog",
    description:
      "MusicOSY streaming: continuous sessions, setlists, discovery and rights-consistent playback across web, mobile and connected devices.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function StreamPage() {
  return (
    <PageLayout
      eyebrow="Stream"
      title="Playback that never contradicts itself."
      lead="MusicOSY streaming runs on the same catalog, rights and eligibility rules as the rest of the platform. What is available in Listen is available in Discover, in search, in a setlist and through the API — or it is available in none of them."
      cta={{ label: "Open the player", href: "/signup" }}
      stats={[
        { v: "Continuous", l: "Session model" },
        { v: "Rights-consistent", l: "Availability" },
        { v: "Cross-device", l: "Playback" },
      ]}
      sections={[
        {
          heading: "The listening surface",
          items: [
            { title: "Continuous sessions", detail: "Playback state carries across devices and surfaces." },
            { title: "Setlists", detail: "Collaborative, shareable collections with live ordering." },
            { title: "Discover", detail: "Editorial and community surfaces alongside algorithmic ones." },
            { title: "Offline & queue", detail: "Predictable queue behaviour and offline availability rules." },
          ],
        },
        {
          heading: "Why it matters for artists",
          items: [
            { title: "One reporting chain", detail: "Plays feed the same ledger that pays your splits." },
            { title: "Fan identity attached", detail: "Listening informs your CRM segments, not a black box." },
            { title: "Instant availability changes", detail: "Takedowns and windows apply immediately across surfaces." },
            { title: "No shadow catalog", detail: "The record streaming uses is the record you uploaded." },
          ],
        },
      ]}
      ctaHeading="Start listening on MusicOSY."
      ctaBody="Create an account and pick up where your last session left off."
    />
  );
}
