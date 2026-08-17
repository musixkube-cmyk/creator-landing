import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Help — MusicOSY Support for Creators, Fans and Workspaces",
  description:
    "Get help with releases, delivery, payouts, rights, orders and account access on MusicOSY, with clear escalation paths and traceable decisions.",
  openGraph: {
    title: "Help — MusicOSY Support for Creators, Fans and Workspaces",
    description:
      "Get help with releases, delivery, payouts, rights, orders and account access on MusicOSY, with clear escalation paths and traceable decisions.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function HelpPage() {
  return (
    <PageLayout
      eyebrow="Help"
      title="Support that can see the same record you can."
      lead="Because MusicOSY owns distribution, listening, commerce and accounting, support is not guessing what a partner did. Every case is answered against the canonical record for that release, order or payout — and every decision states the rule it came from."
      cta={{ label: "Get support", href: "/signup" }}
      stats={[
        { v: "One record", l: "Per case" },
        { v: "Traceable", l: "Decisions" },
        { v: "In-platform", l: "Escalation" },
      ]}
      sections={[
        {
          heading: "Common topics",
          items: [
            { title: "Releases & delivery", detail: "Scheduling, rejections, redelivery, takedowns and territory issues." },
            { title: "Rights & splits", detail: "Share changes, contributor disputes and works registration." },
            { title: "Payouts", detail: "Statements, withdrawal methods, currency and tax details." },
            { title: "Account & access", detail: "Sign-in, roles, workspace membership and security." },
          ],
        },
        {
          heading: "How cases are handled",
          items: [
            { title: "Stated rule", detail: "Every outcome cites the platform rule that produced it." },
            { title: "Appeal path", detail: "Moderation and eligibility decisions can be reviewed." },
            { title: "Status visibility", detail: "See where a case sits without asking for an update." },
            { title: "No cross-surface surprises", detail: "A resolution applies everywhere at once." },
          ],
        },
      ]}
      ctaHeading="Need a human?"
      ctaBody="Leave your email and support will pick up your case from your account record."
    />
  );
}
