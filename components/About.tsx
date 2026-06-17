"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpTransition,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

const stats = [
  { value: "3", label: "Startups" },
  { value: "5+", label: "Projects" },
  { value: "4", label: "Roles" },
  { value: "3", label: "Languages" },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-divider px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <span className="section-number">01 — About</span>

        <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            transition={fadeUpTransition}
          >
            <p className="font-inter text-base leading-[1.7] text-primary md:text-lg">
              I&apos;m a junior at Carnegie Mellon University{" "}
              <span className="text-accent">Qatar</span> studying Information
              Systems with concentrations in{" "}
              <span className="text-accent">Cybersecurity</span> and Data
              Science. I build things at the intersection of AI, security, and
              emerging tech — from fintech{" "}
              <span className="text-accent">startups</span> to blockchain
              platforms to immersive galleries. I&apos;m interested in the{" "}
              <span className="text-accent">governance layer</span> of
              technology: who controls it, who it affects, and how to make it
              more accountable.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                variants={fadeUp}
                transition={fadeUpTransition}
              >
                <p className="font-playfair text-4xl text-primary md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
