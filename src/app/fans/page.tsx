import type { Metadata } from "next";
import { PageLayout } from "@/components/site/page-layout";

export const metadata: Metadata = {
  title: "For Fans — Listen, Follow and Support Artists on MusicOSY",
  description:
    "Continuous listening, setlists, social participation, drops, live events and direct support for the artists you follow — all in one MusicOSY account.",
  openGraph: {
    title: "For Fans — Listen, Follow and Support Artists on MusicOSY",
    description:
      "Continuous listening, setlists, social participation, drops, live events and direct support for the artists you follow — all in one MusicOSY account.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function FansPage() {
  return (
    <PageLayout
      eyebrow="For fans"
      title="Listening, culture and supporting artists in the same place."
      lead="MusicOSY is where you listen, follow, talk and buy. Your setlists, your feed, your tickets and your support of an artist are part of one account instead of five apps that never speak to each other."
      cta={{ label: "Create your account", href: "/signup" }}
      stats={[
        { v: "Continuous", l: "Listening" },
        { v: "Direct", l: "Artist support" },
        { v: "One account", l: "Every surface" },
      ]}
      sections={[
        {
          heading: "Listen",
          items: [
            { title: "Setlists", detail: "Build, share and follow collections that keep playing." },
            { title: "Discover", detail: "Culture-led surfaces instead of a single infinite shuffle." },
            { title: "Continuous play", detail: "Sessions that carry across web, mobile and connected devices." },
            { title: "Rights-safe catalog", detail: "What you can play is consistent everywhere you play it." },
          ],
        },
        {
          heading: "Participate",
          items: [
            { title: "Follow artists", detail: "Release alerts, drops and early access from the acts you back." },
            { title: "Social feed", detail: "Posts, reactions and conversation attached to the music itself." },
            { title: "Live & tickets", detail: "Event pages, presales and bundles from artists you follow." },
            { title: "Support directly", detail: "Memberships, tips and merch that reach the artist, not a middle layer." },
          ],
        },
      ]}
      ctaHeading="Create your listener account."
      ctaBody="Start listening, follow artists and get their drops first."
    />
  );
}
