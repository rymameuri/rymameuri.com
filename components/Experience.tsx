"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpTransition,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";

type ExperienceEntry = {
  date: string;
  org: string;
  role: string;
  current?: boolean;
  bullets: string[];
};

const experiences: ExperienceEntry[] = [
  {
    date: "2025 – Present",
    org: "Désir, AI FinTech Startup",
    role: "Co-Founder & CEO",
    current: true,
    bullets: [
      "Leading product vision for an AI-powered financial technology platform",
      "Building go-to-market strategy and early-stage technical architecture",
      "Driving fundraising, partnerships, and user discovery across Qatar",
    ],
  },
  {
    date: "May 2026 – Present",
    org: "IX Lab, CMU-Q",
    role: "Research Assistant",
    current: true,
    bullets: [
      "Supporting interdisciplinary research at the intersection of AI and society",
      "Contributing to literature review, data analysis, and experimental design",
      "Collaborating with faculty on emerging technology governance topics",
    ],
  },
  {
    date: "May 2026 – Present",
    org: "Carnegie Mellon University Qatar",
    role: "IT Student Assistant",
    current: true,
    bullets: [
      "Providing technical support for campus systems and end-user troubleshooting",
      "Assisting with IT operations, documentation, and service desk workflows",
      "Supporting faculty and staff with hardware and software configurations",
    ],
  },
  {
    date: "2024 – Present",
    org: "Women in AI, Qatar Chapter",
    role: "Founder & Chapter Lead / Communications Director",
    current: true,
    bullets: [
      "Founded and scaled the Qatar chapter of Women in AI from the ground up",
      "Leading communications strategy, partnerships, and community outreach",
      "Organizing events that connect women in AI across academia and industry",
    ],
  },
  {
    date: "2024 – Present",
    org: "Women in AI, CMU-Q Chapter",
    role: "President",
    current: true,
    bullets: [
      "Leading chapter operations, programming, and member engagement on campus",
      "Coordinating workshops, speaker series, and mentorship initiatives",
      "Representing CMU-Q in the broader Women in AI global network",
    ],
  },
  {
    date: "Jul 2025 – Present",
    org: "ConnectED",
    role: "Executive, Product & Outreach",
    current: true,
    bullets: [
      "Driving product development and outreach for an education technology initiative",
      "Managing stakeholder communications and cross-functional project delivery",
      "Shaping user experience and growth strategy for digital learning tools",
    ],
  },
  {
    date: "May – Aug 2025",
    org: "TechPreneur",
    role: "AI & Digital Strategy Intern",
    bullets: [
      "Developed AI-driven digital strategy recommendations for startup clients",
      "Analyzed market trends and competitive landscapes in emerging tech sectors",
      "Supported content creation and automation workflows using AI tools",
    ],
  },
  {
    date: "2024 – 2025",
    org: "Association for Information Systems, CMU-Q",
    role: "Vice President",
    bullets: [
      "Managed chapter events, membership, and professional development programming",
      "Coordinated industry speaker sessions and networking opportunities",
      "Led executive board operations and annual planning for the AIS chapter",
    ],
  },
];

export default function Experience() {
  return (
    <section id="work" className="section-padding section-divider px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <span className="section-number">02 — Experience</span>

        <motion.div
          className="relative border-l border-border pl-8 md:pl-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {experiences.map((entry, index) => (
            <motion.article
              key={`${entry.org}-${entry.role}`}
              className={`relative ${index < experiences.length - 1 ? "mb-12 md:mb-16" : ""}`}
              variants={fadeUp}
              transition={fadeUpTransition}
            >
              <span
                className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-border md:-left-[49px]"
                aria-hidden="true"
              />

              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <time className="font-mono text-xs text-secondary">
                    {entry.date}
                  </time>
                  {entry.current && (
                    <span className="font-mono text-xs text-accent">
                      ● NOW
                    </span>
                  )}
                </div>
                <h3 className="font-inter text-base font-semibold tracking-tight text-primary sm:text-right">
                  {entry.org}
                </h3>
              </div>

              <p className="mb-4 font-inter text-sm italic text-secondary">
                {entry.role}
              </p>

              <ul className="space-y-2">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-inter text-sm leading-relaxed text-primary/90"
                  >
                    · {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
