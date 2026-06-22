import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Tilt from "@/components/landing/ui/Tilt";
import { TESTIMONIALS } from "@/components/landing/data";

const Testimonials = () => {
  return (
    <section id="voices" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{TESTIMONIALS.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.8vw] lg:text-[5vw]">
                What CEOs <span className="font-serif-italic text-gradient-lava">are saying</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">
              Cohort participants come back to peer sessions — not for slides, but to ship the next AI system inside their company.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Tilt className="h-full" max={7} scale={1.025}>
                <div className="relative h-full overflow-hidden rounded-2xl border-hair border-cream-10 bg-[rgba(12,20,40,0.4)] p-8 backdrop-blur-md md:p-10">
                  <span className="font-serif-italic text-[80px] leading-none text-lava/40">“</span>
                  <p className="-mt-8 font-serif text-[20px] leading-[1.35] text-cream md:text-[22px]">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-3 border-t border-hair border-cream-10 pt-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -8 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18 }}
                      className="grid h-10 w-10 place-items-center rounded-full border-hair border-cream-15 bg-[rgba(255,93,42,0.08)] font-mono text-[11px] tracking-wider text-lava-soft"
                    >
                      {t.initials}
                    </motion.div>
                    <div className="flex flex-col">
                      <span className="text-[13.5px] font-medium text-cream">{t.name}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cream-dim">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
