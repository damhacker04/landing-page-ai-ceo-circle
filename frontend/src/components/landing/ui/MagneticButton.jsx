import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MagneticButton — pill button with subtle magnetic pull + gold glow.
 * variant: "primary" | "ghost"
 */
const MagneticButton = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
  href,
  ...rest
}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.18, y: y * 0.25 });
  };
  const reset = () => setOffset({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#d4a017] text-black hover:bg-[#e7b226]"
      : "border-hair border-white/15 text-white/85 hover:text-white hover:border-white/30 bg-white/[0.02]";

  const Tag = href ? "a" : "button";

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${base} ${styles} ${className}`}
        data-testid={rest["data-testid"]}
      >
        {/* Gold halo for primary on hover */}
        {variant === "primary" && (
          <span
            className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
            style={{ background: "radial-gradient(circle, rgba(212,160,23,0.55), transparent 70%)" }}
          />
        )}
        <span className="relative">{children}</span>
        {Icon && (
          <Icon
            className={`relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5`}
          />
        )}
      </Tag>
    </motion.span>
  );
};

export default MagneticButton;
