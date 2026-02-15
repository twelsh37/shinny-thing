import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "About us" },
  { href: "#", label: "Our work" },
  { href: "#", label: "What we do" },
];

export function TopNav() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-border bg-background px-6 md:px-12 lg:px-20">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <span className="text-[1.25rem] leading-none" aria-hidden>∗</span>
        <span>Studio_Certain</span>
      </Link>
      <nav
        className="flex items-center gap-6 text-sm font-medium text-foreground"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Button key={link.label} variant="ghost" size="sm" asChild>
            <Link href={link.href} className="underline-offset-4 hover:underline">
              {link.label}
            </Link>
          </Button>
        ))}
        <Button
          size="sm"
          className="rounded-md bg-[#7dd3c0] text-foreground hover:bg-[#6bc4b0]"
          asChild
        >
          <Link href="#footer">Get in touch</Link>
        </Button>
      </nav>
    </header>
  );
}
