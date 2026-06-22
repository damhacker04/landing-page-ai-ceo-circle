import React from "react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { TIMELINE } from "@/components/landing/data";

const Timeline = () => {
  return (
    <section id="format" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{TIMELINE.label}</SectionLabel>
            <Reveal className="mt-5">
              <h2 className="text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                A 6-month{" "}
                <span className="font-serif-italic text-gradient-gold">mentoring circle</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-[15px] leading-relaxed text-white/60">{TIMELINE.intro}</p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Vertical hairline rail */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {TIMELINE.steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-16">
                    {/* Node */}
                    <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                      <span className="relative grid h-3 w-3 place-items-center rounded-full bg-[#d4a017] animate-gold-pulse">
                        <span className="absolute h-7 w-7 rounded-full border-hair border-[#d4a017]/30" />
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`pl-10 md:pl-0 ${
                        isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                      }`}
                    >
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-gold">
                        {s.window}
                      </div>
                      <h3 className="mt-2 text-xl font-medium tracking-tight text-white md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/60 md:ml-auto">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
