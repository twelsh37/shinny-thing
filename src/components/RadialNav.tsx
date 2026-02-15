"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type TeamItem = { name: string; role: string };

/** Round to fixed decimals so server and client produce identical transform strings (avoids hydration mismatch). */
function round2(n: number, decimals = 2): number {
  const p = 10 ** decimals;
  return Math.round(n * p) / p;
}

const DURATION_MS = 500;
const EASING = (t: number) => 1 - (1 - t) * (1 - t);

const ARC_START_DEG = -70;
const ARC_END_DEG = 70;

type Props = {
  items: TeamItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

/**
 * Get target angle in degrees for each item so the selected item is at 0°
 * and all others stay within ARC_START_DEG to ARC_END_DEG (circular list).
 */
function getTargetAngles(activeIndex: number, n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const totalArc = ARC_END_DEG - ARC_START_DEG;
  const othersCount = n - 1;
  const halfArc = totalArc / 2;
  const leftCount = Math.floor(othersCount / 2);
  const rightCount = othersCount - leftCount;

  const leftStep = leftCount > 0 ? halfArc / leftCount : 0;
  const rightStep = rightCount > 0 ? halfArc / rightCount : 0;

  const targets = new Array<number>(n);

  targets[activeIndex] = 0;

  for (let i = 1; i <= leftCount; i++) {
    const idx = (activeIndex - i + n) % n;
    targets[idx] = round2(-i * leftStep);
  }
  for (let i = 1; i <= rightCount; i++) {
    const idx = (activeIndex + i) % n;
    targets[idx] = round2(i * rightStep);
  }

  return targets;
}

/**
 * Radial navigation: team names as spokes from an invisible hub.
 * All names stay within -70° to +70°. Selected item is at 0°; others wrap to start/end and animate into view.
 */
export function RadialNav({ items, activeIndex, onSelect }: Props) {
  const n = items.length;
  const { hubX, hubY, radius } = useMemo(
    () => ({ hubX: -80, hubY: 200, radius: 150 }),
    []
  );

  const targetAngles = useMemo(
    () => getTargetAngles(activeIndex, n),
    [activeIndex, n]
  );

  const [displayAngles, setDisplayAngles] = useState<number[]>(() =>
    getTargetAngles(activeIndex, n)
  );

  const animRef = useRef<number | null>(null);
  const startAnglesRef = useRef<number[]>([]);

  useEffect(() => {
    if (n === 0) return;

    startAnglesRef.current = [...displayAngles];

    if (animRef.current !== null) cancelAnimationFrame(animRef.current);

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = EASING(t);

      const next = displayAngles.map((_, i) => {
        const start = startAnglesRef.current[i] ?? targetAngles[i];
        const target = targetAngles[i];
        let delta = target - start;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        return round2(start + delta * eased);
      });

      setDisplayAngles(next);
      if (t < 1) animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
    // Only run when target angles (active index) change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, n]);

  const viewBox = useMemo(() => `-140 -40 560 480`, []);

  return (
    <nav
      className="flex h-full w-full items-center justify-center"
      aria-label="Team navigation"
    >
      <svg
        viewBox={viewBox}
        className="h-full w-full overflow-visible"
        aria-hidden
      >
        {items.map((item, index) => {
          const angleDeg = displayAngles[index] ?? 0;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = round2(hubX + radius * Math.cos(angleRad));
          const y = round2(hubY + radius * Math.sin(angleRad));
          const isActive = index === activeIndex;
          const nameFill = isActive ? "#7dd3c0" : "#374151";
          const roleFill = isActive ? "#374151" : "#6b7280";

          return (
            <g
              key={`${item.name}-${index}`}
              transform={`translate(${round2(x)}, ${round2(y)}) rotate(${round2(angleDeg)})`}
              className="cursor-pointer transition-opacity hover:opacity-90"
              onClick={() => onSelect(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <rect
                x={-8}
                y={-10}
                width={320}
                height={28}
                fill="transparent"
                aria-hidden
              />
              <text
                x={0}
                y={0}
                textAnchor="start"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                className="select-none text-[13px] tracking-tight"
              >
                <tspan fontWeight={isActive ? 600 : 500} fill={nameFill}>
                  {item.name}
                </tspan>
                <tspan fill={roleFill} fontWeight={500}>
                  {" - "}
                  {item.role}
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>
    </nav>
  );
}
