import { motion } from "framer-motion";

export default function SectionHeading({ n, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-5 mb-14"
    >
      <span className="font-mono text-blue-glow text-lg">{n}.</span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl bg-gradient-to-r from-blue-glow to-purple-glow bg-clip-text text-transparent whitespace-nowrap">
        {title}
      </h2>
      <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
    </motion.div>
  );
}
