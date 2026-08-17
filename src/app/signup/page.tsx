import type { Metadata } from "next";
import { SignupForm } from "@/components/site/signup-form";

export const metadata: Metadata = {
  title: "Sign up — Musicosy",
  description: "Create your free Musicosy account and release your music everywhere.",
  openGraph: {
    title: "Sign up — Musicosy",
    description: "Create your free Musicosy account and release your music everywhere.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function SignupPage() {
  return <SignupForm />;
}
