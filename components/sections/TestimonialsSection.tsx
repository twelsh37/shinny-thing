"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/about";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section className="border-t border-neutral-200 px-6 py-20 md:px-12 lg:px-20">
      <p className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        What it's like working with us
      </p>
      <blockquote className="max-w-2xl">
        <p className="mb-8 text-2xl font-medium leading-relaxed text-[#171717] md:text-3xl">
          &ldquo;{t.quote}&rdquo;
        </p>
        <footer className="flex flex-wrap items-baseline gap-2 text-sm text-neutral-600">
          <cite className="not-italic font-semibold text-[#171717]">
            {t.author}
          </cite>
          <span>,</span>
          <span>{t.role}</span>
          <span>-</span>
          <span>{t.company}</span>
        </footer>
      </blockquote>
      <div className="mt-8 flex gap-4">
        <Button
          variant="outline"
          onClick={() =>
            setIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1))
          }
          aria-label="Previous testimonial"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1))
          }
          aria-label="Next testimonial"
        >
          Next
        </Button>
      </div>
    </section>
  );
}
