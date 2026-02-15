export function Hero() {
  return (
    <header className="min-h-[80vh] px-6 py-20 md:px-12 lg:px-20">
      <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
        Who we are is defined by our people
      </p>
      <h1 className="mb-10 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-[#171717] md:text-5xl lg:text-6xl">
        Good people.
        <br />
        Great ideas.
      </h1>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-neutral-600">
        <p>
          And it always has been. From our three founders to our current team of
          ten, we're all brilliant in our own wonderful way. And while our
          passions, approach, and styles may be different, we all share the
          same curiosity and commitment.
        </p>
        <p>
          That's why, no matter what we're creating, we bring imagination,
          energy, and expertise to each and every project.
        </p>
      </div>
    </header>
  );
}
