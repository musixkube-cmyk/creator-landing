"use client";

import { useState } from "react";
import { ArrowLeft, Disc3 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-2">
          <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Disc3 className="size-5 animate-spin" style={{ animationDuration: "8s" }} />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Musicosy<span className="text-primary">.</span>
          </span>
        </div>

        {submitted ? (
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground">You&apos;re on the list</h1>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll send you an invite as soon as your spot is ready.
            </p>
            <Button variant="ghost" className="mt-6" asChild>
              <Link href="/">
                <ArrowLeft className="size-4" />
                Back to home
              </Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-2xl font-semibold text-foreground">Create your free account</h1>
            <p className="text-sm text-muted-foreground">
              One release included. No credit card required.
            </p>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl border-border bg-background focus-visible:ring-primary"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Join Musicosy
            </Button>

            <Button variant="ghost" className="w-full" asChild>
              <Link href="/">
                <ArrowLeft className="size-4" />
                Back to home
              </Link>
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
