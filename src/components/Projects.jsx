import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28">
      <SectionHeading n="03" title="Things I've Built" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-sm p-6 hover:border-purple-glow/50 transition-colors"
          >
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-glow/0 via-transparent to-purple-glow/0 group-hover:from-blue-glow/10 group-hover:to-purple-glow/10 transition-all pointer-events-none" />

            <h3 className="font-display text-xl font-semibold text-text-hi">
              {p.name}
            </h3>
            <p className="font-mono text-xs text-purple-glow mt-1 mb-4 tracking-wide uppercase">
              {p.tagline}
            </p>

            <p className="text-text-lo text-sm leading-relaxed mb-4">
              {p.description}
            </p>

            <ul className="space-y-2 mb-5">
              {p.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-text-lo/90 leading-relaxed">
                  <span className="text-cyan-glow shrink-0">▹</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/15 text-text-lo"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-glow hover:text-purple-glow transition-colors"
                >
                  <ExternalLink size={13} /> Live
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-glow hover:text-purple-glow transition-colors"
                >
                  <ExternalLink size={13} /> Demo
                </a>
              )}
              {p.links.apk && (
                <a
                  href={p.links.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-glow hover:text-purple-glow transition-colors"
                >
                  <Smartphone size={13} /> APK
                </a>
              )}
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-glow hover:text-purple-glow transition-colors"
                >
                  <FaGithub size={13} /> Code
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
