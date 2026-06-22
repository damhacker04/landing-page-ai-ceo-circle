import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { ECOSYSTEM } from "@/components/landing/data";
import { Sparkles, GraduationCap, Building2, Bot } from "lucide-react";

const icons = [GraduationCap, Building2, Bot];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="relative z-10 py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-6">
          <SectionLabel>{ECOSYSTEM.label}</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              {ECOSYSTEM.title.split("ecosystem").map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="font-serif-italic text-gradient-gold">ecosystem</span>
                  )}
                </React.Fragment>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">
              {ECOSYSTEM.intro}
            </p>
          </Reveal>
        </div>

        {/* 3 main cards */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border-hair border-white/10 bg-white/[0.02] md:grid-cols-3">
          {ECOSYSTEM.cards.map((c, i) => {
            const Icon = icons[i] || Sparkles;
            return (
              <Reveal key={i} delay={i * 0.08} className="h-full">
                <GlowCard className="flex h-full flex-col rounded-none border-0 bg-transparent p-7 md:p-9" interactive>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border-hair border-white/10 bg-white/[0.03] text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-[22px] font-medium tracking-tight text-white md:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{c.body}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>

        {/* Outro */}
        <Reveal delay={0.15}>
          <div className="mt-12 grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-[15px] leading-relaxed text-white/65">{ECOSYSTEM.outro}</p>
            </div>
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {ECOSYSTEM.pillars.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl border-hair border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                      {p.tag}
                    </div>
                    <div className="mt-2 text-[13px] leading-relaxed text-white/75">{p.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Ecosystem;
