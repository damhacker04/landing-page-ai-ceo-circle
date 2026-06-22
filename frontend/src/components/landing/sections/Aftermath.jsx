import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import BigSerifMarquee from "@/components/landing/ui/BigSerifMarquee";
import { AFTERMATH } from "@/components/landing/data";

const Aftermath = () => {
  return (
    <section id="after" className="relative z-10">
      <BigSerifMarquee
        words={["Train", "Transform", "Place Talent"]}
        size="xl"
        reverse
        className="py-6 opacity-80"
      />
      <Container className="pt-20 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{AFTERMATH.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.8vw] lg:text-[5vw]">
                The beginning,{" "}
                <span className="font-serif-italic text-gradient-lava">not the end</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-10">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">{AFTERMATH.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col">
          {AFTERMATH.steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative cursor-pointer overflow-hidden border-t border-hair border-cream-10 py-9 last:border-b md:py-12"
              >
                <motion.span
                  aria-hidden
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.7 }}
                  style={{ originX: 0 }}
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px bg-gradient-to-r from-[#ff5d2a] via-[#ff7a3d] to-transparent"
                />
                <div className="grid grid-cols-1 items-baseline gap-6 md:grid-cols-12 md:gap-10">
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.08, color: "#ff7a3d" } }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="md:col-span-2"
                    style={{ transformOrigin: "left center" }}
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-lava">
                      {s.tag}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="md:col-span-5"
                  >
                    <h3 className="font-serif text-[28px] leading-[1.06] text-cream md:text-[34px]">
                      {s.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {s.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                  </motion.div>
                  <div className="md:col-span-5">
                    <p className="text-[14.5px] leading-relaxed text-cream-soft">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Aftermath;
