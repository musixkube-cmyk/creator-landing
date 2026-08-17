import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "About MusicOSY — One Platform for Music Culture and Business",
  description:
    "MusicOSY is a single platform for listening, creation, publishing, catalog, commerce, live, marketing, rights and finance — governed by one consistent rules engine.",
  openGraph: {
    title: "About MusicOSY — One Platform for Music Culture and Business",
    description:
      "MusicOSY is a single platform for listening, creation, publishing, catalog, commerce, live, marketing, rights and finance — governed by one consistent rules engine.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="About"
      title="One platform. One set of rules. Every surface."
      lead="MusicOSY is not a bundle of disconnected products sharing a login. Listening, creation, publishing, catalog, commerce, live, marketing, analytics, rights and finance run on one rules engine, so a decision made about a track, a person or a payout is the same everywhere it appears."
      cta={{ label: "Get started", href: "/signup" }}
      stats={[
        { v: "In-house", l: "Distribution" },
        { v: "One ledger", l: "Money & rights" },
        { v: "Every surface", l: "Consistent decisions" },
      ]}
      sections={[
        {
          heading: "What we are building",
          body: "A platform where culture and business are not separate systems.",
          items: [
            { title: "Unified identity", detail: "One account acting through clear contexts: personal, workspace, staff, developer." },
            { title: "Canonical records", detail: "Every track, release, order and payout has one authoritative source of truth." },
            { title: "Rights-first playback", detail: "If rights restrict a work, it is restricted in listening, discovery, search and APIs alike." },
            { title: "Built to be audited", detail: "Decisions are traceable: who acted, in what context, under which rule." },
          ],
        },
        {
          heading: "How we operate",
          items: [
            { title: "Non-exclusive by default", detail: "Artists keep their masters and can leave with their catalog intact." },
            { title: "Transparent accounting", detail: "Line-level statements by store, territory, track and period." },
            { title: "Safety as a rule, not a team", detail: "Moderation and eligibility are enforced by the platform, not per surface." },
            { title: "Own the pipeline", detail: "MusicOSY is its own distributor — no third-party middleman between you and the stores." },
          ],
        },
      ]}
    />
  );
}
