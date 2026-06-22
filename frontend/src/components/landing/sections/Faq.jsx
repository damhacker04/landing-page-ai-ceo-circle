import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import SectionLabel from "@/components/landing/ui/SectionLabel";
import Reveal from "@/components/landing/ui/Reveal";
import { FAQ } from "@/components/landing/data";

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  return (
    <div className="group overflow-hidden border-b border-hair border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-white"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-[16px] font-medium tracking-tight md:text-[18px] ${
              isOpen ? "text-white" : "text-white/85"
            }`}
          >
            {item.q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border-hair ${
            isOpen
              ? "border-[#d4a017]/40 bg-[#d4a017]/10 text-gold"
              : "border-white/15 bg-white/[0.02] text-white/70"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-[60px] pr-12 text-[14.5px] leading-relaxed text-white/65">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative z-10 py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionLabel>{FAQ.label}</SectionLabel>
            <Reveal className="mt-5">
              <h2 className="text-balance text-3xl font-medium leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                Common <span className="font-serif-italic text-gradient-gold">questions</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08} className="md:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/55">
              If you don't find your answer below, reach us at{" "}
              <a href="#apply" className="text-white hover:text-gold">
                hello@aiceocircle.com
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl border-hair border-white/10 bg-white/[0.02] p-2 backdrop-blur-md md:p-4">
            <div className="px-4 md:px-6">
              {FAQ.items.map((it, i) => (
                <FaqItem
                  key={i}
                  item={it}
                  index={i}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Faq;
