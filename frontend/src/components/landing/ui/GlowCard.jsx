import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * GlowCard — bento card with mouse-tracking radial gradient + subtle lift on hover.
 * Renders a faint hairline border, slight glass background, and an interactive glow layer.
 */
const GlowCard = ({
  children,
  className = "",
  glow = "rgba(212, 160, 23, 0.18)",
  as: Tag = "div",
  interactive = true,
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  const onMouseMove = (e) => {
    if (!interactive) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      whileHover={interactive ? { y: -3 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl border-hair border-white/10 bg-white/[0.02] backdrop-blur-md ${className}`}
      {...rest}
    >
      {/* Mouse-tracking gold glow */}
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: active ? 1 : 0,
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 55%)`,
          }}
        />
      )}
      {/* Subtle top gloss */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
