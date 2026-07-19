import { useEffect, useState } from "react";
import { personalInfo } from "../../data/content";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-theme-surface transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-label="Loading"
      role="status"
    >
      <div className="relative mb-8">
        <div className="glow-orb absolute -inset-8 h-32 w-32 bg-cyan-500/30" aria-hidden="true" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-theme glass-card">
          <span className="font-mono text-2xl font-bold gradient-text">AH</span>
        </div>
      </div>
      <p className="mb-4 font-mono text-sm text-theme-muted">{personalInfo.name}</p>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-theme-elevated">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-3 font-mono text-xs text-theme-muted">{progress}%</p>
    </div>
  );
}
