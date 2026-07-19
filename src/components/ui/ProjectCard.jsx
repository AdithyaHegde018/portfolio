import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tags,
  featured,
  index = 0,
}) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`group flex flex-col overflow-hidden glass-card rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 ${
        featured ? "lg:flex-row" : ""
      } ${isVisible ? "animate-card-reveal opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms`, transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative overflow-hidden bg-theme-elevated ${
          featured ? "lg:w-2/5" : "aspect-video"
        }`}
      >
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-card)]/80 to-transparent" />
      </div>

      <div className={`flex flex-1 flex-col p-6 md:p-8 ${featured ? "lg:justify-center" : ""}`}>
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-cyan-400">
          {subtitle}
        </p>
        <h3 className="mb-3 text-xl font-bold text-theme-primary md:text-2xl">{title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-theme-secondary md:text-base">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-theme bg-theme-elevated px-3 py-1 font-mono text-xs text-theme-secondary"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
