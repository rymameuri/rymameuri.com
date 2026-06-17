"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpTransition, viewportConfig } from "@/lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding section-divider border-b border-border px-6 md:px-8"
    >
      <div className="mx-auto max-w-content text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <h2 className="font-playfair text-4xl text-primary md:text-5xl">
            Let&apos;s talk.
          </h2>

          <a
            href="mailto:rameuri@andrew.cmu.edu"
            className="hover-underline mt-8 inline-block font-inter text-xl text-primary focus-ring md:text-3xl"
          >
            rameuri@andrew.cmu.edu
          </a>

          <div className="mt-8 flex flex-col items-center gap-2 font-mono text-xs text-secondary">
            <a
              href="https://linkedin.com/in/rymameuri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline focus-ring"
            >
              LinkedIn
            </a>
            <span>Doha, Qatar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
