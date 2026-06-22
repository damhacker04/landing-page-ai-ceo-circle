import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Check } from "lucide-react";
import Container from "@/components/landing/ui/Container";
import Reveal from "@/components/landing/ui/Reveal";
import MagneticButton from "@/components/landing/ui/MagneticButton";
import { FINAL_CTA } from "@/components/landing/data";

const FORM_OPTIONS = ["Immediate (< 1 month)", "Next quarter (1–3 months)", "Strategic roadmap (6+ months)"];

const FinalCta = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    horizon: FORM_OPTIONS[0],
    message: "",
  });

  const onChange = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Static UI submission only — simulate a brief delay & show confirmation.
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative z-10 overflow-hidden py-28 md:py-36">
      {/* Section ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,160,23,0.22), transparent 70%)",
        }}
      />

      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border-hair border-[#d4a017]/30 bg-[#d4a017]/10 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-gold">
                  {FINAL_CTA.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-balance text-4xl font-medium leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-gradient-white">{FINAL_CTA.titleA}</span>
                <span className="font-serif-italic block text-gradient-gold">{FINAL_CTA.titleB}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/65">
                {FINAL_CTA.body}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton href="#apply" icon={ArrowUpRight}>
                  {FINAL_CTA.primary}
                </MagneticButton>
                <MagneticButton href="#program" variant="ghost" icon={Download}>
                  {FINAL_CTA.secondary}
                </MagneticButton>
              </div>
            </Reveal>

            {/* Hairline meta row */}
            <Reveal delay={0.22}>
              <div className="mt-12 grid grid-cols-3 overflow-hidden rounded-2xl border-hair border-white/10 bg-white/[0.02]">
                {[
                  { k: "Cohort 01", v: "Sep 2026" },
                  { k: "Seats", v: "15 max" },
                  { k: "Process", v: "Application only" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className={`p-5 ${i < 2 ? "border-r border-hair border-white/10" : ""}`}
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {m.k}
                    </div>
                    <div className="mt-1.5 text-[14px] text-white">{m.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-3xl border-hair border-white/12 bg-white/[0.03] p-7 backdrop-blur-md md:p-9"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/55">
                    Apply / Cohort 01
                  </div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-gold">
                    Limited
                  </div>
                </div>

                {!submitted ? (
                  <form className="mt-7 grid grid-cols-1 gap-4" onSubmit={onSubmit}>
                    <Field label="Full name" required>
                      <input
                        required
                        value={form.name}
                        onChange={onChange("name")}
                        placeholder="Jane Doe"
                        className="input"
                      />
                    </Field>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Work email" required>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={onChange("email")}
                          placeholder="jane@company.com"
                          className="input"
                        />
                      </Field>
                      <Field label="Role">
                        <input
                          value={form.role}
                          onChange={onChange("role")}
                          placeholder="CEO / Founder"
                          className="input"
                        />
                      </Field>
                    </div>
                    <Field label="Company" required>
                      <input
                        required
                        value={form.company}
                        onChange={onChange("company")}
                        placeholder="Company name"
                        className="input"
                      />
                    </Field>
                    <Field label="Horizon">
                      <div className="flex flex-wrap gap-2">
                        {FORM_OPTIONS.map((opt) => {
                          const active = form.horizon === opt;
                          return (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => setForm((f) => ({ ...f, horizon: opt }))}
                              className={`rounded-full border-hair px-3 py-1.5 text-[12px] tracking-tight transition-colors ${
                                active
                                  ? "border-[#d4a017]/40 bg-[#d4a017]/10 text-gold"
                                  : "border-white/12 bg-white/[0.02] text-white/70 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </Field>
                    <Field label="What are you trying to build?">
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={onChange("message")}
                        placeholder="A few lines about your priority and what 'success' looks like in 6 months…"
                        className="input resize-none"
                      />
                    </Field>

                    <button
                      type="submit"
                      className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a017] px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-[#e7b226]"
                    >
                      Submit application
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="text-[11.5px] leading-relaxed text-white/40">
                      By submitting, you consent to be contacted by the MAXY AI team about AI CEO Circle.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex flex-col items-center text-center"
                  >
                    <div className="grid h-14 w-14 place-items-center rounded-full border-hair border-[#d4a017]/40 bg-[#d4a017]/10 text-gold">
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium text-white">Application received</h3>
                    <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-white/60">
                      Thank you. The MAXY AI team will review and reach out within 5 business days to schedule a discovery call.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/55 hover:text-white"
                    >
                      Submit another
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* shared input style */}
      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.02);
          border: 0.5px solid rgba(255,255,255,0.12);
          color: #fff;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 14px;
          transition: border-color .25s ease, background-color .25s ease;
          outline: none;
        }
        .input::placeholder { color: rgba(255,255,255,0.32); }
        .input:focus {
          border-color: rgba(212,160,23,0.45);
          background: rgba(212,160,23,0.04);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, required, children }) => (
  <label className="flex flex-col gap-1.5">
    <span className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-white/50">
      {label}
      {required && <span className="text-gold"> *</span>}
    </span>
    {children}
  </label>
);

export default FinalCta;
