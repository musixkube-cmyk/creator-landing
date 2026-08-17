import Link from "next/link";
import { EmailSignup } from "./email-signup";
import { Logo } from "./logo";

const proof = [
  { k: "Setup time", v: "Under 10 minutes" },
  { k: "Contract", v: "Non-exclusive, cancel anytime" },
  { k: "Ownership", v: "You keep 100% of your masters" },
];

export function FinalCta() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl px-6 lg:grid-cols-12 lg:px-10">
        <div className="border-border py-16 lg:col-span-7 lg:border-r lg:pr-14 lg:py-24">
          <Logo className="h-6" />
          <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Start with your next release. Grow into the whole catalog.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Create your artist account, deliver your first release free, and switch on the
            rest of the platform whenever you need it.
          </p>

          <div className="mt-9 max-w-lg">
            <EmailSignup compact />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/signup" className="font-medium text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="lg:col-span-5 lg:pl-14">
          <dl className="divide-y divide-border border-border lg:border-none">
            {proof.map((p) => (
              <div key={p.k} className="py-6 lg:py-8">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {p.k}
                </dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-foreground">{p.v}</dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-border py-6 text-sm text-muted-foreground lg:py-8">
            Running a label or catalog at scale? The same platform ships with multi-artist
            workspaces, role-based permissions, bulk delivery and API access.
          </p>
        </div>
      </div>
    </section>
  );
}
