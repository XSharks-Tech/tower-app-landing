import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import {
  BarChart3,
  TrendingUp,
  Target,
  Layers,
  Scissors,
  PackageMinus,
  Megaphone,
  PiggyBank,
  FileX2,
} from "lucide-react";

interface BenefitCard {
  icon: React.ElementType;
  tag: string;
  title: string;
  text: string;
  accent?: "red";
}

const benefits: BenefitCard[] = [
  {
    icon: BarChart3,
    tag: "Custo",
    title: "Entenda o Real CMV",
    text: "Tenha uma visão mais clara do custo real de cada produto da sua operação.",
  },
  {
    icon: TrendingUp,
    tag: "Margem",
    title: "Veja o seu Real Lucro",
    text: "Acompanhe a margem real e entenda com mais clareza onde está o resultado.",
  },
  {
    icon: Target,
    tag: "Preço",
    title: "Precificação com mais segurança",
    text: "Defina preços com mais critério, clareza e confiança para proteger sua margem.",
  },
  {
    icon: Layers,
    tag: "Padrão",
    title: "Base essencial para padronização",
    text: "Organize processos com fichas técnicas mais inteligentes e mais consistência operacional.",
  },
  {
    icon: Scissors,
    tag: "Rendimento",
    title: "Controle de beneficiamento",
    text: "Acompanhe rendimentos, perdas e transformações dos insumos com mais precisão.",
  },
  {
    icon: PackageMinus,
    tag: "Desperdício",
    title: "Controle de perdas",
    text: "Identifique desperdícios com mais clareza e reduza impactos no resultado da operação.",
  },
  {
    icon: Megaphone,
    tag: "Marketing",
    title: "Dados para Marketing Estratégico",
    text: "Direcione suas campanhas para os produtos de maior desempenho e tome decisões de marketing com mais inteligência.",
  },
  {
    icon: PiggyBank,
    tag: "Lucro",
    title: "Planeje o seu Lucro Líquido",
    text: "Tenha mais clareza para projetar resultado, ajustar rotas e tomar decisões com foco no lucro da operação.",
  },
  {
    icon: FileX2,
    tag: "Ruptura",
    title: "Chega de Planilhas",
    text: "Centralize informações da operação em uma aplicação mais clara, mais inteligente e muito mais prática para decidir.",
    accent: "red",
  },
];

/* ── Tokens de cor ────────────────────────────────── */
const cyan = {
  solid: "hsl(25 95% 55%)",
  tag: "hsl(35 90% 60%)",
  tagBg: "hsl(25 95% 55% / 0.08)",
  iconBg: "hsl(25 95% 55% / 0.10)",
  border: "hsl(25 95% 55% / 0.4)",
  shadow:
    "0 4px 15px -3px hsl(25 95% 55% / 0.15)",
  line: "linear-gradient(90deg, transparent, hsl(25 95% 55% / 0.6), transparent)",
};

const red = {
  solid: "hsl(0 60% 55%)",
  tag: "hsl(0 55% 70%)",
  tagBg: "hsl(0 50% 50% / 0.10)",
  iconBg: "hsl(0 45% 45% / 0.14)",
  border: "hsl(0 50% 45% / 0.4)",
  shadow:
    "0 4px 15px -3px hsl(0 50% 45% / 0.15)",
  line: "linear-gradient(90deg, transparent, hsl(0 50% 50% / 0.5), transparent)",
  bg: "linear-gradient(160deg, hsl(0 30% 12% / 0.75) 0%, hsl(0 25% 9% / 0.55) 100%)",
  borderIdle: "hsl(0 30% 22% / 0.35)",
};

const defaultBg =
  "linear-gradient(160deg, hsl(210 20% 10% / 0.65) 0%, hsl(210 20% 7% / 0.45) 100%)";
const defaultBorder = "hsl(210 15% 20% / 0.3)";

/* ── Componente ──────────────────────────────────── */
const BenefitsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Ambient glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(25 95% 55% / 0.04), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(25 95% 55% / 0.015) 1px, transparent 1px), linear-gradient(90deg, hsl(25 95% 55% / 0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10">
        {/* ── Header ─────────────────────────────── */}
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          {/* Eyebrow */}
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase mb-6 px-5 py-2 rounded-full border"
            style={{
              color: cyan.solid,
              borderColor: "hsl(25 95% 55% / 0.25)",
              background: "hsl(25 95% 55% / 0.06)",
            }}
          >
            Recursos da aplicação
          </span>

          {/* Headline */}
          <h2 className="headline-lg max-w-4xl mx-auto !leading-[1.15] text-balance">
            Mais inteligência para sua operação.{" "}
            <br className="hidden md:block" />
            <span className="glow-text-warm">
              Mais clareza para sua margem.
            </span>{" "}
            <br className="hidden md:block" />
            Mais controle sobre o lucro líquido.
          </h2>

          {/* Subheadline */}
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mt-5 leading-relaxed">
            Funcionalidades pensadas para ajudar sua operação a entender
            custos, proteger margem, planejar melhor o lucro e tomar decisões
            mais inteligentes no dia a dia.
          </p>

          {/* Decorative line below header */}
          <div className="flex justify-center mt-8">
            <div
              className="w-32 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(25 95% 55% / 0.4), transparent)",
              }}
            />
          </div>
        </AnimatedSection>

        {/* ── Grid de cards ──────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((b, i) => {
            const isRed = b.accent === "red";
            const palette = isRed ? red : cyan;

            return (
              <AnimatedCard key={b.title} delay={i * 0.06}>
                <div
                  className="relative p-7 lg:p-8 h-full rounded-2xl border transition-all duration-300 group overflow-hidden cursor-default"
                  style={{
                    background: isRed ? red.bg : defaultBg,
                    borderColor: isRed ? red.borderIdle : defaultBorder,
                    backdropFilter: "blur(14px)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = palette.border;
                    el.style.boxShadow = palette.shadow;
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = isRed
                      ? red.borderIdle
                      : defaultBorder;
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: palette.line }}
                  />

                  {/* Corner ambient glow */}
                  <div
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${
                        isRed
                          ? "hsl(0 50% 50% / 0.07)"
                          : "hsl(25 95% 55% / 0.07)"
                      }, transparent 70%)`,
                    }}
                  />

                  {/* Bottom-left ambient glow */}
                  <div
                    className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${
                        isRed
                          ? "hsl(0 50% 50% / 0.04)"
                          : "hsl(25 95% 55% / 0.04)"
                      }, transparent 70%)`,
                    }}
                  />

                  {/* Tag + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-md"
                      style={{
                        color: palette.tag,
                        background: palette.tagBg,
                      }}
                    >
                      {b.tag}
                    </span>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: palette.iconBg }}
                    >
                      <b.icon
                        className="w-[18px] h-[18px] transition-colors duration-300"
                        style={{ color: palette.solid }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2.5 tracking-tight leading-snug">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.text}
                  </p>

                  {/* Bottom decorative dot */}
                  <div className="flex items-center gap-1.5 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: palette.solid,
                        boxShadow: `0 0 3px ${palette.solid}`,
                      }}
                    />
                    <div
                      className="w-6 h-px"
                      style={{ background: `${palette.solid}40` }}
                    />
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
