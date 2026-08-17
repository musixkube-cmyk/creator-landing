/**
 * Musicosy wordmark.
 *
 * The original repo referenced a Lovable-hosted logo asset
 * (`/__l5e/assets-v1/...`) that only resolves inside the Lovable preview,
 * so we render the brand as a text wordmark with the signature orange dot,
 * matching the treatment used on the original signup page.
 */
export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-tight text-foreground ${className}`}
      aria-label="Musicosy"
    >
      Musicosy<span className="text-primary">.</span>
    </span>
  );
}
