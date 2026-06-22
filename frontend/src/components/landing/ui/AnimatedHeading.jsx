import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedHeading — splits content into per-word, per-letter spans and animates
 * them with a staggered reveal. Two variants: cream (default) + serif italic
 * lava-gradient (variant="italic").
 */
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
};

const child = {
  hidden: { y: "110%", opacity: 0, rotate: 3 },
  show: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedWord = ({ word, italic, gradient, baseDelay = 0 }) => {
  const letters = Array.from(word);
  return (
    <span className="inline-flex overflow-hidden" style={{ verticalAlign: "baseline" }}>
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
          className={[
            italic ? "font-serif-italic" : "",
            gradient === "lava" ? "text-gradient-lava" : "",
            gradient === "cream" ? "text-gradient-cream" : "",
          ].join(" ")}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
};

const AnimatedHeading = ({ parts = [], className = "", as: Tag = "h1", once = true }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once, margin: "-80px" }}
      variants={container}
      className={className}
    >
      <Tag className={`leading-[0.92] tracking-[-0.035em]`} style={{ display: "block" }}>
        {parts.map((p, i) => (
          <span key={i} style={{ display: p.block ? "block" : "inline" }}>
            {p.text.split(" ").map((w, j) => (
              <React.Fragment key={j}>
                <AnimatedWord word={w} italic={p.italic} gradient={p.gradient} />
                {j < p.text.split(" ").length - 1 && (
                  <span style={{ display: "inline-block", width: "0.28em" }} />
                )}
              </React.Fragment>
            ))}
          </span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default AnimatedHeading;
