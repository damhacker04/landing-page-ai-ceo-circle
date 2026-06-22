import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { HERO, STATS_HERO } from "@/components/landing/data";

/**
 * HeroBackdrop — abstract, magma-inspired animated visual using only divs/SVG.
 * Two slow-rotating orbital rings, a central glowing core, and parallax dust particles.
 */
const HeroBackdrop = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  // Generate stable particle positions once
  const particles = React.useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        x: (i * 73) % 100,
        y: (i * 137) % 100,
        s: 0.6 + ((i * 17) % 20) / 20,
        d: 4 + ((i * 11) % 8),
        delay: (i % 10) * 0.4,
      })),
    []
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Soft gold glow behind text */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(212,160,23,0.22),_transparent_60%)] blur-2xl" />
      </motion.div>

      {/* Central core */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute left-1/2 top-[58%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-hair border-white/10 animate-spin-slower">
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d4a017] shadow-[0_0_18px_4px_rgba(212,160,23,0.6)]" />
        </div>
        {/* Middle ring */}
        <div className="absolute inset-[14%] rounded-full border-hair border-white/12 animate-spin-slow">
          <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/70" />
        </div>
        {/* Inner ring */}
        <div className="absolute inset-[30%] rounded-full border-hair border-white/15">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_55%,_rgba(212,160,23,0.45),_rgba(212,160,23,0.05)_55%,_transparent_70%)] blur-[2px]" />
        </div>
        {/* Core */}
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f5e6b2] via-[#d4a017] to-[#3a2806]" />
          <div className="absolute -inset-4 rounded-full bg-[#d4a017]/40 blur-2xl" />
        </div>
      </motion.div>

      {/* Dust particles */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s * 2,
            height: p.s * 2,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: [0, -28, -56] }}
          transition={{
            duration: p.d,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid hairline overlay */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050505]" />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <HeroBackdrop />

      <Container className="relative z-10 pt-20 pb-28 md:pt-28 md:pb-36">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex w-fit items-center gap-2 rounded-full border-hair border-white/12 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4a017]/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/70">
            {HERO.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-5xl text-balance text-center text-[44px] font-medium leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[88px]"
        >
          <span className="block text-gradient-white">{HERO.titleA}</span>
          <span className="font-serif-italic block text-white/95">{HERO.titleB}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-balance text-center text-[15px] leading-relaxed text-white/65 md:text-[17px]"
        >
          {HERO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#apply" icon={ArrowUpRight}>
            {HERO.ctaPrimary}
          </MagneticButton>
          <MagneticButton href="#program" variant="ghost" icon={Download}>
            {HERO.ctaSecondary}
          </MagneticButton>
        </motion.div>

        {/* Hero stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border-hair border-white/10 bg-white/[0.02] backdrop-blur-md sm:grid-cols-5"
        >
          {STATS_HERO.map((s, i) => (
            <div
              key={i}
              className={`relative px-5 py-6 ${
                i !== STATS_HERO.length - 1 ? "sm:border-r border-hair border-white/10" : ""
              } ${i % 2 === 0 ? "border-r" : ""} ${i < STATS_HERO.length - 2 ? "border-b sm:border-b-0" : ""} border-hair border-white/10`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-medium text-white md:text-3xl">{s.value}</span>
                <span className="h-1 w-1 rounded-full bg-[#d4a017]" />
              </div>
              <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="mt-14 flex items-center justify-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.32em] text-white/40"
        >
          <span className="h-px w-10 bg-white/20" />
          Scroll to explore
          <span className="h-px w-10 bg-white/20" />
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
