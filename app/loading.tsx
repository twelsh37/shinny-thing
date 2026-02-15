export default function Loading() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <div className="h-16 animate-pulse border-b border-border bg-muted/30" />
      <main className="flex flex-1 flex-row">
        <div className="flex w-1/2 items-center justify-center border-r border-border">
          <div className="h-8 w-48 animate-pulse rounded bg-muted" />
        </div>
        <div className="flex w-1/2 flex-col gap-4 p-8 md:p-12">
          <div className="h-9 w-48 animate-pulse rounded bg-muted" />
          <div className="h-6 w-24 animate-pulse rounded bg-muted" />
          <div className="mt-6 flex gap-8">
            <div className="size-48 animate-pulse rounded-sm bg-muted md:size-64" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
