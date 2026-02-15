"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // Optional: send to error reporting (e.g. Sentry) when NEXT_PUBLIC_SENTRY_DSN is set
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6">
      <h1 className="text-2xl font-semibold text-foreground">
        Something went wrong
      </h1>
      <p className="max-w-md text-center text-muted-foreground">
        We couldn’t load this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={reset}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
