"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function EmailSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 border border-primary/40 bg-primary/5 px-4 py-3.5 text-sm font-medium text-foreground">
        <Check className="size-4 text-primary" />
        You're in — check your inbox to finish setting up your artist account.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="you@artistname.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="h-12 flex-1 border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-sm font-semibold tracking-tight text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {compact ? "Get started" : "Create your account"}
          <ArrowRight className="size-4" />
        </button>
      </div>
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </form>
  );
}
