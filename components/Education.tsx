"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpTransition, viewportConfig } from "@/lib/motion";

const coursework = [
  "Information Security",
  "Machine Learning",
  "Data Structures",
  "Database Design",
  "Systems Analysis",
  "Software Development",
  "Networks",
  "Statistics",
  "AI Ethics",
  "Blockchain",
];

export default function Education() {
  return (
    <section className="section-padding section-divider px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <span className="section-number">05 — Education</span>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <h3 className="font-inter text-2xl font-bold text-primary md:text-3xl">
            Carnegie Mellon University
          </h3>
          <p className="mt-3 font-inter text-base text-primary">
            B.S. Information Systems · Expected May 2028
          </p>
          <p className="mt-2 font-inter text-sm text-secondary">
            Concentrations: Cybersecurity &amp; Data Science
          </p>
          <p className="mt-1 font-inter text-sm text-secondary">
            Minors: Techpreneurship · History · Professional Writing
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span key={course} className="tag-pill">
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
