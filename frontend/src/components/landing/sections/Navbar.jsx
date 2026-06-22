import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { NAV_LINKS, META } from "@/components/landing/data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top thin announcement bar */}
      <div className="relative z-40 border-b border-hair border-white/[0.06] bg-black/40 backdrop-blur-md">
        <Container className="flex h-9 items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/55">
            {META.topbar}
          </span>
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/55 sm:block">
            {META.cohort}
          </span>
        </Container>
      </div>

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-hair border-white/[0.06] bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative grid h-8 w-8 place-items-center rounded-md border-hair border-white/15 bg-white/[0.03]">
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-[#d4a017]/15 to-transparent" />
              <span className="relative font-serif-italic text-[15px] text-gold">A</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-medium tracking-tight text-white">
                {META.brand}
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.28em] text-white/45">
                {META.byline}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[13px] text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <MagneticButton href="#apply" icon={ArrowUpRight}>
              Apply
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border-hair border-white/15 text-white/85 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-hair border-white/[0.06] bg-black/80 backdrop-blur-xl md:hidden"
            >
              <Container className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/[0.04] hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="pt-2">
                  <MagneticButton href="#apply" icon={ArrowUpRight}>
                    Apply for the next cohort
                  </MagneticButton>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
