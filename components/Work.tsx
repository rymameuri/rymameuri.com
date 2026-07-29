type Thread = "build" | "research" | "craft";

type Project = {
  id: string;
  name: string;
  role: string;
  description: string;
  threads: Thread[];
  tags: string[];
  year: string;
};

const THREAD_COLORS: Record<Thread, string> = {
  build: "#724538",
  research: "#403d3d",
  craft: "#a67c6f",
};

const THREAD_SHADOW: Record<Thread, string> = {
  build: "rgba(114, 69, 56, 0.4)",
  research: "rgba(64, 61, 61, 0.4)",
  craft: "rgba(166, 124, 111, 0.4)",
};

const PROJECTS: Project[] = [
  {
    id: "trajekt",
    name: "Trajekt",
    role: "Co-founder & CEO",
    description:
      "AI-powered student guidance platform for MENA region. Designed with security governance, cultural nuance, and regional specificity at the core.",
    threads: ["build", "research", "craft"],
    tags: ["AI", "EdTech", "MENA", "Security", "Governance"],
    year: "2026–Present",
  },
  {
    id: "mytartan",
    name: "MyTartan",
    role: "Builder — IX Lab, CMU-Q",
    description:
      "AI assistant for CMU-Q students who keep getting handed systems made for Pittsburgh. Focused on trustworthy retrieval — admitting what it doesn't know instead of guessing confidently.",
    threads: ["build", "research", "craft"],
    tags: ["AI", "Campus", "CMU-Q", "Trust", "Retrieval"],
    year: "2026–Present",
  },
  {
    id: "women-in-ai",
    name: "Women in AI — Qatar Chapter",
    role: "Founding Team, Communications Director",
    description:
      "Built regional community infrastructure for ethics, policy, and technical programming across Qatar.",
    threads: ["research", "craft"],
    tags: ["Community", "Ethics", "Leadership", "Policy"],
    year: "2025–Present",
  },
  {
    id: "ix-lab",
    name: "IX Lab, CMU-Q",
    role: "Research Assistant",
    description:
      "Supporting emerging technology research—AR/VR, AI, and digital media—including AI-powered tools built with faculty and industry partners.",
    threads: ["research", "craft"],
    tags: ["Research", "AR/VR", "AI", "Immersive"],
    year: "2026–Present",
  },
  {
    id: "connected",
    name: "ConnectED",
    role: "Executive — Product & Outreach",
    description:
      "Co-developed a three-sided EdTech marketplace across MENA. Secured LOIs from UKM and UDST. The experience catalyzed building Trajekt.",
    threads: ["build", "research"],
    tags: ["EdTech", "Marketplace", "MENA", "Catalyst"],
    year: "2025–2026",
  },
  {
    id: "techpreneur",
    name: "TechPreneur",
    role: "AI & Digital Strategy Intern",
    description:
      "Prototyped conversational AI flows for Noor, an Arabic-first educational assistant. 20+ intents, 20+ usability tests—early work that led to Trajekt. Used by students today!",
    threads: ["build", "research"],
    tags: ["AI", "Prototyping", "Strategy"],
    year: "May–Sep 2025",
  },
  {
    id: "media-framing",
    name: "Media Framing & Displacement",
    role: "Researcher — Prof. Gomez-Laich CMU-Q",
    description:
      "Analyzed BBC News framing of displacement terminology across crises using Entman, Said, and Van Dijk frameworks.",
    threads: ["research", "craft"],
    tags: ["Research", "Media Analysis", "Displacement", "Narrative"],
    year: "2026",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-20">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-research sm:mb-4">
            Work
          </p>
          <h2 className="font-fraunces mb-6 text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            Projects at the intersections
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            Each project is anchored to one or more threads. The intersections
            show where my worlds actually overlap.
          </p>
        </div>

        <div className="grid gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-lg border border-border bg-muted/30 p-4 transition-all duration-300 hover:border-thread-build/30 hover:bg-muted/60 sm:p-6 md:p-8"
            >
              <div className="absolute right-6 top-6 flex gap-3">
                {project.threads.map((thread) => (
                  <div
                    key={thread}
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: THREAD_COLORS[thread],
                      boxShadow: `0 0 6px ${THREAD_SHADOW[thread]}`,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground/50">
                  {project.year}
                </p>
                <h3 className="font-fraunces mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-thread-build sm:mb-3 sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-build sm:mb-4 sm:text-sm">
                  {project.role}
                </p>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-foreground/70 sm:mb-6 sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/50 bg-background px-3 py-1 font-mono text-xs uppercase tracking-wider text-foreground/70 transition-colors hover:border-thread-build/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
