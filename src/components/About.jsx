import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";
import { profile, education } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28">
      <SectionHeading n="01" title="About Me" />

      <div className="grid md:grid-cols-[340px_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-[260px] sm:w-[300px]"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-glow to-purple-glow opacity-60 blur-xl" />

          <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-surface to-void">
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute inset-0 w-full h-full object-cover object-[50%_20%] scale-[1.45]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/0 to-void/10" />

            {/* HUD corner brackets */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-blue-glow/80 rounded-tl-md" />
            <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-purple-glow/80 rounded-tr-md" />
            <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-purple-glow/80 rounded-bl-md" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-blue-glow/80 rounded-br-md" />

            {/* status chip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-white/10 bg-void/70 backdrop-blur-sm px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
              ONLINE
            </div>
          </div>
        </motion.div>

        <div>
          {profile.bio.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-text-lo leading-relaxed mb-4"
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-4 mb-8 text-sm font-mono text-text-lo/80 border-l-2 border-blue-glow/40 pl-4 space-y-1">
            <p>{education.school}</p>
            <p>{education.degree}</p>
            <p>{education.period}</p>
            <p className="text-blue-glow">{education.gpa}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm bg-blue-glow text-white hover:bg-blue-glow/90 transition-colors"
            >
              Contact Me <Mail size={15} />
            </a>
            <a
              href="/Nitya_Jamdagni_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm border border-blue-glow/50 text-text-hi hover:bg-blue-glow/10 transition-colors"
            >
              Download CV <FileDown size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
