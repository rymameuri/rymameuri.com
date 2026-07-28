import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-research sm:mb-4">
            Education
          </p>
          <h2 className="font-fraunces text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Where I&apos;m building from
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12">
          <div className="relative border-l-4 border-thread-research pl-8">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-research"
              style={{ boxShadow: "0 0 8px rgba(64, 61, 61, 0.4)" }}
            />
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground/50">
              Expected May 2028
            </p>
            <h3 className="font-fraunces mb-2 text-2xl font-bold text-foreground sm:text-3xl">
              Carnegie Mellon University Qatar
            </h3>
            <p className="mb-6 text-base font-semibold text-foreground sm:text-lg">
              B.S. Information Systems
            </p>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
                  Concentrations
                </p>
                <p className="leading-relaxed text-foreground/70">
                  Cybersecurity
                  <br />
                  Data Science
                </p>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft">
                  Minors
                </p>
                <p className="leading-relaxed text-foreground/70">
                  Tech Entrepreneurship
                  <br />
                  History
                  <br />
                  Professional Writing
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/cmu-seal.png"
              alt="Carnegie Mellon University seal"
              width={160}
              height={160}
              className="h-32 w-32 object-contain opacity-90 sm:h-40 sm:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
