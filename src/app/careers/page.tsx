import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Careers at MusicOSY — Build the Platform Music Runs On",
  description:
    "Join MusicOSY: engineering, product, design, rights, operations, trust and safety roles building one unified platform for music culture and business.",
  openGraph: {
    title: "Careers at MusicOSY — Build the Platform Music Runs On",
    description:
      "Join MusicOSY: engineering, product, design, rights, operations, trust and safety roles building one unified platform for music culture and business.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CareersPage() {
  return (
    <PageLayout
      eyebrow="Careers"
      title="Build the system, not another app."
      lead="MusicOSY is one platform covering listening, creation, distribution, rights, commerce, live and finance. The work is unusually deep: the decisions you ship apply identically across every surface, so correctness matters more here than shipping another silo."
      cta={{ label: "View open roles", href: "/signup" }}
      stats={[
        { v: "Remote-first", l: "How we work" },
        { v: "Small teams", l: "Wide ownership" },
        { v: "Hiring", l: "Selectively" },
      ]}
      sections={[
        {
          heading: "Where we hire",
          items: [
            { title: "Engineering", detail: "Platform, delivery pipeline, playback, payments and APIs." },
            { title: "Product & design", detail: "Systems design across creator, fan and workspace surfaces." },
            { title: "Rights & royalties", detail: "Publishing administration, accounting and audit correctness." },
            { title: "Trust & safety", detail: "Moderation policy, enforcement tooling and appeals." },
          ],
        },
        {
          heading: "How we work",
          items: [
            { title: "Rules before features", detail: "Behaviour is specified once and enforced everywhere." },
            { title: "Own the outcome", detail: "Ship it, operate it, answer for it." },
            { title: "Artist-side bias", detail: "When in doubt, favour the person who made the record." },
            { title: "Written culture", detail: "Decisions are documented so they can be challenged." },
          ],
        },
      ]}
      ctaHeading="Introduce yourself."
      ctaBody="Leave your email and tell us what you would own here."
    />
  );
}
