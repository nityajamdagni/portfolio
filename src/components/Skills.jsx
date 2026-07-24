import { motion } from "framer-motion";
import { skillGroups, achievements } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28">
      <SectionHeading n="04" title="Tech Stack & Milestones" />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16">
        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <p className="font-mono text-xs tracking-widest text-cyan-glow mb-3 uppercase">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-text-lo hover:border-blue-glow/50 hover:text-text-hi transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative border-l border-white/10 pl-8 space-y-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[35px] top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-glow to-purple-glow" />
              <p className="font-mono text-[11px] text-text-lo/70 tracking-wide">
                {a.period}
              </p>
              <h4 className="font-display font-semibold text-text-hi mt-0.5">
                {a.title}
              </h4>
              <p className="text-sm text-text-lo mt-0.5">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
