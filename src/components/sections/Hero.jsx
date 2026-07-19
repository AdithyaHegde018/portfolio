import Button from "../ui/Button";
import { personalInfo } from "../../data/content";

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      <div className="glow-orb -top-32 -left-32 h-96 w-96 bg-cyan-500/20" aria-hidden="true" />
      <div className="glow-orb top-1/2 -right-32 h-80 w-80 bg-violet-500/15" aria-hidden="true" />
      <div className="glow-orb bottom-0 left-1/3 h-64 w-64 bg-cyan-500/10" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="animate-fade-in-up order-2 lg:order-1">
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-cyan-400">
            Portfolio
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-theme-primary sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="mb-2 text-lg font-medium text-theme-secondary sm:text-xl lg:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-theme-muted sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects">
              View Projects
              <ArrowIcon />
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
            <Button href={personalInfo.resumePath} variant="secondary" download>
              <DownloadIcon />
              Resume
            </Button>
          </div>
        </div>

        <div className="animate-fade-in order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              className="absolute -inset-4 animate-gradient rounded-full bg-gradient-to-r from-cyan-500/30 to-violet-500/30 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative animate-float overflow-hidden rounded-2xl glass-card p-2 shadow-2xl">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} profile`}
                className="h-64 w-64 rounded-xl object-cover sm:h-80 sm:w-80"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
