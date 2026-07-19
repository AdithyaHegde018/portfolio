export default function InterestCard({ title, description, icon }) {
  return (
    <article className="group glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
        <InterestIcon type={icon} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-theme-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-theme-secondary">{description}</p>
    </article>
  );
}

function InterestIcon({ type }) {
  const icons = {
    android: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18h.01M8 21h8M12 3v2m-4 3h8M7 8l-1 12h12L17 8H7z"
      />
    ),
    ai: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    iot: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M4.93 9.071a14 14 0 0114.14 0"
      />
    ),
    code: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    ),
  };

  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

export { InterestIcon };
