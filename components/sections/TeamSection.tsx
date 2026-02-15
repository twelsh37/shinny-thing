"use client";

import { useState } from "react";
import { TEAM } from "@/data/about";

export function TeamSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="border-t border-neutral-200 px-6 py-20 md:px-12 lg:px-20">
      <p className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Our team
      </p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((person, index) => (
          <article
            key={person.name}
            className="group cursor-pointer border-b border-neutral-100 pb-8 transition-colors"
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <h3 className="text-xl font-semibold text-[#171717]">
              {person.name}
            </h3>
            <p className="mb-3 text-sm text-neutral-500">{person.role}</p>
            <p
              className={`text-sm leading-relaxed text-neutral-600 transition-all duration-300 ${
                activeCard === index ? "opacity-100" : "line-clamp-2 opacity-80"
              }`}
            >
              {person.bio}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-neutral-500 underline underline-offset-2 hover:text-[#171717]"
                >
                  LinkedIn
                </a>
              )}
              {person.instagram && (
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-neutral-500 underline underline-offset-2 hover:text-[#171717]"
                >
                  Instagram
                </a>
              )}
              {person.email && (
                <a
                  href={person.email}
                  className="text-xs font-medium uppercase tracking-wider text-neutral-500 underline underline-offset-2 hover:text-[#171717]"
                >
                  Email
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
