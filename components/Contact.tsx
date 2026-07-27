import ContactThreads from "@/components/ContactThreads";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-background px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="relative mx-auto max-w-4xl">
        <ContactThreads />

        <div className="relative z-10 text-center">
          <div className="mb-12 sm:mb-20">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft sm:mb-4">
              Get in touch
            </p>
            <h2 className="font-fraunces mb-6 text-3xl font-bold text-foreground sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s talk about the threads
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Whether you&apos;re interested in Trajekt, research collaboration,
              community building, or just want to chat about the intersection of AI,
              ethics, and identity—I&apos;d love to hear from you.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:mb-16 sm:gap-6 md:grid-cols-3">
            <a
              href="mailto:rameuri@andrew.cmu.edu"
              className="group flex flex-col items-center justify-center rounded-lg border border-border bg-background/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-thread-build/30 hover:bg-background sm:p-8"
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-build sm:mb-3">
                Email
              </p>
              <p className="font-fraunces break-words text-base font-bold text-foreground transition-colors group-hover:text-thread-build sm:text-lg">
                rameuri@andrew.cmu.edu
              </p>
            </a>

            <a
              href="https://linkedin.com/in/rym-ameuri-cmu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-lg border border-border bg-background/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-thread-research/30 hover:bg-background sm:p-8"
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-research sm:mb-3">
                LinkedIn
              </p>
              <p className="font-fraunces text-base font-bold text-foreground transition-colors group-hover:text-thread-research sm:text-lg">
                LinkedIn Profile
              </p>
            </a>

            <a
              href="https://github.com/rymameuri"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-lg border border-border bg-background/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-thread-craft/30 hover:bg-background sm:p-8"
            >
              <p className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-thread-craft sm:mb-3">
                GitHub
              </p>
              <p className="font-fraunces text-base font-bold text-foreground transition-colors group-hover:text-thread-craft sm:text-lg">
                @rymameuri
              </p>
            </a>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:rameuri@andrew.cmu.edu"
              className="relative z-10 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
            >
              Send me an email
            </a>
            <a
              href="#about"
              className="relative z-10 rounded-md border border-border bg-background/90 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-thread-build/50 hover:bg-background sm:px-8 sm:py-4 sm:text-base"
            >
              Learn more about my work
            </a>
          </div>
        </div>
      </div>

      <footer className="relative z-10 mx-auto mt-20 max-w-4xl border-t border-border px-4 pt-8 sm:mt-32 sm:pt-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-foreground/50 sm:flex-row sm:gap-6 sm:text-sm">
          <div className="flex items-center gap-2">
            <span>Rym Aicha Ameuri</span>
          </div>
          <p>
            Built with <span className="text-thread-build">build</span>,{" "}
            <span className="text-thread-research">research</span>, and{" "}
            <span className="text-thread-craft">craft</span>
          </p>
          <p className="font-mono text-xs uppercase tracking-wider">
            © 2026. All threads reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
