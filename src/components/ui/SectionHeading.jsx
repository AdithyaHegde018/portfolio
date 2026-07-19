export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <p className="mb-3 font-mono text-sm font-medium uppercase tracking-widest text-cyan-400">
        {label}
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-theme-primary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-theme-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
