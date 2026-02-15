"use client";

import { useEffect } from "react";

/**
 * Placeholder for production analytics (e.g. GA4, Plausible).
 * Only runs when NEXT_PUBLIC_GA_ID is set and NODE_ENV is production.
 * Replace the no-op below with your analytics script or tag manager.
 */
export function Analytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const id = process.env.NEXT_PUBLIC_GA_ID;
    if (!id) return;

    // Placeholder: add your analytics loader here, e.g.:
    // - gtag.js for GA4
    // - Plausible script
    // - Custom event forwarding
    void id; // avoid unused variable in placeholder
  }, []);

  return null;
}
