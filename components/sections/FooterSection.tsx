import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-16 md:px-12 lg:px-20">
      <div className="mb-10">
        <Button size="lg" className="rounded-full" asChild>
          <Link href="#">Discover Our Work</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="mailto:ed.smallman@studiocertain.com"
            className="hover:text-foreground"
          >
            ed.smallman@studiocertain.com
          </a>
          <span className="mx-2">·</span>
          <a href="tel:+447888754106" className="hover:text-foreground">
            +44 (0) 7888 754106
          </a>
        </div>
        <p>233 Shaftesbury Ave, London WC2H 8EE</p>
      </div>
      <p className="mt-8 text-xs text-muted-foreground">
        Copyright © Studio Certain 2026 · Privacy Policy · Cookies Settings
      </p>
    </footer>
  );
}
