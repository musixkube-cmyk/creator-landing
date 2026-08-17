import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Ads & Business — Advertise and Partner with MusicOSY",
  description:
    "Reach MusicOSY listeners with audio, display and sponsorship inventory, or partner with the platform as a brand, venue, retailer or service provider.",
  openGraph: {
    title: "Ads & Business — Advertise and Partner with MusicOSY",
    description:
      "Reach MusicOSY listeners with audio, display and sponsorship inventory, or partner with the platform as a brand, venue, retailer or service provider.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function AdsBusinessPage() {
  return (
    <PageLayout
      eyebrow="Ads & business"
      title="Reach an audience defined by what it actually listens to."
      lead="MusicOSY advertising is built on first-party behaviour inside the platform: listening, saving, buying, attending. Campaigns are measured against the same ledger that reports artist revenue, so performance claims are checkable rather than modelled."
      cta={{ label: "Advertise with us", href: "/signup" }}
      stats={[
        { v: "First-party", l: "Audience data" },
        { v: "Audio & display", l: "Inventory" },
        { v: "Measured", l: "Against real orders" },
      ]}
      sections={[
        {
          heading: "Advertising",
          items: [
            { title: "Audio inventory", detail: "In-session spots across listening and podcast surfaces." },
            { title: "Sponsorships", detail: "Artist-safe placements on releases, events and editorial surfaces." },
            { title: "Audience targeting", detail: "Genre, city, behaviour and fandom segments — no third-party trackers." },
            { title: "Attribution", detail: "Ticket, merch and membership conversions tied to campaigns." },
          ],
        },
        {
          heading: "Business partnerships",
          items: [
            { title: "Brands", detail: "Campaign collaborations with artists who opt in." },
            { title: "Venues & promoters", detail: "Event inventory, presales and audience reach by market." },
            { title: "Retail & merch", detail: "Fulfilment and product partnerships across artist storefronts." },
            { title: "Service providers", detail: "Integrations that plug into the platform's rules, not around them." },
          ],
        },
      ]}
      ctaHeading="Talk to the MusicOSY business team."
      ctaBody="Leave your email and we will get back to you with inventory and partnership options."
    />
  );
}
