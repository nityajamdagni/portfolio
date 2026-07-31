import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leetcode", label: "Leetcode" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(NAV[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently most visible
  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      Boolean
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Focus on a horizontal band around the vertical center of the
        // viewport so the link updates roughly when a section is "in focus"
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
        scrolled ? "backdrop-blur-md bg-void/70 border-b border-ink/5" : ""
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

        <div className="hidden md:flex items-center gap-1 font-mono text-sm">
          {NAV.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors ${
                  isActive ? "text-white" : "text-text-lo hover:text-text-hi"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-glow to-purple-glow -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/Nitya_Jamdagni_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-medium bg-gradient-to-r from-blue-glow to-purple-glow text-white shadow-[0_0_20px_-6px_rgba(139,92,246,0.7)] hover:shadow-[0_0_28px_-4px_rgba(139,92,246,0.9)] transition-shadow"
          >
            Resume <Download size={13} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-ink/10 bg-ink/5 flex items-center justify-center text-text-hi hover:border-purple-glow/50 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-full border border-ink/10 bg-ink/5 flex items-center justify-center text-text-hi"
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
          className="md:hidden bg-void/95 backdrop-blur-md border-b border-ink/5 px-5 pb-4 flex flex-col gap-3 font-mono text-sm"
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`text-left py-1 transition-colors ${
                activeId === item.id
                  ? "text-purple-glow font-semibold"
                  : "text-text-lo hover:text-text-hi"
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Nitya_Jamdagni_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 mt-1 font-mono text-xs font-medium bg-gradient-to-r from-blue-glow to-purple-glow text-white"
          >
            Resume <Download size={13} />
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
