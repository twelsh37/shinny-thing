"use client";

import { useState } from "react";
import { RadialNav } from "./RadialNav";
import { TopNav } from "./TopNav";
import { TeamDetailPanel } from "./TeamDetailPanel";
import { TEAM } from "@/data/about";

export function AboutPageClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const teamItems = TEAM.map((m) => ({ name: m.name, role: m.role }));
  const selectedMember = TEAM[activeIndex];

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <TopNav />
      <main className="flex min-h-0 flex-1 flex-row">
        <aside className="flex w-1/2 min-w-0 items-center justify-center border-r border-border bg-background">
          <RadialNav
            items={teamItems}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </aside>
        <section className="flex w-1/2 min-w-0 flex-col overflow-hidden">
          <TeamDetailPanel member={selectedMember} />
        </section>
      </main>
    </div>
  );
}
