import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — scroll-triggered fade + slide with optional rotateX for 3D feel.
 */
const Reveal = ({ children, delay = 0, y = 24, x = 0, rotateX = 0, className = "", once = true }) => (
  <motion.div
    initial={{ opacity: 0, y, x, rotateX }}
    whileInView={{ opacity: 1, y: 0, x: 0, rotateX: 0 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    style={rotateX ? { transformPerspective: 1000, transformStyle: "preserve-3d" } : undefined}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
