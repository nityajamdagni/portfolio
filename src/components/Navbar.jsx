import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV = [
  { id: "about", label: "About", n: "01" },
  { id: "experience", label: "Experience", n: "02" },
  { id: "projects", label: "Projects", n: "03" },
  { id: "skills", label: "Skills", n: "04" },
  { id: "leetcode", label: "Leetcode", n: "05" },
  { id: "contact", label: "Contact", n: "06" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md bg-void/70 border-b border-white/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        <button
          onClick={() => go("hero")}
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-text-hi"
        >
          Nitya
          <span className="text-purple-glow">.</span>
          <span className="inline-block w-2 h-[2px] bg-gradient-to-r from-blue-glow to-purple-glow align-middle ml-1" />
        </button>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group flex items-baseline gap-1.5 text-text-lo hover:text-text-hi transition-colors"
            >
              <span className="text-blue-glow text-[11px] group-hover:text-purple-glow transition-colors">
                {item.n}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-hi hover:border-purple-glow/50 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-text-hi"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-void/95 backdrop-blur-md border-b border-white/5 px-5 pb-4 flex flex-col gap-3 font-mono text-sm"
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="flex items-baseline gap-2 text-text-lo hover:text-text-hi py-1"
            >
              <span className="text-blue-glow text-[11px]">{item.n}</span>
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
