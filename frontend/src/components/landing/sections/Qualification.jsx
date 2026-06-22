import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { Check, X } from "lucide-react";
import { QUALIFICATION } from "@/components/landing/data";

const Qualification = () => {
  return (
    <section id="qualification" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-5">
          <SectionLabel>{QUALIFICATION.label}</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              Is this program{" "}
              <span className="font-serif-italic text-gradient-gold">for you?</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Reveal>
            <GlowCard className="h-full p-7 md:p-9" glow="rgba(212, 160, 23, 0.20)">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border-hair border-[#d4a017]/30 bg-[#d4a017]/10 text-gold">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-[15px] font-medium tracking-tight text-white">
                  This is for you if
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {QUALIFICATION.forYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#d4a017]/15 text-gold">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-white/75">{t}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlowCard className="h-full p-7 md:p-9" glow="rgba(255, 255, 255, 0.08)">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg border-hair border-white/15 bg-white/[0.04] text-white/70">
                  <X className="h-4 w-4" />
                </div>
                <span className="text-[15px] font-medium tracking-tight text-white">
                  This is not for you if
                </span>
              </div>
              <ul className="mt-7 space-y-4">
                {QUALIFICATION.notForYou.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-white/[0.06] text-white/60">
                      <X className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-white/60">{t}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Qualification;
