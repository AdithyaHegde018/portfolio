import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}
