import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { PROBLEM } from "@/components/landing/data";

const Problem = () => {
  return (
    <section id="problem" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROBLEM.label}</SectionLabel>
            <Reveal className="mt-5">
              <h2 className="text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                The real AI problem isn't technology.{" "}
                <span className="font-serif-italic text-gradient-gold">It's leadership.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-[15px] leading-relaxed text-white/60">{PROBLEM.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROBLEM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <GlowCard className="p-7 md:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold">
                    {it.n}
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r from-[#d4a017]/60 to-transparent" />
                </div>
                <h3 className="mt-6 text-[19px] font-medium leading-snug tracking-tight text-white md:text-[21px]">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{it.body}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Problem;
