import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="font-mono text-xs sm:text-sm tracking-[0.3em] text-cyan-glow mb-6"
      >
        SYSTEM ONLINE · WELCOME, EXPLORER
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="font-display font-bold leading-[0.95] text-[13vw] sm:text-7xl md:text-8xl tracking-tight"
      >
        <span className="bg-gradient-to-r from-blue-glow via-sky-300 to-purple-glow bg-clip-text text-transparent">
          NITYA
        </span>{" "}
        <span className="bg-gradient-to-r from-purple-glow to-fuchsia-400 bg-clip-text text-transparent">
          JAMDAGNI
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-6 font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-text-lo text-sm sm:text-lg"
      >
        Full Stack Developer <span className="text-purple-glow">//</span> AI Engineer
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
      >
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-7 py-3 rounded-full font-mono text-sm font-medium bg-gradient-to-r from-blue-glow to-purple-glow text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_-6px_rgba(139,92,246,0.9)] transition-shadow"
        >
          Explore My Work
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-7 py-3 rounded-full font-mono text-sm font-medium border border-blue-glow/50 text-text-hi hover:bg-blue-glow/10 transition-colors"
        >
          Get in Touch
        </button>
      </motion.div>

      <motion.button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.1, duration: 0.6 },
          y: { delay: 1.1, duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 text-blue-glow/80 hover:text-purple-glow transition-colors"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
