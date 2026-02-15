"use client";

import { useEffect, useState } from "react";

/**
 * Skeleton shown in initial HTML and hidden after client hydration.
 * Covers the blank screen while the document and JS load on slow networks (e.g. 3G).
 */
export function LoadingOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex h-screen flex-col bg-background"
      aria-hidden
    >
      <div className="h-14 animate-pulse border-b border-border bg-muted/30 md:h-16" />
      <main className="flex flex-1 flex-col md:flex-row">
        <div className="flex min-h-[300px] w-full items-center justify-center border-b border-border md:min-h-0 md:w-1/2 md:border-b-0 md:border-r">
          <div className="h-8 w-48 animate-pulse rounded bg-muted" />
        </div>
        <div className="flex w-full flex-col gap-4 p-4 sm:p-6 md:w-1/2 md:p-8 lg:p-12">
          <div className="h-9 w-48 animate-pulse rounded bg-muted" />
          <div className="h-6 w-24 animate-pulse rounded bg-muted" />
          <div className="mt-6 flex gap-8">
            <div className="size-48 animate-pulse rounded-sm bg-muted md:size-64" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
