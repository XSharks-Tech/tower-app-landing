import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { PackagePlus, FileBarChart2, BadgeDollarSign } from "lucide-react";

interface Step {
  num: string;
  icon: React.ElementType;
  title: string;
  text: string;
  highlight?: boolean;
}

const steps: Step[] = [
  {
    num: "01",
    icon: PackagePlus,
    title: "Cadastre seus produtos e insumos",
    text: "Organize a base da sua operação com mais clareza para construir uma precificação realmente conectada à realidade do negócio.",
  },
  {
    num: "02",
    icon: FileBarChart2,
    title: "Monte suas Fichas Técnicas de Desempenho",
    text: "Transforme sua estrutura operacional em inteligência, conectando custo, desempenho e leitura estratégica de cada produto.",
  },
  {
    num: "03",
    icon: BadgeDollarSign,
    title: "Descubra a Precificação Perfeita",
    text: "Encontre a precificação certa para proteger margem, sustentar resultado e garantir o lucro líquido real da operação.",
    highlight: true,
  },
];

/* ── Paleta ────────────────────────────────────────── */
const c = {
  cyan: "hsl(187 82% 53%)",
  cyanDim: "hsl(187 82% 53% / 0.35)",
  cyanBg: "hsl(187 82% 53% / 0.06)",
  cyanGlow: "hsl(187 82% 53% / 0.10)",
  green: "hsl(155 70% 50%)",
  greenDim: "hsl(155 70% 50% / 0.35)",
  greenBg: "hsl(155 70% 50% / 0.07)",
  greenGlow: "hsl(155 70% 50% / 0.12)",
};

const PricingStepsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, hsl(187 82% 53% / 0.03), transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* ── Header ─────────────────────────────── */}
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          {/* Eyebrow */}
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase mb-6 px-5 py-2 rounded-full border"
            style={{
              color: c.cyan,
              borderColor: "hsl(187 82% 53% / 0.25)",
              background: c.cyanBg,
            }}
          >
            Precificação Perfeita em 3 passos
          </span>

          <h2 className="headline-lg max-w-4xl mx-auto !leading-[1.15]">
            O caminho que sua operação percorre para sair do achismo e
            descobrir a{" "}
            <span className="glow-text">Precificação Perfeita</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-5 leading-relaxed">
            Com a Tower, sua operação segue um método simples, estruturado e
            inteligente para transformar dados em uma precificação orientada ao
            lucro líquido real.
          </p>
        </AnimatedSection>

        {/* ── Timeline ───────────────────────────── */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical connector line — hidden on mobile, shown md+ */}
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${c.cyanDim} 15%, ${c.cyanDim} 70%, ${c.greenDim} 100%)`,
            }}
          />

          {/* Mobile connector line — centered */}
          <div
            className="md:hidden absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${c.cyanDim} 15%, ${c.cyanDim} 70%, ${c.greenDim} 100%)`,
            }}
          />

          {steps.map((step, i) => {
            const isLast = step.highlight;
            const accent = isLast ? c.green : c.cyan;
            const accentDim = isLast ? c.greenDim : c.cyanDim;
            const accentBg = isLast ? c.greenBg : c.cyanBg;
            const accentGlow = isLast ? c.greenGlow : c.cyanGlow;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className={`relative ${i < steps.length - 1 ? "mb-8 md:mb-12" : ""}`}
              >
                {/* ── NODE (connection dot) ── */}
                {/* Desktop node — left aligned */}
                <div
                  className="hidden md:flex absolute left-8 top-8 -translate-x-1/2 w-[18px] h-[18px] rounded-full items-center justify-center z-10"
                  style={{
                    background: accent,
                    boxShadow: `0 0 16px 4px ${accentDim}`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                {/* Mobile node — centered */}
                <div
                  className="md:hidden flex mx-auto w-[18px] h-[18px] rounded-full items-center justify-center z-10 mb-4 relative"
                  style={{
                    background: accent,
                    boxShadow: `0 0 16px 4px ${accentDim}`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                {/* ── CARD ── */}
                <div
                  className="relative md:ml-20 rounded-2xl border p-6 md:p-8 group transition-all duration-300 overflow-hidden"
                  style={{
                    background: isLast
                      ? `linear-gradient(160deg, hsl(155 25% 10% / 0.6) 0%, hsl(155 20% 7% / 0.4) 100%)`
                      : `linear-gradient(160deg, hsl(210 20% 10% / 0.65) 0%, hsl(210 20% 7% / 0.45) 100%)`,
                    borderColor: accentDim,
                    backdropFilter: "blur(14px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = accent;
                    el.style.boxShadow = `0 0 50px -8px ${accentDim}, inset 0 1px 0 0 ${accentGlow}`;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = accentDim;
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className="absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${accentGlow}, transparent 70%)`,
                    }}
                  />

                  {/* Step number + Icon row */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Number badge */}
                    <span
                      className="text-2xl md:text-3xl font-black tracking-tight select-none"
                      style={{
                        color: accent,
                        textShadow: `0 0 20px ${accentDim}`,
                      }}
                    >
                      {step.num}
                    </span>

                    {/* Separator */}
                    <div
                      className="w-px h-8"
                      style={{ background: accentDim }}
                    />

                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: accentBg }}
                    >
                      <step.icon
                        className="w-5 h-5"
                        style={{ color: accent }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2.5 tracking-tight leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>

                  {/* Final step highlight badge */}
                  {isLast && (
                    <div className="flex items-center gap-2 mt-5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: c.green,
                          boxShadow: `0 0 8px ${c.green}`,
                        }}
                      />
                      <span
                        className="text-[11px] font-semibold tracking-[0.1em] uppercase"
                        style={{ color: c.green }}
                      >
                        Lucro líquido real protegido
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* ── Bottom terminus node ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex absolute left-8 -bottom-4 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{
              background: c.green,
              boxShadow: `0 0 12px 3px ${c.greenDim}`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingStepsSection;
