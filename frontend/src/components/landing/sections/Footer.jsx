import React from "react";
import Container from "@/components/landing/ui/Container";
import { FOOTER, META } from "@/components/landing/data";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-hair border-white/10 bg-black/40">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative grid h-9 w-9 place-items-center rounded-md border-hair border-white/15 bg-white/[0.03]">
                <span className="absolute inset-0 rounded-md bg-gradient-to-br from-[#d4a017]/15 to-transparent" />
                <span className="relative font-serif-italic text-[16px] text-gold">A</span>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[14px] font-medium text-white">{META.brand}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                  {META.byline}
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[13.5px] leading-relaxed text-white/55">
              The executive entry point into MAXY AI — a 6-month mentoring circle for CEOs ready to build AI inside their business.
            </p>
            <div className="mt-8 flex flex-col gap-1">
              {FOOTER.contact.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                    {c.label}
                  </span>
                  <span className="text-[13.5px] text-white/85">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          {FOOTER.columns.map((col, i) => (
            <div key={i} className="md:col-span-2 lg:col-span-2 col-span-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
                {col.title}
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a
                      href="#apply"
                      className="text-[13.5px] text-white/70 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-16" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[12px] text-white/45 sm:flex-row sm:items-center">
          <span className="font-mono uppercase tracking-[0.24em]">
            © {new Date().getFullYear()} MAXY AI · All rights reserved
          </span>
          <span className="font-mono uppercase tracking-[0.24em]">
            Indonesia · Singapore · Built for executives
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
