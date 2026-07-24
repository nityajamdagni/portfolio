import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

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
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-1 md:gap-0 border-b md:border-b-0 md:border-l border-white/10 pb-2 md:pb-0">
          {experience.map((exp, i) => (
            <button
              key={exp.company + exp.role}
              onClick={() => setActive(i)}
              className={`shrink-0 text-left font-mono text-sm px-4 py-3 border-l-2 -ml-px transition-colors whitespace-nowrap md:whitespace-normal ${
                active === i
                  ? "border-purple-glow text-text-hi bg-white/5"
                  : "border-transparent text-text-lo hover:bg-white/5 hover:text-text-hi"
              }`}
            >
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
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-text-hi">
              {item.role}{" "}
              <span className="text-blue-glow">@ {item.company}</span>
            </h3>
            <p className="font-mono text-sm text-text-lo mt-1">
              {item.org} · {item.period}
            </p>

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
                className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 pr-4 hover:border-purple-glow/50 transition-colors overflow-hidden"
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
