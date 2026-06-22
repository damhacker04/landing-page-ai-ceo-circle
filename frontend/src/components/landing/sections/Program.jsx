import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { PROGRAM } from "@/components/landing/data";
import { ArrowUpRight } from "lucide-react";

const Program = () => {
  return (
    <section id="program" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{PROGRAM.label}</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[10vw] leading-[0.95] tracking-[-0.035em] text-cream sm:text-[8vw] md:text-[5.5vw] lg:text-[4.8vw]">
                What AI CEO Circle{" "}
                <span className="font-serif-italic text-gradient-lava">actually delivers</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5 md:pt-8">
            <p className="text-[15.5px] leading-relaxed text-cream-soft">{PROGRAM.intro}</p>
            <a
              href="#apply"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:text-lava"
            >
              Apply for cohort 01
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {PROGRAM.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative border-t border-hair border-cream-10 py-10 last:border-b md:py-14 cursor-pointer overflow-hidden"
              >
                {/* Lava sweep on hover */}
                <motion.span
                  aria-hidden
                  variants={{ rest: { x: "-100%" }, hover: { x: "100%" } }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute inset-y-0 -inset-x-1/3 z-0 w-1/3 bg-gradient-to-r from-transparent via-[#ff5d2a]/15 to-transparent blur-2xl"
                />
                {/* Bottom underline */}
                <motion.span
                  aria-hidden
                  variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="pointer-events-none absolute inset-x-0 -bottom-[0.5px] h-px bg-gradient-to-r from-[#ff5d2a] via-[#ff7a3d] to-transparent"
                />

                <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
                  <motion.div
                    variants={{ rest: { scale: 1, x: 0 }, hover: { scale: 1.12, x: 10 } }}
                    transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    className="md:col-span-2"
                    style={{ transformOrigin: "left center" }}
                  >
                    <span className="font-serif text-[72px] leading-none text-lava md:text-[110px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="md:col-span-5"
                  >
                    <h3 className="font-serif text-[32px] leading-[1.04] text-cream md:text-[42px]">
                      {it.title.split(" ").slice(0, -1).join(" ")}{" "}
                      <span className="font-serif-italic text-lava-soft">
                        {it.title.split(" ").slice(-1)[0]}
                      </span>
                    </h3>
                    <span className="mt-3 inline-block font-mono text-[10.5px] uppercase tracking-[0.28em] text-cream-dim">
                      {it.tag}
                    </span>
                  </motion.div>
                  <motion.div
                    variants={{ rest: { opacity: 0.85, x: 0 }, hover: { opacity: 1, x: 4 } }}
                    transition={{ duration: 0.4 }}
                    className="md:col-span-5"
                  >
                    <p className="text-[15px] leading-relaxed text-cream-soft">{it.body}</p>
                  </motion.div>
                </div>

                {/* Hover arrow indicator */}
                <motion.span
                  aria-hidden
                  variants={{ rest: { opacity: 0, x: -8 }, hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-lava"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </motion.span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Program;
