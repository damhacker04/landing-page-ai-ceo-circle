import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import Tilt from "@/components/landing/ui/Tilt";
import { ArrowUpRight } from "lucide-react";

const BuiltOnConvictions = () => {
  const convictions = [
    {
      title: "Own your intelligence",
      body:
        "Software depreciates. Your operating know-how, judgment, and decision logic must be encoded into systems your company actually owns.",
    },
    {
      title: "Liberate the leader",
      body:
        "Manual debt stalls CEOs. Eliminating operational friction at the top frees the leader to focus on capital, vision, and judgment.",
    },
    {
      title: "Encode know-how",
      body:
        "Models and tools will keep changing. Your unique way of operating must be encoded into executable workflows that can run, adapt, and scale.",
    },
    {
      title: "Uncap growth",
      body:
        "Operational friction caps revenue far more than demand. Removing CEO-level bottlenecks compounds growth without proportional cost.",
    },
  ];

  return (
    <section id="convictions" className="relative z-10 py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <SectionLabel>Built on convictions</SectionLabel>
            <Reveal className="mt-6">
              <h2 className="font-serif text-balance text-[14vw] leading-[0.92] tracking-[-0.035em] text-cream sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5vw]">
                Built on{" "}
                <span className="font-serif-italic text-gradient-lava">Convictions</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <Reveal delay={0.1}>
              <p className="text-[15.5px] leading-relaxed text-cream-soft">
                Increase your speed-to-decision and eliminate manual debt by transforming a CEO’s business judgment into proprietary AI systems — owned, encoded, and scaled inside your company.
              </p>
              <a
                href="#program"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cream transition-colors hover:text-lava"
              >
                Explore the program
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* 4 convictions with 3D tilt */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {convictions.map((c, i) => (
            <Reveal key={i} delay={i * 0.06} y={32}>
              <Tilt className="h-full" max={9} scale={1.03}>
                <div className="relative h-full overflow-hidden rounded-2xl border-hair border-cream-10 bg-[rgba(12,20,40,0.45)] p-7 backdrop-blur-md md:p-8">
                  {/* Top gloss */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent" />
                  {/* Lava bottom hint */}
                  <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#ff5d2a]/20 blur-3xl" />

                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-3xl text-lava md:text-4xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.32em] text-cream-dim">
                      Conviction
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-[26px] leading-[1.06] tracking-tight text-cream md:text-[30px]">
                    {c.title.split(" ").map((w, j, arr) => (
                      <React.Fragment key={j}>
                        {j === arr.length - 1 ? (
                          <span className="font-serif-italic text-lava-soft"> {w}</span>
                        ) : (
                          <>{j > 0 ? " " : ""}{w}</>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="mt-5 text-[14px] leading-relaxed text-cream-dim">{c.body}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BuiltOnConvictions;
