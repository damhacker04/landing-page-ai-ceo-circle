import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { PROGRAM } from "@/components/landing/data";
import { Compass, Brain, Workflow } from "lucide-react";

const icons = [Compass, Brain, Workflow];

const Program = () => {
  return (
    <section id="program" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROGRAM.label}</SectionLabel>
            <Reveal className="mt-5">
              <h2 className="text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                What AI CEO Circle{" "}
                <span className="font-serif-italic text-gradient-gold">actually delivers</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-[15px] leading-relaxed text-white/60">{PROGRAM.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROGRAM.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <GlowCard className="flex h-full flex-col p-7 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-hair border-white/10 bg-gradient-to-br from-[#d4a017]/15 to-transparent text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-7 font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/45">
                    {it.tag}
                  </div>
                  <h3 className="mt-2 text-[22px] font-medium leading-snug tracking-tight text-white md:text-[24px]">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{it.body}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Program;
