import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "Get the MusicOSY App — Web, Mobile and Connected Devices",
  description:
    "Use MusicOSY on the web today and get notified when the mobile apps land. Same account, same catalog, same decisions on every surface.",
  openGraph: {
    title: "Get the MusicOSY App — Web, Mobile and Connected Devices",
    description:
      "Use MusicOSY on the web today and get notified when the mobile apps land. Same account, same catalog, same decisions on every surface.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function GetAppPage() {
  return (
    <PageLayout
      eyebrow="Get the app"
      title="One account. Every surface behaves the same."
      lead="MusicOSY runs in the browser today, with mobile and connected-device clients in build. Whichever surface you open, you get the same catalog, the same permissions and the same financial and rights decisions — a platform rule, not a roadmap promise."
      cta={{ label: "Get the app", href: "/signup" }}
      stats={[
        { v: "Live", l: "Web app" },
        { v: "In build", l: "iOS & Android" },
        { v: "Synced", l: "Sessions" },
      ]}
      sections={[
        {
          heading: "Available now",
          items: [
            { title: "Web app", detail: "Full listening, studio, release and commerce surfaces in the browser." },
            { title: "Workspace tools", detail: "Team accounts, roles and approvals from any device." },
            { title: "Public pages", detail: "Artist, release and event pages that work without an install." },
            { title: "Offline-ready listening", detail: "Cached playback where licensing permits it." },
          ],
        },
        {
          heading: "Coming to mobile",
          items: [
            { title: "iOS & Android", detail: "Native listening, uploads and fan messaging." },
            { title: "Studio on mobile", detail: "Capture demos and approve sessions on the move." },
            { title: "Connected devices", detail: "Continuous sessions handed off between speakers and screens." },
            { title: "Early access", detail: "Sign up and you are first into the beta." },
          ],
        },
      ]}
      ctaHeading="Get early access to the apps."
      ctaBody="Leave your email and we will send your invite when the beta opens."
    />
  );
}
