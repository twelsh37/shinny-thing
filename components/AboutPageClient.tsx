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
    const url = `${pathname}?manufacturer=${slug}`;
    router.replace(url, { scroll: false });
  };

  const items = MANUFACTURERS.map((m) => ({ name: m.name, role: m.role }));
  const selected = MANUFACTURERS[activeIndex];

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <TopNav />
      <main className="flex min-h-0 flex-1 flex-row pt-16">
        <aside className="flex w-1/2 min-w-0 items-center justify-center border-r border-border bg-background">
          <RadialNav
            items={items}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />
        </aside>
        <section className="flex w-1/2 min-w-0 flex-col overflow-hidden">
          <TeamDetailPanel member={selected} imageIsLogo />
        </section>
      </main>
    </div>
  );
}
