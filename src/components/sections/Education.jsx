import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import { education } from "../../data/content";

export default function Education() {
  return (
    <AnimatedSection id="education" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Education"
          title="Academic Background"
          description="Formal training in artificial intelligence, machine learning, and software engineering."
        />

        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.degree}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-theme-primary">{item.degree}</h3>
                  <p className="mt-1 text-violet-400">{item.institution}</p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-theme bg-theme-elevated px-4 py-1 font-mono text-xs text-theme-muted">
                  {item.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-theme-secondary md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
