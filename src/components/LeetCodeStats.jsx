import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { Flame, Trophy, Target, CalendarCheck } from "lucide-react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const API_BASE = "https://leetcode-stats.tashif.codes";
const USERNAME = "nityajamdagni";

function StatCard({ icon: Icon, iconClass = "text-text-lo/60", label, value, subtitle, children }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col">
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 blur-2xl pointer-events-none" />
      <div className="relative flex items-center justify-between mb-3">
        <span className="font-mono text-[11px] tracking-widest text-text-lo/70 uppercase">
          {label}
        </span>
        <Icon size={16} className={iconClass} />
      </div>
      <p className="relative font-display text-3xl sm:text-4xl font-bold text-text-hi mb-1">
        {value}
      </p>
      {subtitle && (
        <p className="relative font-mono text-xs text-text-lo">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [heatmap, setHeatmap] = useState(null);
  const [profileStats, setProfileStats] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [statsRes, heatmapRes, baseRes] = await Promise.all([
          fetch(`${API_BASE}/${USERNAME}/stats`),
          fetch(`${API_BASE}/${USERNAME}/heatmap`),
          fetch(`${API_BASE}/${USERNAME}`),
        ]);
        if (!statsRes.ok || !heatmapRes.ok || !baseRes.ok)
          throw new Error("bad response");
        const statsJson = await statsRes.json();
        const heatmapJson = await heatmapRes.json();
        const baseJson = await baseRes.json();
        if (cancelled) return;
        setStats(statsJson.data);
        setHeatmap(heatmapJson.data);
        setProfileStats(baseJson.data);
        setStatus("ready");
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const total = stats?.totalSolved || 1;
  const easy = stats?.byDifficulty?.easy ?? 0;
  const medium = stats?.byDifficulty?.medium ?? 0;
  const hard = stats?.byDifficulty?.hard ?? 0;

  return (
    <section id="leetcode" className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28">
      <SectionHeading n="05" title="The Daily Grind" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile strip */}
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-sm p-5 sm:p-6 mb-6 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl border border-amber-400/20 bg-amber-400/10 flex items-center justify-center shrink-0">
              <SiLeetcode size={22} className="text-amber-400" />
            </div>
            <div>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-text-lo hover:text-purple-glow transition-colors"
              >
                leetcode.com/u/
                <span className="font-semibold text-text-hi">{USERNAME}</span>
              </a>
              <p className="font-mono text-xs text-text-lo/60 mt-0.5">
                {status === "ready" && profileStats?.badgesCount
                  ? `${profileStats.badgesCount} badges earned`
                  : "Solving, one problem at a time"}
              </p>
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] tracking-widest ${
              status === "ready"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                : "border-white/10 bg-white/5 text-text-lo/70"
            }`}
          >
            {status === "ready" && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}
            {status === "ready" ? "LIVE" : status === "loading" ? "SYNCING…" : "UNAVAILABLE"}
          </span>
        </div>

        {status === "loading" && (
          <div className="grid sm:grid-cols-3 gap-6 animate-pulse">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-40 rounded-xl bg-white/5" />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="text-center py-6 rounded-2xl border border-white/10 bg-surface/60">
            <p className="text-text-lo text-sm mb-4">
              Live stats are taking a nap right now — check the profile directly instead.
            </p>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm border border-blue-glow/50 text-text-hi hover:bg-blue-glow/10 transition-colors"
            >
              View LeetCode Profile <SiLeetcode size={14} />
            </a>
          </div>
        )}

        {status === "ready" && stats && (
          <>
            <div className="grid sm:grid-cols-3 gap-6">
              <StatCard icon={Target} label="Problems Solved" value={stats.totalSolved}>
                <div className="relative mt-4">
                  <div className="flex h-2.5 w-full rounded-full overflow-hidden bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(easy / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-emerald-400"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(medium / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                      className="bg-amber-400"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(hard / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="bg-rose-400"
                    />
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 font-mono text-[11px] text-text-lo">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {easy} easy
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {medium} medium
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      {hard} hard
                    </span>
                  </div>
                </div>
              </StatCard>

              <StatCard
                icon={Flame}
                iconClass="text-amber-400"
                label="Current Streak"
                value={heatmap?.currentStreak ?? 0}
                subtitle={
                  heatmap?.longestStreak ? `best ${heatmap.longestStreak} days` : undefined
                }
              />

              <StatCard
                icon={Trophy}
                iconClass="text-amber-400"
                label="Contest Rating"
                value={profileStats?.currentRating ? Math.round(profileStats.currentRating) : "—"}
                subtitle={
                  profileStats?.totalActiveDays
                    ? `${profileStats.totalActiveDays} active days`
                    : undefined
                }
              />
            </div>

            <p className="mt-6 flex items-center justify-center gap-2 text-[11px] font-mono text-text-lo/60">
              <CalendarCheck size={13} />
              Pulled live from LeetCode · refreshes on page load
            </p>
          </>
        )}
      </motion.div>
    </section>
  );
}
