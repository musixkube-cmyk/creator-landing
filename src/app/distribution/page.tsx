import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Distribution — MusicOSY Delivers Your Music Itself",
  description:
    "MusicOSY is its own distributor: DDEX-grade delivery, territory routing, ISRC/UPC issuance, redelivery and takedowns handled in-platform with no third-party middleman.",
  openGraph: {
    title: "Distribution — MusicOSY Delivers Your Music Itself",
    description:
      "MusicOSY is its own distributor: DDEX-grade delivery, territory routing, ISRC/UPC issuance, redelivery and takedowns handled in-platform with no third-party middleman.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function DistributionPage() {
  return (
    <PageLayout
      eyebrow="Distribution"
      title="We are the distributor. Not a dashboard on top of one."
      lead="MusicOSY delivers releases itself. Ingestion, validation, identifier issuance, delivery, redelivery and takedown are platform operations, which means the metadata you enter, the rights you register and the money that comes back are all the same record — not three systems reconciled after the fact."
      cta={{ label: "Start distributing", href: "/signup" }}
      stats={[
        { v: "In-house", l: "Delivery pipeline" },
        { v: "DDEX", l: "Grade metadata" },
        { v: "Self-serve", l: "Takedown & redelivery" },
      ]}
      sections={[
        {
          heading: "Delivery",
          body: "One release record, routed to every destination.",
          items: [
            { title: "Territory routing", detail: "Per-territory availability, windows and staggered rollouts." },
            { title: "Identifiers", detail: "ISRC and UPC issued by the platform, never rented back to you." },
            { title: "Validation before send", detail: "Artwork, audio, credits and rights checked at ingest, not on rejection." },
            { title: "Redelivery", detail: "Fix metadata and push updates without opening a ticket." },
          ],
        },
        {
          heading: "Because it is in-house",
          items: [
            { title: "No split accounting", detail: "Delivery data and royalty data come from the same ledger." },
            { title: "No exclusivity", detail: "Non-exclusive terms; you keep and can move your masters." },
            { title: "Faster corrections", detail: "Catalog operations are platform actions, not partner requests." },
            { title: "One rulebook", detail: "Rights restrictions apply to distribution, playback and APIs identically." },
          ],
        },
      ]}
      ctaHeading="Deliver your next release through MusicOSY."
    />
  );
}
