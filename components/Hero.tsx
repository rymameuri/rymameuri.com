export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-32 pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <svg
          viewBox="0 0 1200 800"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 200 0 Q 220 200 200 400 Q 180 600 200 800"
            stroke="#724538"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 600 0 Q 580 200 600 400 Q 620 600 600 800"
            stroke="#403d3d"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 1000 0 Q 1020 200 1000 400 Q 980 600 1000 800"
            stroke="#a67c6f"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-fraunces mb-4 text-2xl font-semibold tracking-tight text-foreground sm:mb-6 sm:text-3xl md:text-4xl">
          Rym Aicha Ameuri
        </p>

        <h1 className="font-fraunces mb-6 text-4xl font-bold leading-tight text-foreground sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
          I refuse to
          <br />
          pick a lane
        </h1>

        <p className="mx-auto mb-12 max-w-2xl px-2 text-base leading-relaxed text-foreground/70 sm:mb-16 sm:text-lg md:text-xl">
          My work weaves together{" "}
          <span className="font-semibold text-thread-build">building</span>,{" "}
          <span className="font-semibold text-thread-research">research</span>, and{" "}
          <span className="font-semibold text-thread-craft">craft</span>. Not three
          separate paths: one person, three threads that cross and strengthen each
          other.
        </p>

        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-3 px-2 sm:mb-16 sm:gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-12 w-3 rounded-full bg-thread-build sm:h-16"
              style={{ boxShadow: "0 0 12px rgba(114, 69, 56, 0.3)" }}
            />
            <div className="text-center">
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-thread-build sm:mb-2">
                Build
              </p>
              <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
                AI, platforms, security
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-12 w-3 rounded-full bg-thread-research sm:h-16"
              style={{ boxShadow: "0 0 12px rgba(64, 61, 61, 0.3)" }}
            />
            <div className="text-center">
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-thread-research sm:mb-2">
                Research
              </p>
              <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
                Ethics, policy, leadership
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-12 w-3 rounded-full bg-thread-craft sm:h-16"
              style={{ boxShadow: "0 0 12px rgba(166, 124, 111, 0.3)" }}
            />
            <div className="text-center">
              <p className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft sm:mb-2">
                Craft
              </p>
              <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
                Identity, human-centered
              </p>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
        >
          Explore the threads
        </a>
      </div>
    </section>
  );
}
