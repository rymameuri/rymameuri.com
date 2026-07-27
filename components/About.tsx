export default function About() {
  return (
    <section id="about" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-20">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build sm:mb-4">
            About
          </p>
          <h2 className="font-fraunces mb-6 text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            One person, three threads
          </h2>
          <p className="text-base font-bold leading-relaxed text-foreground sm:text-lg">
            I&apos;m Rym, a builder, researcher, and designer working at the
            intersection of AI, ethics, human-centered technology, and MENA-first
            innovation.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-12 md:gap-16">
          <div className="relative border-l-4 border-thread-build pl-8 transition-colors hover:border-thread-build/60">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-build"
              style={{ boxShadow: "0 0 8px rgba(114, 69, 56, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
              Build
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              Co-founder &amp; CEO, Trajekt
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              I founded Trajekt to build an AI-powered student guidance platform
              for the MENA region. After struggling to find a student platform
              centralized for the MENA region, I decided to build the platform I
              wanted to see: one that centers MENA voices, prioritizes security
              and governance, and treats students as humans, not data points.
            </p>
            <p className="text-sm italic text-foreground/60">
              Security rigor isn&apos;t a feature—it&apos;s foundational. Every
              decision reflects the responsibility we carry.
            </p>
          </div>

          <div className="relative border-l-4 border-thread-research pl-8 transition-colors hover:border-thread-research/60">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-research"
              style={{ boxShadow: "0 0 8px rgba(64, 61, 61, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-research">
              Research &amp; Leadership
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              IX Lab, CMU-Q &amp; Women in AI Qatar
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              I support emerging technology research at IX Lab (AR/VR, AI, and
              digital media) and co-founded the Women in AI Qatar chapter to build
              regional ethics and policy capacity. My corpus linguistics work
              analyzes how media frames displacement and exclusion: understanding
              the narratives that shape whose voices matter in AI.
            </p>
            <p className="text-sm italic text-foreground/60">
              Research without action is incomplete. I&apos;m building community
              infrastructure to shift how AI is developed in the region.
            </p>
          </div>

          <div className="relative border-l-4 border-thread-craft pl-8 transition-colors hover:border-thread-craft/60">
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-craft"
              style={{ boxShadow: "0 0 8px rgba(166, 124, 111, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft">
              Craft &amp; Identity
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              Algerian, Canadian, Trilingual, Human-Centered, Inclusive and Diverse
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              I grew up between Algeria, Canada, Qatar, and diaspora spaces.
              I&apos;m fluent in English, Arabic, and French. This lived experience
              of being between worlds informs everything I build: platforms that
              center MENA identity, design that respects cultural nuance, and
              technology that treats people as whole humans, not user segments.
            </p>
            <p className="text-sm italic text-foreground/60">
              My identity isn&apos;t separate from my work. It&apos;s the lens
              through which I see problems and design solutions.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-12 sm:mt-20 sm:pt-20">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-wider text-accent-gold sm:mb-8">
            Where Threads Cross
          </p>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-build/50 hover:bg-muted/70">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
                Build + Craft
              </p>
              <p className="leading-relaxed text-foreground/70">
                Trajekt weaves security rigor with MENA identity. The platform is
                designed for MENA students, by someone who understands the
                region&apos;s specific needs and exclusions. Built to ensure MENA
                students are never at a disadvantage.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-research/50 hover:bg-muted/70">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-research">
                Research + Build
              </p>
              <p className="leading-relaxed text-foreground/70">
                My research on AI ethics directly informs Trajekt&apos;s
                governance. I&apos;m not just studying exclusion, I&apos;m building
                alternatives. Advocating and speaking out without active work to
                reduce exclusion and inequality is hypocritical.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-craft/50 hover:bg-muted/70">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft">
                Craft + Research
              </p>
              <p className="leading-relaxed text-foreground/70">
                My analysis of media framing and displacement comes from lived
                experience. I research what I know intimately.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-accent-gold/50 hover:bg-muted/70">
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-gold">
                All Three
              </p>
              <p className="leading-relaxed text-foreground/70">
                Every project is a knot where all three threads meet: building with
                rigor, researching with intention, crafting with identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
