import React from "react";
import { motion } from "framer-motion";

const SectionLabel = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50 ${className}`}
  >
    <span className="h-px w-8 bg-gradient-to-r from-transparent via-[#d4a017]/60 to-transparent" />
    <span>{children}</span>
  </motion.div>
);

export default SectionLabel;
