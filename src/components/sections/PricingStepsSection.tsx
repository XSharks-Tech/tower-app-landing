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

/* ── CSS Keyframes for the logo effects ── */
const logoAnimationStyles = `
@keyframes towerPulse {
  0%, 100% { box-shadow: 0 0 40px 8px hsl(187 82% 53% / 0.2), 0 0 80px 20px hsl(187 82% 53% / 0.08), 0 0 120px 40px hsl(155 70% 50% / 0.04); }
  50% { box-shadow: 0 0 60px 15px hsl(187 82% 53% / 0.35), 0 0 100px 30px hsl(187 82% 53% / 0.15), 0 0 160px 60px hsl(155 70% 50% / 0.08); }
}
@keyframes towerFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
@keyframes orbitalSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes ringExpand {
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.03); opacity: 0.25; }
  100% { transform: scale(0.95); opacity: 0.5; }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
`;

const PricingStepsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: logoAnimationStyles }} />

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
            className="hidden md:block absolute left-8 top-0 w-px"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${c.cyanDim} 15%, ${c.cyanDim} 70%, ${c.greenDim} 100%)`,
              bottom: "-120px",
            }}
          />

          {/* Mobile connector line — centered */}
          <div
            className="md:hidden absolute left-1/2 -translate-x-px top-0 w-px"
            style={{
              background: `linear-gradient(180deg, transparent 0%, ${c.cyanDim} 15%, ${c.cyanDim} 70%, ${c.greenDim} 100%)`,
              bottom: "-120px",
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

          {/* ── Bottom terminus node (now connects to energy beam) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hidden md:flex absolute left-8 -translate-x-1/2 w-3 h-3 rounded-full"
            style={{
              bottom: "-120px",
              background: c.green,
              boxShadow: `0 0 12px 3px ${c.greenDim}`,
            }}
          />
        </div>

        {/* ══════════════════════════════════════════════════════════ */}
        {/* ══  TOWER LOGO CONVERGENCE EFFECT  ══════════════════════ */}
        {/* ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative mt-24 md:mt-32"
        >
          {/* ── Horizontal Energy Lines connecting to center ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Left energy line */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 h-px"
              style={{
                width: "calc(50% - 100px)",
                background: `linear-gradient(90deg, transparent 0%, ${c.cyanDim} 40%, ${c.cyan} 100%)`,
              }}
            />
            {/* Right energy line */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 h-px"
              style={{
                width: "calc(50% - 100px)",
                background: `linear-gradient(270deg, transparent 0%, ${c.cyanDim} 40%, ${c.cyan} 100%)`,
              }}
            />
          </div>

          {/* ── Main Logo Container ── */}
          <div className="flex flex-col items-center relative z-10">

            {/* ── Energy Beam (vertical, from timeline to logo) ── */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-px h-16 mb-6 origin-top"
              style={{
                background: `linear-gradient(180deg, ${c.green}, ${c.cyan})`,
                boxShadow: `0 0 12px 2px ${c.cyanDim}`,
              }}
            />

            {/* ── Subtle glow backdrop (behind logo) ── */}
            <div className="relative">
              {/* Soft static glow ring */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: "220px",
                  height: "220px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  border: `1px solid hsl(187 82% 53% / 0.08)`,
                  animation: "ringExpand 6s ease-in-out infinite",
                }}
              />

              {/* ── Single Orbital Track (2 particles) ── */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: "190px",
                  height: "190px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: "orbitalSpin 14s linear infinite",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "4px",
                    height: "4px",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: c.cyan,
                    boxShadow: `0 0 8px 2px ${c.cyanDim}`,
                  }}
                />
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "3px",
                    height: "3px",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: c.green,
                    boxShadow: `0 0 6px 2px ${c.greenDim}`,
                  }}
                />
              </div>

              {/* ══ THE LOGO ITSELF ══ */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-20"
                style={{
                  animation: "towerFloat 5s ease-in-out infinite",
                }}
              >
                <div
                  className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center mx-auto"
                  style={{
                    background: `radial-gradient(circle at 40% 35%, hsl(210 25% 14%), hsl(210 20% 8%))`,
                    animation: "towerPulse 3s ease-in-out infinite",
                    border: "1px solid hsl(187 82% 53% / 0.25)",
                  }}
                >
                  {/* Inner gradient overlay */}
                  <div
                    className="absolute inset-[2px] rounded-full overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at 30% 25%, hsl(187 82% 53% / 0.05), transparent 60%)`,
                    }}
                  />

                  {/* Logo image */}
                  <img
                    src="https://estrategos.online/wp-content/uploads/2026/03/ChatGPT-Image-23-de-mar.-de-2026-21_13_08-e1774311271759.png"
                    alt="Tower Logo"
                    className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 drop-shadow-[0_0_12px_hsl(187_82%_53%_/_0.3)]"
                  />
                </div>
              </motion.div>
            </div>

            {/* ── Tagline below logo ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-8 text-center"
            >
              {/* Shimmer text effect */}
              <p
                className="text-lg md:text-xl font-bold tracking-wide"
                style={{
                  background: `linear-gradient(90deg, ${c.cyan}, hsl(187 82% 73%), ${c.green}, hsl(155 70% 65%), ${c.cyan})`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                O Último Passo para a Precificação Perfeita
              </p>

              <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
                Todos os passos convergem para um único objetivo — a{" "}
                <span style={{ color: c.cyan }}>Tower</span> transforma sua
                operação em inteligência de precificação real.
              </p>

              {/* Decorative bottom dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: c.cyanDim }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c.cyan, boxShadow: `0 0 6px ${c.cyanDim}` }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: c.green, boxShadow: `0 0 8px ${c.greenDim}` }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c.cyan, boxShadow: `0 0 6px ${c.cyanDim}` }}
                />
                <div
                  className="w-1 h-1 rounded-full"
                  style={{ background: c.cyanDim }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingStepsSection;
