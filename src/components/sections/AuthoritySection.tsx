import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ScanSearch,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

/* ── Paleta ────────────────────────────────────── */
const c = {
  cyan: "hsl(25 95% 55%)",
  cyanDim: "hsl(25 95% 55% / 0.35)",
  cyanBg: "hsl(25 95% 55% / 0.06)",
  cyanGlow: "hsl(25 95% 55% / 0.10)",
  cyanLine: "hsl(25 95% 55% / 0.18)",
};

/* ── Cards data ────────────────────────────────── */
const cards = [
  {
    icon: ScanSearch,
    title: "Clareza sobre custos",
    text: "Entenda com mais precisão o custo real de cada produto e insumo da operação.",
  },
  {
    icon: ShieldCheck,
    title: "Mais segurança na precificação",
    text: "Defina preços com mais método, mais critério e menos achismo.",
  },
  {
    icon: TrendingUp,
    title: "Proteção de margem",
    text: "Enxergue com mais clareza o que sustenta o resultado e o que corrói sua rentabilidade.",
  },
  {
    icon: BrainCircuit,
    title: "Mais inteligência para decidir",
    text: "Transforme dados da operação em leitura estratégica para agir com mais segurança.",
  },
];

/* ── Animated counter ──────────────────────────── */
function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(motionVal, target, { duration: 2.2, ease: "easeOut" });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, motionVal, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `+${v}`;
    });
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>+0</span>;
}

/* ── Section ───────────────────────────────────── */
const AuthoritySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* ── Ambient glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 45% 55% at 50% 35%, hsl(25 95% 55% / 0.04), transparent 70%),
            radial-gradient(ellipse 30% 40% at 25% 70%, hsl(25 95% 55% / 0.02), transparent 60%)
          `,
        }}
      />

      <div className="section-container relative z-10">
        {/* ═══════════════════════════════════════════
            TOP — Hero block: copy + big number
            ═══════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center mb-16 lg:mb-20">
          {/* ── Left: Copy ── */}
          <AnimatedSection>
            {/* Eyebrow */}
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase mb-6 px-5 py-2 rounded-full border"
              style={{
                color: c.cyan,
                borderColor: c.cyanLine,
                background: c.cyanBg,
              }}
            >
              Negócios impactados
            </span>

            {/* Headline */}
            <h2 className="headline-lg !leading-[1.15] mb-5 text-balance">
              O método de{" "}
              <span className="glow-text-warm">Precificação Perfeita</span> da Tower{" "}
              <br className="hidden sm:block" />
              já impactou mais de{" "}
              <span className="glow-text-warm">150 negócios</span>
            </h2>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
              Da leitura do custo real à definição da Precificação Perfeita, a
              Tower vem ajudando operações a enxergarem com mais clareza o que
              sustenta o resultado, protege a margem e fortalece o lucro
              líquido.
            </p>
          </AnimatedSection>

          {/* ── Right: Big number ── */}
          <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center">
              {/* Glow sphere behind number */}
              <div
                className="absolute inset-0 -m-12 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, hsl(25 95% 55% / 0.08), transparent 65%)",
                }}
              />

              {/* Number with ring */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center"
                style={{
                  background: `
                    radial-gradient(circle at center, hsl(25 30% 8% / 0.7) 0%, transparent 70%)
                  `,
                  border: `1.5px solid ${c.cyanDim}`,
                  boxShadow: `
                    0 4px 20px -5px hsl(25 95% 55% / 0.1)
                  `,
                }}
              >
                {/* Inner decorative ring */}
                <div
                  className="absolute inset-3 rounded-full pointer-events-none"
                  style={{
                    border: `1px solid hsl(25 95% 55% / 0.08)`,
                  }}
                />

                {/* The number */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="text-center relative z-10"
                >
                  <div
                    className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
                    style={{
                      color: c.cyan,
                      textShadow: `
                        0 0 30px hsl(25 95% 55% / 0.4),
                        0 0 60px hsl(25 95% 55% / 0.15)
                      `,
                    }}
                  >
                    <AnimatedCounter target={150} />
                  </div>
                </motion.div>
              </div>

              {/* Label below number */}
              <div className="mt-5 text-center">
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: c.cyan }}
                >
                  negócios impactados
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ═══════════════════════════════════════════
            SEPARATOR — gradient line
            ═══════════════════════════════════════════ */}
        <div className="relative mb-16 lg:mb-20">
          <div
            className="h-px w-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${c.cyanDim} 30%, ${c.cyan} 50%, ${c.cyanDim} 70%, transparent 100%)`,
            }}
          />
          {/* center dot */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{
              background: c.cyan,
              boxShadow: `0 0 6px 1px ${c.cyanDim}`,
            }}
          />
        </div>

        {/* ═══════════════════════════════════════════
            BOTTOM — 4 Impact cards
            ═══════════════════════════════════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <AnimatedCard key={card.title} delay={i * 0.08}>
              <div
                className="relative rounded-2xl border p-6 md:p-7 h-full group transition-all duration-300 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, hsl(210 20% 10% / 0.65) 0%, hsl(210 20% 7% / 0.45) 100%)",
                  borderColor: "hsl(25 95% 55% / 0.12)",
                  backdropFilter: "blur(14px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = c.cyanDim;
                  el.style.boxShadow = `0 4px 15px -3px hsl(25 95% 55% / 0.15)`;
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "hsl(25 95% 55% / 0.12)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.cyan}, transparent)`,
                  }}
                />

                {/* Corner glow */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${c.cyanGlow}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: c.cyanBg }}
                >
                  <card.icon className="w-5 h-5" style={{ color: c.cyan }} />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
