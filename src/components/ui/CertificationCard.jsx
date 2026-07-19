function BadgeIcon({ type }) {
  const config = {
    android: { bg: "bg-green-500/10", text: "text-green-400", letter: "A" },
    ml: { bg: "bg-violet-500/10", text: "text-violet-400", letter: "ML" },
    iot: { bg: "bg-cyan-500/10", text: "text-cyan-400", letter: "IoT" },
    fullstack: { bg: "bg-blue-500/10", text: "text-blue-400", letter: "FS" },
    code: { bg: "bg-orange-500/10", text: "text-orange-400", letter: "C" },
    python: { bg: "bg-yellow-500/10", text: "text-yellow-400", letter: "Py" },
    cloud: { bg: "bg-cyan-500/10", text: "text-cyan-400", letter: "☁" },
    git: { bg: "bg-orange-500/10", text: "text-orange-400", letter: "G" },
  };

  const { bg, text, letter } = config[type] || config.code;

  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${bg} font-mono text-sm font-bold ${text}`}
      aria-hidden="true"
    >
      {letter}
    </div>
  );
}

export default function CertificationCard({ title, issuer, badge }) {
  return (
    <article className="flex items-start gap-4 glass-card rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30">
      <BadgeIcon type={badge} />
      <div>
        <h3 className="font-semibold text-theme-primary">{title}</h3>
        <p className="mt-1 text-sm text-theme-secondary">{issuer}</p>
      </div>
    </article>
  );
}
