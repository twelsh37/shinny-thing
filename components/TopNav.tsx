import Link from "next/link";

export function TopNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center border-b border-border bg-background px-4 pt-[env(safe-area-inset-top)] md:h-16 md:px-12 md:pt-0 lg:px-20">
      <Link
        href="/"
        className="flex min-h-[44px] min-w-[44px] items-center gap-2 text-base font-semibold text-foreground md:text-lg"
      >
        <span className="text-[1.25rem] leading-none" aria-hidden>
          ∗
        </span>
        <span>European Cars</span>
      </Link>
    </header>
  );
}
