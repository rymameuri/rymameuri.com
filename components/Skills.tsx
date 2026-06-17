"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpTransition,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

const skillCategories = [
  {
    category: "Cybersecurity",
    skills:
      "Secure by Design, Privacy by Design, IAM, Risk Analysis, NIST AI RMF, EU AI Act, ISO 42001",
  },
  {
    category: "AI / ML",
    skills:
      "Prompt engineering, RAG systems, Conversational AI, NLP, Anthropic API, AI workflow automation",
  },
  {
    category: "Technical",
    skills:
      "Python, SQL, Java, Three.js, Rails, React, Blockchain fundamentals",
  },
  {
    category: "Frameworks",
    skills:
      "Solove Taxonomy, GEMS, HIPAA/GLBA, Entman Framing Theory, Van Dijk CDA",
  },
  {
    category: "Languages",
    skills: "English, Arabic, French",
  },
];

export default function Skills() {
  return (
    <section className="section-padding section-divider px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <span className="section-number">04 — Skills</span>

        <motion.dl
          className="divide-y divide-border"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {skillCategories.map((item) => (
            <motion.div
              key={item.category}
              className="grid gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8 md:py-8"
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-secondary">
                {item.category}
              </dt>
              <dd className="font-inter text-sm text-primary md:text-base">
                {item.skills}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
