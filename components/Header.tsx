import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="#" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="truncate text-xs font-semibold tracking-tight sm:text-sm">
            Rym Aicha Ameuri
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          <a
            href="#about"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden flex-shrink-0 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex sm:px-4 sm:text-sm"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
