"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpTransition,
  staggerContainer,
  viewportConfig,
} from "@/lib/motion";
import styles from "@/styles/projects.module.css";

type Project = {
  name: string;
  description: string;
  tags: string[];
  areaClass: string;
};

const projects: Project[] = [
  {
    name: "Désir",
    description: "AI-powered fintech startup",
    tags: ["AI", "FinTech", "Founder"],
    areaClass: styles.featured,
  },
  {
    name: "Tawmeen",
    description: "Blockchain insurance platform",
    tags: ["Blockchain", "Smart Contracts", "Qatar"],
    areaClass: styles.small1,
  },
  {
    name: "SIGNAL",
    description: "AI social media tool built at QSTP hackathon",
    tags: ["Anthropic API", "Hackathon", "AI"],
    areaClass: styles.small2,
  },
  {
    name: "3D Art Gallery",
    description: "Immersive web gallery for Qatar Museums",
    tags: ["Three.js", "WebGL", "AR"],
    areaClass: styles.medium1,
  },
  {
    name: "CMU-Q AI Assistant",
    description: "RAG-powered student assistant",
    tags: ["RAG", "NLP", "Python"],
    areaClass: styles.medium2,
  },
  {
    name: "Corpus Linguistics Research",
    description: "BBC media framing analysis",
    tags: ["Research", "NLP", "Discourse"],
    areaClass: styles.medium3,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className={`${styles.card} ${project.areaClass}`}
      variants={fadeUp}
      transition={fadeUpTransition}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-inter text-xl font-medium text-primary md:text-2xl">
            {project.name}
          </h3>
          <motion.span
            className="text-accent"
            animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-hidden="true"
          >
            →
          </motion.span>
        </div>
        <p className="font-inter text-sm text-secondary">{project.description}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding section-divider px-6 md:px-8"
    >
      <div className="mx-auto max-w-content">
        <span className="section-number">03 — Projects</span>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
