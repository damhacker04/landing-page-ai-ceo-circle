import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { MENTOR } from "@/components/landing/data";
import { AtSign, ArrowUpRight } from "lucide-react";

const Mentor = () => {
  return (
    <section id="mentor" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-5">
          <SectionLabel>{MENTOR.label}</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              Mentored by a practitioner{" "}
              <span className="font-serif-italic text-gradient-gold">who has done it</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Lead mentor card */}
          <Reveal className="md:col-span-7">
            <GlowCard className="flex h-full flex-col p-7 md:p-10" glow="rgba(212, 160, 23, 0.22)">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {/* Avatar */}
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-[#d4a017]/20 blur-2xl" aria-hidden />
                  <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full border-hair border-white/15 bg-gradient-to-br from-[#1a1208] via-[#3a2806] to-[#d4a017] sm:h-28 sm:w-28">
                    <span className="font-serif-italic text-3xl text-white drop-shadow">
                      {MENTOR.lead.initials}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {MENTOR.lead.name}
                  </h3>
                  <p className="mt-1 text-[14px] text-white/65">{MENTOR.lead.role}</p>
                  <a
                    href="#apply"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-gold hover:text-white"
                  >
                    <AtSign className="h-3 w-3" />
                    {MENTOR.lead.handle}
                  </a>
                </div>
              </div>

              <p className="mt-8 text-[14.5px] leading-relaxed text-white/70">{MENTOR.lead.bio}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {MENTOR.lead.chips.map((c, i) => (
                  <span
                    key={i}
                    className="rounded-full border-hair border-white/12 bg-white/[0.03] px-3 py-1.5 text-[11.5px] tracking-tight text-white/75"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </GlowCard>
          </Reveal>

          {/* Team members */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/45">
              Backed by the MAXY AI leadership team
            </div>
            {MENTOR.team.map((m, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <GlowCard className="flex items-center gap-4 p-5 md:p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-hair border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] text-[12px] font-medium tracking-wider text-white">
                    {m.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[15px] font-medium text-white">{m.name}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-white/55">{m.role}</p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mentor;
