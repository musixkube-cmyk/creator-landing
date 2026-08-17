import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "News — MusicOSY Platform Updates and Announcements",
  description:
    "Platform releases, policy changes, distribution updates and product announcements from MusicOSY.",
  openGraph: {
    title: "News — MusicOSY Platform Updates and Announcements",
    description:
      "Platform releases, policy changes, distribution updates and product announcements from MusicOSY.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function NewsPage() {
  return (
    <PageLayout
      eyebrow="News"
      title="What changed on the platform, and why."
      lead="Product releases, distribution pipeline changes, policy updates and rights-engine revisions are published here. When a rule changes, we say which rule, what it affects and when it takes effect."
      cta={{ label: "Subscribe to updates", href: "/signup" }}
      stats={[
        { v: "Versioned", l: "Policy changes" },
        { v: "Dated", l: "Rule effect" },
        { v: "Public", l: "Changelog" },
      ]}
      sections={[
        {
          heading: "What we publish",
          items: [
            { title: "Product releases", detail: "New surfaces and capabilities across creator and fan tools." },
            { title: "Distribution updates", detail: "New destinations, delivery improvements and territory changes." },
            { title: "Policy & rules", detail: "Changes to eligibility, safety, rights or accounting behaviour." },
            { title: "Platform status", detail: "Incidents, resolutions and follow-up actions." },
          ],
        },
        {
          heading: "Latest",
          body: "The changelog goes live with the public launch.",
          items: [
            { title: "In-house distribution", detail: "MusicOSY now delivers releases itself, end to end." },
            { title: "Unified rules engine", detail: "One decision layer across listening, catalog, commerce and rights." },
            { title: "Automated splits", detail: "Collaborator payouts run on the same ledger as streaming revenue." },
            { title: "Developer APIs", detail: "Scoped tokens with the same enforcement as product surfaces." },
          ],
        },
      ]}
      ctaHeading="Get platform updates by email."
      ctaBody="We send release notes and policy changes — nothing else."
    />
  );
}
