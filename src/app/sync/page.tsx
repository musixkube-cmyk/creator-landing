import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Sync Licensing — Clear MusicOSY Catalog in One Stop",
  description:
    "License music from the MusicOSY catalog: rights-verified works, stems, cue sheets, one-stop clearance and automated payouts to every shareholder.",
  openGraph: {
    title: "Sync Licensing — Clear MusicOSY Catalog in One Stop",
    description:
      "License music from the MusicOSY catalog: rights-verified works, stems, cue sheets, one-stop clearance and automated payouts to every shareholder.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function SyncPage() {
  return (
    <PageLayout
      eyebrow="Sync"
      title="Licensing that clears because the rights are already known."
      lead="Every work on MusicOSY carries its shares, contributors and restrictions as part of its canonical record. That makes sync a search-and-clear operation instead of a month of email: request, licence, deliver stems, and pay every shareholder automatically."
      cta={{ label: "Submit a track", href: "/signup" }}
      stats={[
        { v: "One-stop", l: "Clearance" },
        { v: "Stems", l: "Delivered with licence" },
        { v: "Automatic", l: "Shareholder payouts" },
      ]}
      sections={[
        {
          heading: "For music supervisors",
          items: [
            { title: "Search by usage", detail: "Mood, tempo, vocal, era and clearance status filters." },
            { title: "Verified ownership", detail: "Shares and restrictions shown before you request." },
            { title: "Licence issuance", detail: "Terms, territories and media generated in-platform." },
            { title: "Cue sheets", detail: "Delivery-ready documentation with every licence." },
          ],
        },
        {
          heading: "For rights holders",
          items: [
            { title: "Opt-in control", detail: "Choose which works are licensable and under what terms." },
            { title: "Approval workflow", detail: "Route requests to the people who must approve them." },
            { title: "Transparent splits", detail: "Licence fees distributed to shareholders on the same ledger." },
            { title: "Usage history", detail: "Every placement recorded against the work." },
          ],
        },
      ]}
      ctaHeading="Open a sync account."
      ctaBody="Search the catalog or make your own works licensable."
    />
  );
}
