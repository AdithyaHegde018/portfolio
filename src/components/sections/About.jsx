import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import InterestCard from "../ui/InterestCard";
import { aboutContent } from "../../data/content";

export default function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Building Impactful Solutions"
          description="An Android developer and AI/ML graduate passionate about creating scalable, real-world technology."
        />

        <div className="mb-12 space-y-4 text-center md:mb-16 md:text-left">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="text-base leading-relaxed text-theme-secondary md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.interests.map((interest, index) => (
            <div
              key={interest.title}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <InterestCard {...interest} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
