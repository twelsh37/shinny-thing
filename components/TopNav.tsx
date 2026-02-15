import Link from "next/link";

export function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center border-b border-border bg-background px-6 md:px-12 lg:px-20">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold text-foreground"
      >
        <span className="text-[1.25rem] leading-none" aria-hidden>
          ∗
        </span>
        <span>European Cars</span>
      </Link>
    </header>
  );
}
