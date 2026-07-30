import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Rocket } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const TILES = [
  { label: "LinkedIn", icon: FaLinkedin, href: profile.links.linkedin },
  { label: "GitHub", icon: FaGithub, href: profile.links.github },
  { label: "LeetCode", icon: SiLeetcode, href: profile.links.leetcode },
  { label: "Email", icon: Mail, href: `mailto:${profile.email}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a voyager"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28">
      <SectionHeading n="06" title="Let's Connect ! " />

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-purple-glow/30 bg-gradient-to-b from-surface/80 to-void/60 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-text-lo mb-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM STATUS: ONLINE
            </span>
            <span>COMMS READY</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {TILES.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-7 hover:border-blue-glow/50 hover:bg-white/10 transition-colors"
              >
                <Icon size={22} className="text-blue-glow group-hover:text-purple-glow transition-colors" />
                <span className="font-mono text-xs tracking-wide text-text-lo">
                  {label.toUpperCase()}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 font-mono text-[11px] text-text-lo">
            <span>SIGNAL STRENGTH: 100%</span>
            <span className="w-2.5 h-2.5 rounded-full bg-blue-glow shadow-[0_0_10px_2px_rgba(79,142,247,0.6)]" />
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <input
            required
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-blue-glow/10 to-purple-glow/10 px-5 py-4 text-text-hi placeholder:text-text-lo/60 outline-none focus:border-blue-glow/60 transition-colors"
          />
          <input
            required
            type="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-blue-glow/10 to-purple-glow/10 px-5 py-4 text-text-hi placeholder:text-text-lo/60 outline-none focus:border-blue-glow/60 transition-colors"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message to Nitya"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-gradient-to-br from-blue-glow/10 to-purple-glow/10 px-5 py-4 text-text-hi placeholder:text-text-lo/60 outline-none focus:border-blue-glow/60 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl py-4 font-mono font-medium text-white bg-gradient-to-r from-blue-glow to-purple-glow shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_-6px_rgba(139,92,246,0.9)] transition-shadow"
          >
            {sent ? "Message Queued" : "Launch Message"}
            <Rocket size={16} />
          </button>
          {sent && (
            <p className="text-xs font-mono text-cyan-glow text-center">
              Your email client should open shortly — thanks for reaching out!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
