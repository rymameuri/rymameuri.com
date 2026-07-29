"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  easeOut,
  fadeUp,
  fadeUpTransition,
  heroWordTransition,
  staggerContainer,
} from "@/lib/motion";

const THREADS = [
  {
    label: "Build",
    detail: "AI, platforms, security",
    color: "#724538",
    shadow: "rgba(114, 69, 56, 0.3)",
    textClass: "text-thread-build",
    bgClass: "bg-thread-build",
  },
  {
    label: "Research",
    detail: "Ethics, policy, leadership",
    color: "#403d3d",
    shadow: "rgba(64, 61, 61, 0.3)",
    textClass: "text-thread-research",
    bgClass: "bg-thread-research",
  },
  {
    label: "Craft",
    detail: "Identity, human-centered",
    color: "#a67c6f",
    shadow: "rgba(166, 124, 111, 0.3)",
    textClass: "text-thread-craft",
    bgClass: "bg-thread-craft",
  },
] as const;

const THREAD_PATHS = [
  {
    d: "M 200 0 Q 220 200 200 400 Q 180 600 200 800",
    color: "#724538",
    delay: 0.1,
  },
  {
    d: "M 600 0 Q 580 200 600 400 Q 620 600 600 800",
    color: "#403d3d",
    delay: 0.35,
  },
  {
    d: "M 1000 0 Q 1020 200 1000 400 Q 980 600 1000 800",
    color: "#a67c6f",
    delay: 0.6,
  },
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-32 pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <svg
          viewBox="0 0 1200 800"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          {THREAD_PATHS.map((thread) => (
            <motion.path
              key={thread.d}
              d={thread.d}
              stroke={thread.color}
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={
                reduceMotion
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1.6,
                  delay: thread.delay,
                  ease: easeOut,
                },
                opacity: {
                  duration: 0.4,
                  delay: thread.delay,
                },
              }}
            />
          ))}
        </svg>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={staggerContainer}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
      >
        <motion.p
          className="font-fraunces mb-4 text-2xl font-semibold tracking-tight text-foreground sm:mb-6 sm:text-3xl md:text-4xl"
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          Rym Aicha Ameuri
        </motion.p>

        <motion.h1
          className="font-fraunces mb-6 text-4xl font-bold leading-tight text-foreground sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl"
          variants={fadeUp}
          transition={heroWordTransition}
        >
          I refuse to
          <br />
          pick a lane
        </motion.h1>

        <motion.p
          className="mx-auto mb-12 max-w-2xl px-2 text-base leading-relaxed text-foreground/70 sm:mb-16 sm:text-lg md:text-xl"
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          I build AI for people who usually get left out of it —{" "}
          <br className="hidden sm:block" />
          Arab and Muslim users across MENA, not an afterthought to US and
          Europe.
        </motion.p>

        <motion.div
          className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-3 px-2 sm:mb-16 sm:gap-6 md:gap-8"
          variants={staggerContainer}
        >
          {THREADS.map((thread) => (
            <motion.div
              key={thread.label}
              className="flex flex-col items-center gap-3"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <div
                className={`h-12 w-3 rounded-full sm:h-16 ${thread.bgClass}`}
                style={{ boxShadow: `0 0 12px ${thread.shadow}` }}
              />
              <div className="text-center">
                <p
                  className={`mb-1 font-mono text-xs font-bold uppercase tracking-wider sm:mb-2 ${thread.textClass}`}
                >
                  {thread.label}
                </p>
                <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
                  {thread.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          Explore the threads
        </motion.a>
      </motion.div>
    </section>
  );
}
