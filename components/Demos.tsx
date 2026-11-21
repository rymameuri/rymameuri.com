type Demo = {
  id: string;
  title: string;
  description: string;
  src: string;
  tags: string[];
};

// Add a new demo: drop the .mp4 into /public/demos and add an entry here.
const DEMOS: Demo[] = [
  {
    id: "scotty",
    title: "Scotty",
    description: "A quick walkthrough of how it works.",
    src: "/demos/scotty.mp4",
    tags: ["Demo"],
  },
];

export default function Demos() {
  return (
    <section id="demos" className="relative bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-research sm:mb-4">
            Demos
          </p>
          <h2 className="font-fraunces mb-6 text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
            See what I&apos;ve made
          </h2>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            Short video walkthroughs of things I&apos;ve built.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {DEMOS.map((demo) => (
            <article
              key={demo.id}
              className="group rounded-lg border border-border bg-muted/30 p-4 transition-all duration-300 hover:border-thread-build/30 hover:bg-muted/60 sm:p-6"
            >
              <video
                className="mb-4 aspect-video w-full rounded-md bg-black object-cover"
                src={demo.src}
                controls
                playsInline
                preload="metadata"
              />
              <h3 className="font-fraunces mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-thread-build sm:text-2xl">
                {demo.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                {demo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {demo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/50 bg-background px-3 py-1 font-mono text-xs uppercase tracking-wider text-foreground/70"
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
