"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  easeOut,
  fadeUp,
  fadeUpTransition,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

export default function About() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";

  return (
    <section id="about" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-12 sm:mb-20"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build sm:mb-4"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Why I build
          </motion.p>
          <motion.h2
            className="font-fraunces mb-6 text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl"
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            Who gets left out of AI
          </motion.h2>
          <motion.p
            className="mb-6 text-base font-bold leading-relaxed text-foreground sm:mb-8 sm:text-lg"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Everyone worries about what AI will do to people. I worry about what
            happens to the people who don&apos;t have access to it.
          </motion.p>
          <motion.p
            className="mb-4 leading-relaxed text-foreground/70"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            That gap doesn&apos;t start with affordability. It starts earlier,
            with who a system was designed to serve in the first place. Most AI is
            built for the US and Europe, and Arab and Muslim users are rarely part
            of the design conversation — not out of malice, just because no one
            made the effort to include them.
          </motion.p>
          <motion.p
            className="leading-relaxed text-foreground/70"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            I&apos;m Rym — a builder, researcher, and designer working at the
            intersection of AI, ethics, human-centered technology, and MENA-first
            innovation. One person, three threads.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:gap-12 md:gap-16"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.div
            className="relative border-l-4 border-thread-build pl-8 transition-colors hover:border-thread-build/60"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-build"
              style={{ boxShadow: "0 0 8px rgba(114, 69, 56, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
              Build · Trajekt
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              Co-founder &amp; CEO, Trajekt
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              A bilingual Arabic/English AI counseling platform for MENA students
              who&apos;ve never had a counselor to turn to. Closing a gap only
              matters if what fills it can be trusted — an AI that&apos;s wrong
              at the wrong moment can do real damage to someone making a life
              decision.
            </p>
            <p className="text-sm italic text-foreground/60">
              Security rigor isn&apos;t a feature—it&apos;s foundational. Every
              decision reflects the responsibility we carry.
            </p>
          </motion.div>

          <motion.div
            className="relative border-l-4 border-thread-build pl-8 transition-colors hover:border-thread-build/60"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-build"
              style={{ boxShadow: "0 0 8px rgba(114, 69, 56, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
              Build · MyTartan
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              MyTartan — IX Lab, CMU-Q
            </h3>
            <p className="mb-4 leading-relaxed text-foreground/70">
              An AI assistant for CMU-Q students who keep getting handed systems
              made for Pittsburgh. Building it taught me that the hardest part
              isn&apos;t retrieval — it&apos;s making sure the system admits what
              it doesn&apos;t know instead of guessing confidently.
            </p>
            <p className="text-sm italic text-foreground/60">
              Honesty about uncertainty is a design choice, not a model
              limitation.
            </p>
          </motion.div>

          <motion.div
            className="relative border-l-4 border-thread-research pl-8 transition-colors hover:border-thread-research/60"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
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
              I support emerging technology research at IX Lab and co-founded the
              Women in AI Qatar chapter to build regional ethics and policy
              capacity. My corpus linguistics work analyzes how media frames
              displacement and exclusion: understanding the narratives that shape
              whose voices matter in AI.
            </p>
            <p className="text-sm italic text-foreground/60">
              Policy work that doesn&apos;t stay close to the technical side ends
              up toothless — and technical work without governance ends up
              unaccountable.
            </p>
          </motion.div>

          <motion.div
            className="relative border-l-4 border-thread-craft pl-8 transition-colors hover:border-thread-craft/60"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <div
              className="absolute -left-3 top-0 h-4 w-4 rounded-full bg-thread-craft"
              style={{ boxShadow: "0 0 8px rgba(166, 124, 111, 0.4)" }}
            />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft">
              Craft &amp; Identity
            </p>
            <h3 className="font-fraunces mb-4 text-2xl font-bold text-foreground">
              Algerian, Canadian, Trilingual, Human-Centered
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
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-border pt-12 sm:mt-20 sm:pt-20"
          variants={staggerContainer}
          initial={initial}
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.p
            className="mb-6 font-mono text-xs font-bold uppercase tracking-wider text-accent-gold sm:mb-8"
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            Where Threads Cross
          </motion.p>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-build/50 hover:bg-muted/70"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-build">
                Build + Craft
              </p>
              <p className="leading-relaxed text-foreground/70">
                Trajekt and MyTartan weave technical rigor with MENA identity —
                built for students who were never the default user in someone
                else&apos;s design brief.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-research/50 hover:bg-muted/70"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-research">
                Research + Build
              </p>
              <p className="leading-relaxed text-foreground/70">
                I sit at the intersection of building and governing. AI ethics
                research informs how Trajekt and MyTartan handle uncertainty,
                trust, and harm — not just what they can retrieve.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-thread-craft/50 hover:bg-muted/70"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft">
                Craft + Research
              </p>
              <p className="leading-relaxed text-foreground/70">
                My analysis of media framing and displacement comes from lived
                experience. I research what I know intimately.
              </p>
            </motion.div>
            <motion.div
              className="rounded-lg border border-border bg-muted/50 p-6 transition-all hover:border-accent-gold/50 hover:bg-muted/70"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-accent-gold">
                All Three
              </p>
              <p className="leading-relaxed text-foreground/70">
                If AI is going to shape how the next generation makes
                life-defining decisions, it has to actually be built for all of
                them — with rigor, intention, and identity in the same knot.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
