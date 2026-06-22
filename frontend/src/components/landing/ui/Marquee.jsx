import React from "react";

const Marquee = ({ items = [], speed = "normal", separator = "·" }) => {
  const cls = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const row = (
    <div className={`flex shrink-0 items-center gap-10 pr-10 ${cls}`}>
      {items.map((it, i) => (
        <span
          key={i}
          className="flex shrink-0 items-center gap-10 font-mono text-[11px] uppercase tracking-[0.28em] text-white/55"
        >
          <span>{it}</span>
          <span className="text-[#d4a017]/60">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max">
        {row}
        {row}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
    </div>
  );
};

export default Marquee;
