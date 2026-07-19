import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/content";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-alt px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="Selected projects showcasing Android development, AI/ML, IoT, and software engineering expertise."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
