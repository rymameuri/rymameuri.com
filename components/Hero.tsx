"use client";

import { motion } from "framer-motion";
import { heroWordTransition } from "@/lib/motion";

const nameLines = ["RYMAICHA", "AMEURI"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col">
        <div className="h-[30vh]" />

        <div>
          {nameLines.map((line, lineIndex) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                className="font-playfair text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-primary"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...heroWordTransition,
                  delay: lineIndex * 0.15,
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-xl font-inter text-sm text-secondary">
          Cybersecurity · AI Systems · Tech Entrepreneurship
        </p>

        <p className="mt-2 font-inter text-sm text-secondary">
          Carnegie Mellon University Qatar · Doha, Qatar
        </p>

        <a
          href="#work"
          className="hover-underline hover-underline-always mt-10 inline-flex w-fit items-center gap-2 font-inter text-sm text-primary focus-ring"
        >
          See my work
          <span className="text-accent" aria-hidden="true">
            →
          </span>
        </a>
      </div>

      <p
        className="absolute bottom-8 right-6 font-mono text-xs text-secondary md:right-8"
        style={{ writingMode: "vertical-rl" }}
      >
        © 2025
      </p>
    </section>
  );
}
