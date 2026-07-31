import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MapPin } from "lucide-react";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

const NEON_ICONS = {
  terminal: Terminal,
};

function Logo({ logo }) {
  if (!logo) return null;

  if (logo.type === "neon") {
    const Icon = NEON_ICONS[logo.icon] ?? Terminal;
    return (
      <div
        className="w-14 h-14 rounded-lg shrink-0 flex items-center justify-center bg-void/80 border border-cyan-400/40"
        style={{ boxShadow: "0 0 18px 2px rgba(34,211,238,0.45)" }}
      >
        <Icon
          size={26}
          className="text-cyan-300"
          style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.9))" }}
        />
      </div>
    );
  }

  if (logo.type === "image") {
    return (
      <div className="w-14 h-14 rounded-lg border border-ink/10 bg-white shrink-0 overflow-hidden flex items-center justify-center">
        <img src={logo.src} alt="" className="w-full h-full object-contain p-1.5" />
      </div>
    );
  }

  return null;
}

function NeonBullet({ active }) {
  return (
    <span
      className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
        active ? "bg-purple-glow" : "bg-text-lo/30"
      }`}
      style={
        active
          ? { boxShadow: "0 0 8px 2px rgba(168,85,247,0.75)" }
          : undefined
      }
    />
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <section
      id="experience"
      className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28"
    >
      <SectionHeading n="02" title="Where I've Worked" />

      <div className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-10">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 md:gap-0 border-b md:border-b-0 md:border-l border-ink/10 pb-2 md:pb-0">
          {experience.map((exp, i) => (
            <button
              key={exp.company + exp.role}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-3 text-left font-mono text-sm px-4 py-3 border-l-2 -ml-px transition-colors whitespace-nowrap md:whitespace-normal ${
                active === i
                  ? "border-purple-glow text-text-hi bg-ink/5"
                  : "border-transparent text-text-lo hover:bg-ink/5 hover:text-text-hi"
              }`}
            >
              <NeonBullet active={active === i} />
              {exp.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <Logo logo={item.logo} />
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-text-hi">
                    {item.role}{" "}
                    <span className="text-blue-glow">@ {item.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-text-lo mt-1">
                    {item.org}
                  </p>
                  {item.location && (
                    <p className="flex items-center gap-1.5 font-mono text-xs text-text-lo/80 mt-1.5">
                      <MapPin size={12} className="text-purple-glow" />
                      {item.location}
                    </p>
                  )}
                </div>
              </div>

              <span className="font-mono text-xs text-text-lo/80 whitespace-nowrap sm:text-right shrink-0">
                {item.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {item.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-text-lo leading-relaxed">
                  <span className="text-purple-glow mt-1.5 shrink-0">▹</span>
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1.5 rounded-full border border-blue-glow/40 text-blue-glow"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.certificate && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-xl border border-ink/10 bg-ink/5 pr-4 hover:border-purple-glow/50 transition-colors overflow-hidden"
              >
                <img
                  src={item.certificate}
                  alt={`${item.company} certificate of recognition`}
                  className="h-16 w-24 object-cover"
                />
                <span className="font-mono text-xs text-text-lo">
                  View Certificate of Recognition ↗
                </span>
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
