"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RadialNav } from "./RadialNav";
import { TopNav } from "./TopNav";
import { TeamDetailPanel } from "./TeamDetailPanel";
import {
  MANUFACTURERS,
  getIndexBySlug,
  manufacturerSlug,
} from "@/data/manufacturers";

export function AboutPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const manufacturerParam = searchParams.get("manufacturer");
  const activeIndex = getIndexBySlug(manufacturerParam);

  const handleSelect = (index: number) => {
    const slug = manufacturerSlug(MANUFACTURERS[index].name);
    const base = pathname ?? "/";
    const search = `manufacturer=${encodeURIComponent(slug)}`;
    const href = `${base}${base.includes("?") ? "&" : "?"}${search}`;
    router.push(href, { scroll: false });
  };

  const items = MANUFACTURERS.map((m) => ({ name: m.name, role: m.role }));
  const selected = MANUFACTURERS[activeIndex];

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <TopNav />
      <main className="flex min-h-0 flex-1 flex-col pt-14 md:flex-row md:pt-16">
        <aside className="flex min-h-[300px] w-full shrink-0 items-center justify-center border-b border-border bg-background md:min-h-0 md:w-1/2 md:border-b-0 md:border-r">
          <RadialNav
            items={items}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />
        </aside>
        <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <TeamDetailPanel member={selected} imageIsLogo />
        </section>
      </main>
    </div>
  );
}
