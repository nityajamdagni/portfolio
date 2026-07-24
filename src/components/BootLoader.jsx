import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> INITIALIZING NITYA.SYS",
  "> LOADING MODULES: REACT · NODE · GEMINI · VERTEX_AI",
  "> MOUNTING NEURAL INTERFACE...",
  "> CALIBRATING STARFIELD...",
  "> ACCESS GRANTED",
];

export default function BootLoader({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setExiting(true), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 420);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    const target = Math.min(100, (lineIndex / LINES.length) * 100);
    const t = setTimeout(() => setProgress(target), 60);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(onDone, 650);
      return () => clearTimeout(t);
    }
  }, [exiting, onDone]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void px-6"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="w-full max-w-md font-mono text-xs sm:text-sm">
            <div className="mb-6 flex items-center gap-2 text-cyan-glow">
              <span className="h-2 w-2 rounded-full bg-cyan-glow animate-pulse" />
              PORTFOLIO.SYS
            </div>
            <div className="space-y-2 min-h-[130px]">
              {LINES.slice(0, lineIndex).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    i === LINES.length - 1
                      ? "text-purple-glow"
                      : "text-blue-glow/90"
                  }
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mb-1.5 tracking-widest">
                <span>LOADING</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-[3px] w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-glow to-purple-glow"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
