import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import GlowCard from "@/components/landing/ui/GlowCard";
import { TESTIMONIALS } from "@/components/landing/data";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="voices" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-5">
          <SectionLabel>{TESTIMONIALS.label}</SectionLabel>
          <Reveal>
            <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
              What CEOs <span className="font-serif-italic text-gradient-gold">are saying</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <GlowCard className="flex h-full flex-col p-7 md:p-8">
                <Quote className="h-5 w-5 text-gold" />
                <p className="mt-5 text-[15px] leading-relaxed text-white/80">“{t.quote}”</p>
                <div className="mt-7 flex items-center gap-3 border-t border-hair border-white/10 pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full border-hair border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] text-[12px] font-medium tracking-wider text-white">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13.5px] font-medium text-white">{t.name}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/50">
                      {t.role}
                    </span>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
