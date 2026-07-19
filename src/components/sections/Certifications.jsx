import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import CertificationCard from "../ui/CertificationCard";
import { certifications } from "../../data/content";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="section-alt px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Certifications"
          title="Badges & Credentials"
          description="Professional certifications validating expertise in Android development, machine learning, IoT, and software engineering."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
