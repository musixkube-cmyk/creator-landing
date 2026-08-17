import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "For Creators — Release, Market and Get Paid on MusicOSY",
  description:
    "Studio, distribution, fan marketing, commerce, rights and royalty splits for independent artists — run your whole release cycle inside MusicOSY.",
  openGraph: {
    title: "For Creators — Release, Market and Get Paid on MusicOSY",
    description:
      "Studio, distribution, fan marketing, commerce, rights and royalty splits for independent artists — run your whole release cycle inside MusicOSY.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function CreatorsPage() {
  return (
    <PageLayout
      eyebrow="For creators"
      title="Everything between the idea and the payout."
      lead="Write, record, master, release, promote, sell and get paid without leaving the platform or handing your catalog to anyone else. MusicOSY distributes your music itself, so the pipeline you rely on is the platform you already use."
      cta={{ label: "Start your release", href: "/signup" }}
      stats={[
        { v: "100%", l: "Masters retained" },
        { v: "48h", l: "Median delivery" },
        { v: "Auto", l: "Collaborator splits" },
      ]}
      sections={[
        {
          heading: "Create",
          body: "Creation tooling that feeds straight into your release pipeline.",
          items: [
            { title: "Studio sessions", detail: "Versioned projects, timestamped notes and approvals with collaborators." },
            { title: "Mastering", detail: "Reference-matched masters with revision history per version." },
            { title: "Stems", detail: "Clean separations for remixes, sync and live performance." },
            { title: "Songwriting", detail: "Lyric drafting, key/BPM tagging and demo organisation." },
          ],
        },
        {
          heading: "Release",
          body: "One release form, every destination inside MusicOSY.",
          items: [
            { title: "Scheduling", detail: "Timed drops, pre-save windows and staggered territory rollouts." },
            { title: "Metadata & assets", detail: "ISRC/UPC generation, artwork validation, credits and contributor roles." },
            { title: "Catalog control", detail: "Bulk edits, redelivery and takedowns without a support ticket." },
            { title: "Rights registration", detail: "Works, shares and publishing data captured at upload." },
          ],
        },
        {
          heading: "Grow and earn",
          items: [
            { title: "Fan CRM", detail: "First-party audience built from listening and purchase behaviour." },
            { title: "Commerce", detail: "Merch, memberships, tips, ticketing and digital drops on your pages." },
            { title: "Royalties", detail: "Automated splits paid directly to each collaborator." },
            { title: "Insights", detail: "Streaming, revenue and audience analytics in one view." },
          ],
        },
      ]}
      ctaHeading="Your next release can be the first one you own end to end."
    />
  );
}
