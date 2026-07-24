export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-center">
      <p className="font-display text-lg font-semibold text-text-hi">
        Nitya<span className="text-purple-glow">.</span>
      </p>
      <p className="font-mono text-xs text-text-lo/70 mt-2">
        © {new Date().getFullYear()} Nitya Jamdagni · Built with React, Tailwind &amp; a lot of coffee
      </p>
    </footer>
  );
}
