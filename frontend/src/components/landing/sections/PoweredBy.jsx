import React from "react";
import Marquee from "@/components/landing/ui/Marquee";
import { POWERED_BY } from "@/components/landing/data";

const PoweredBy = () => {
  return (
    <section className="relative z-10 border-y border-hair border-white/[0.06] bg-black/40 py-6">
      <Marquee items={POWERED_BY} />
    </section>
  );
};

export default PoweredBy;
