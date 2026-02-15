# Testing guide

Checks for the Next.js European Cars app after productionisation (SEO, images, errors, loading, URL state, security, performance, a11y).

---

## 1. Error UI (error boundary)

- **Trigger:** In a client component (e.g. `AboutPageClient.tsx`), add temporarily:  
  `throw new Error("Test error");` at the start of the component.
- **Run:** `npm run dev` → open http://localhost:3000
- **Expect:** Graceful error page: “Something went wrong”, “Try again”, “Go home” (not a build or parse error).
- **Clean up:** Remove the `throw` line.

---

## 2. Images

- **Run:** `npm run dev` → open http://localhost:3000
- **Check:** Click each manufacturer in the radial nav. Every logo loads in the detail panel (no broken images, no layout jump).
- **Note:** Volkswagen and Audi use external (Wikipedia) URLs; the rest use local SVGs/PNGs from `public/`.

---

## 3. Not-found (404)

- **Go to:** http://localhost:3000/nonexistent
- **Expect:** Custom “Page not found” message and “Back to European Cars” link (not the default Next.js 404).

---

## 4. Loading state

- **Setup:** DevTools → Network → throttle “Slow 3G” (or similar).
- **Action:** Hard refresh or open http://localhost:3000 in a new tab.
- **Expect:** Once the HTML arrives, a skeleton (grey blocks for header, nav, detail) is visible. When the JS bundle has loaded and the app has hydrated, the skeleton is replaced by the full page. You may still see a brief blank while the very first part of the document is loading; the skeleton is in the HTML so it appears as soon as the body is parsed.
- **Note:** The skeleton is rendered by `LoadingOverlay` in the root layout (hidden after client mount). The route-level `loading.tsx` only runs when a route segment suspends; the overlay covers the slow-JS case.

---

## 5. URL state (shareable selection, back button)

- **Run:** `npm run dev` → open http://localhost:3000
- **Check:**
  - Click a manufacturer (e.g. Porsche). URL becomes `?manufacturer=porsche`.
  - Copy that URL, open in a **new tab** → same manufacturer selected.
  - Click another (e.g. Maserati), then press **browser Back** → previous manufacturer (e.g. Porsche) and URL `?manufacturer=porsche`. No concatenated or broken URLs.

---

## 6. Security headers

- **Run:** `npm run build` then `npm start` (production). Open http://localhost:3000
- **Check:** DevTools → Network → select the **document** request (first row, Type: `document`) → **Headers** → **Response Headers**
- **Expect:**  
  - `x-frame-options: DENY`  
  - `x-content-type-options: nosniff`  
  - `referrer-policy: strict-origin-when-cross-origin`  
- **Note:** These headers are not sent in `npm run dev`; use production only.

---

## 7. Performance

- **Fonts:** Text appears quickly; may briefly show system font then swap to Geist (no long invisible text).
- **Static:** After `npm run build`, the home page is pre-rendered (no dynamic server render for `/`).

---

## 8. Accessibility (reduced motion)

- **Setup:**  
  - **Windows:** Settings → Accessibility → Visual effects → turn **Animation effects** off (or “Reduce motion”).  
  - **Mac:** System Preferences → Accessibility → Display → **Reduce motion** on.
- **Action:** Reload http://localhost:3000, then change manufacturer (click another spoke).
- **Expect:** Spokes update with **no (or minimal) animation** when reduced motion is on.

---

## 9. Build and production run

- **Commands:**  
  `npm run build`  
  `npm start`
- **Expect:** Build completes; http://localhost:3000 loads and behaves like dev (logos, URL state, back button, security headers as above).

---

## Quick smoke test

1. **Images:** Click through all manufacturers; all logos load.
2. **404:** Visit `/nonexistent` → custom not-found page.
3. **URL state:** Change manufacturer → copy URL → open in new tab → same selection; use Back → previous selection, clean URL.
4. **Reduced motion:** Enable in OS, reload, change manufacturer → little or no animation.
