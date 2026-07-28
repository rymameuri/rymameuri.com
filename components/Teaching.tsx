export default function Teaching() {
  return (
    <section id="teaching" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-accent-gold sm:mb-4">
            Teaching &amp; Mentorship
          </p>
          <h2 className="font-fraunces text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            From the other side of the table
          </h2>
        </div>

        <div className="grid gap-8 sm:gap-12 md:gap-16">
          <div className="relative border-l-4 border-thread-build pl-8 transition-colors hover:border-thread-build/60">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-build"
              style={{ boxShadow: "0 0 8px rgba(114, 69, 56, 0.4)" }}
            />
            <h3 className="font-fraunces mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Course Assistant, Tech Startup Launchpad (67-474)
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              I support Prof. Savanid Vatanasakdakul in running CMU-Q&apos;s startup
              launchpad course, helping students turn early ideas into real ventures.
              The same grind I know from building Trajekt and ConnectED, just from
              the other side of the table now.
            </p>
            <p className="text-sm italic text-foreground/60">
              You don&apos;t really understand a founder&apos;s problem until
              you&apos;ve been the founder with the problem.
            </p>
          </div>

          <div className="relative border-l-4 border-thread-research pl-8 transition-colors hover:border-thread-research/60">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-research"
              style={{ boxShadow: "0 0 8px rgba(64, 61, 61, 0.4)" }}
            />
            <h3 className="font-fraunces mb-4 text-xl font-bold text-foreground sm:text-2xl">
              Course Assistant, Information Systems Security (67-380)
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              I support Prof. Manoranjan Mohanty in teaching CMU-Q&apos;s information
              security course, grounded in the same governance and risk lens I bring
              to my own work. Breach analysis, threat modeling, privacy by design,
              taught to the next cohort building in this space.
            </p>
            <p className="text-sm italic text-foreground/60">
              Security isn&apos;t a lecture topic for me. It&apos;s the thing I have
              to get right before anyone trusts a platform with their data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
