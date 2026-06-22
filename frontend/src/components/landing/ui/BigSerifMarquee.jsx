import React from "react";
import { motion } from "framer-motion";

/**
 * BigSerifMarquee — massive italic serif marquee that speeds-up on hover and
 * scales the active word.  Pure CSS animation is paused/resumed via hover.
 */
const BigSerifMarquee = ({
  words = [],
  separator = "—",
  speed = "normal",
  size = "normal",
  reverse = false,
  className = "",
}) => {
  const cls = [
    speed === "slow" ? "animate-marquee-slow" : speed === "fast" ? "animate-marquee" : "animate-marquee-slow",
    reverse ? "animate-marquee-reverse" : "",
  ].join(" ");

  const fontCls =
    size === "xxl"
      ? "text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
      : size === "xl"
      ? "text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]"
      : "text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5vw]";

  const row = (
    <div className={`group/marquee flex shrink-0 items-center gap-12 pr-12 ${cls} hover:[animation-play-state:paused]`}>
      {words.map((w, i) => (
        <span key={i} className="flex shrink-0 items-center gap-12">
          <motion.span
            whileHover={{ scale: 1.08, color: "#ffae7a" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`font-serif-italic whitespace-nowrap ${fontCls} leading-[0.9] text-cream transition-colors cursor-default`}
          >
            {w}
          </motion.span>
          <span className="font-serif-italic text-[#ff5d2a]/70 text-6xl md:text-7xl lg:text-8xl">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex w-max">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070e1c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070e1c] to-transparent" />
    </div>
  );
};

export default BigSerifMarquee;
