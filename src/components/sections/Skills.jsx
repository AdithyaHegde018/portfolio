import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import SkillCategoryCard from "../ui/SkillCategoryCard";
import { skillCategories } from "../../data/content";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-alt px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit spanning mobile development, AI/ML, databases, and professional soft skills."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
