import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Developers — Build on the MusicOSY API",
  description:
    "MusicOSY APIs for catalog, playback, rights, commerce and reporting, with scoped tokens, webhooks and the same rule enforcement as the product surfaces.",
  openGraph: {
    title: "Developers — Build on the MusicOSY API",
    description:
      "MusicOSY APIs for catalog, playback, rights, commerce and reporting, with scoped tokens, webhooks and the same rule enforcement as the product surfaces.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function DevelopersPage() {
  return (
    <PageLayout
      eyebrow="Developers"
      title="The API enforces the same rules the product does."
      lead="MusicOSY exposes catalog, playback, rights, commerce and reporting through scoped APIs. A restricted work is not deliverable through an endpoint just because it was requested programmatically — developer context is a context, not a bypass."
      cta={{ label: "Request API access", href: "/signup" }}
      stats={[
        { v: "Scoped", l: "Tokens" },
        { v: "Webhooks", l: "Event driven" },
        { v: "Same rules", l: "Every context" },
      ]}
      sections={[
        {
          heading: "APIs",
          items: [
            { title: "Catalog", detail: "Read releases, tracks, works, credits and availability." },
            { title: "Rights & royalties", detail: "Shares, statements and payout events." },
            { title: "Commerce", detail: "Products, orders, memberships and fulfilment state." },
            { title: "Reporting", detail: "Push streaming and revenue data into your own tooling." },
          ],
        },
        {
          heading: "Platform behaviour",
          items: [
            { title: "Context-aware auth", detail: "Act as a person, a workspace or a system — never ambiguously." },
            { title: "Idempotent writes", detail: "Safe retries on release, order and payout operations." },
            { title: "Webhooks", detail: "Subscribe to delivery, moderation, order and payout events." },
            { title: "Rate and scope limits", detail: "Predictable quotas per token and per workspace." },
          ],
        },
      ]}
      ctaHeading="Request API access."
      ctaBody="Create an account and generate a scoped developer token."
    />
  );
}
