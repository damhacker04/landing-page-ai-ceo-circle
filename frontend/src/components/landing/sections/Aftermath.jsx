import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { Users, Bot, Briefcase } from "lucide-react";
import { AFTERMATH } from "@/components/landing/data";

const icons = [Users, Bot, Briefcase];

const Aftermath = () => {
  return (
    <section id="after" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-5">
          <SectionLabel>{AFTERMATH.label}</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              AI CEO Circle is the{" "}
              <span className="font-serif-italic text-gradient-gold">beginning</span>, not the end
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">{AFTERMATH.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {AFTERMATH.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <GlowCard className="flex h-full flex-col p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border-hair border-white/10 bg-white/[0.03] text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/45">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-7 text-[20px] font-medium tracking-tight text-white md:text-[22px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/60">{s.body}</p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Aftermath;
