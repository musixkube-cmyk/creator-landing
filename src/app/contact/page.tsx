import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Contact Us — Reach the MusicOSY Team",
  description:
    "Contact MusicOSY about creator accounts, distribution, rights, business partnerships, press, developers or support.",
  openGraph: {
    title: "Contact Us — Reach the MusicOSY Team",
    description:
      "Contact MusicOSY about creator accounts, distribution, rights, business partnerships, press, developers or support.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contact us"
      title="Tell us which part of the platform you are here for."
      lead="MusicOSY is one platform, but the questions are not all the same. Point us at the right area and your message reaches the team that owns that surface — with your account record attached if you already have one."
      cta={{ label: "Contact us", href: "/signup" }}
      stats={[
        { v: "One inbox", l: "Per area" },
        { v: "Account-linked", l: "Context" },
        { v: "Tracked", l: "Every request" },
      ]}
      sections={[
        {
          heading: "Reach the right team",
          items: [
            { title: "Creators & releases", detail: "Onboarding, delivery, catalog and payouts." },
            { title: "Business & ads", detail: "Brand campaigns, inventory and partnerships." },
            { title: "Sync licensing", detail: "Clearance requests and catalog access for supervisors." },
            { title: "Developers", detail: "API access, scopes and integration reviews." },
          ],
        },
        {
          heading: "Other enquiries",
          items: [
            { title: "Press", detail: "Interviews, platform announcements and asset requests." },
            { title: "Trust & safety", detail: "Reports, appeals and rights conflicts." },
            { title: "Careers", detail: "Roles, referrals and speculative applications." },
            { title: "Everything else", detail: "If you are unsure, send it anyway and we will route it." },
          ],
        },
      ]}
      ctaHeading="Send us your email."
      ctaBody="Leave your address and we will reply from the team that owns your question."
    />
  );
}
