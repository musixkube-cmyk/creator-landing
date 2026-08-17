import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";

export const metadata = {
  title: "Musicosy — Music Distribution, Marketing & Royalties for Creators",
  description:
    "Musicosy is the operating system for independent artists: distribution to 180+ stores, fan marketing, monetization, rights and royalty splits, and a creative studio in one platform.",
  openGraph: {
    title: "Musicosy — Music Distribution, Marketing & Royalties for Creators",
    description:
      "Musicosy is the operating system for independent artists: distribution to 180+ stores, fan marketing, monetization, rights and royalty splits, and a creative studio in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Features />
      <FinalCta />
    </main>
  );
}
