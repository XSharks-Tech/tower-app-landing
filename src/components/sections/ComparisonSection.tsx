import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Check, Minus, X } from "lucide-react";

const criteria = [
  { label: "Organização da base", sheet: "partial", trad: "yes", tower: "yes" },
  { label: "Controle de estoque", sheet: "partial", trad: "yes", tower: "yes" },
  { label: "Visão de CMV", sheet: "partial", trad: "partial", tower: "yes" },
  { label: "Clareza da margem real", sheet: "no", trad: "partial", tower: "yes" },
  { label: "Inteligência sobre produtos", sheet: "no", trad: "no", tower: "yes" },
  { label: "Desempenho por categoria", sheet: "no", trad: "no", tower: "yes" },
  { label: "Impacto do mix no resultado", sheet: "no", trad: "no", tower: "yes" },
  { label: "Precificação com método", sheet: "no", trad: "partial", tower: "yes" },
  { label: "Experiência visual moderna", sheet: "no", trad: "no", tower: "yes" },
  { label: "Velocidade de operação", sheet: "no", trad: "partial", tower: "yes" },
  { label: "Inteligência artificial", sheet: "no", trad: "no", tower: "yes" },
  { label: "Foco em lucro", sheet: "no", trad: "no", tower: "yes" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "yes") return <Check className="w-4 h-4 text-glow-cyan" />;
  if (status === "partial") return <Minus className="w-4 h-4 text-muted-foreground" />;
  return <X className="w-4 h-4 text-muted-foreground/40" />;
};

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-glow-center relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="headline-lg mb-5 max-w-3xl mx-auto">
            Nem planilha. Nem só controle.{" "}
            <span className="glow-text">A evolução está na inteligência.</span>
          </h2>
          <p className="subtitle mx-auto">
            Compare como o mercado costuma operar hoje e o que muda quando a gestão passa a enxergar o que realmente importa: desempenho e lucro.
          </p>
        </AnimatedSection>

        {/* Desktop table */}
        <AnimatedCard className="hidden md:block">
          <div className="glass-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-0 border-b border-[hsl(var(--glass-border)/0.2)]">
              <div className="p-5" />
              <div className="p-5 text-center text-sm font-medium text-muted-foreground">Planilhas</div>
              <div className="p-5 text-center text-sm font-medium text-muted-foreground">Sistemas Tradicionais</div>
              <div className="p-5 text-center relative">
                <div className="absolute inset-0 bg-[hsl(var(--glow-cyan)/0.04)]" />
                <span className="relative text-sm font-bold text-glow-cyan">Tower App</span>
              </div>
            </div>
            {/* Rows */}
            {criteria.map((c, i) => (
              <div
                key={c.label}
                className={`grid grid-cols-4 gap-0 ${i < criteria.length - 1 ? "border-b border-[hsl(var(--glass-border)/0.1)]" : ""}`}
              >
                <div className="p-4 pl-6 text-sm text-muted-foreground">{c.label}</div>
                <div className="p-4 flex items-center justify-center"><StatusIcon status={c.sheet} /></div>
                <div className="p-4 flex items-center justify-center"><StatusIcon status={c.trad} /></div>
                <div className="p-4 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[hsl(var(--glow-cyan)/0.02)]" />
                  <span className="relative"><StatusIcon status={c.tower} /></span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {[
            { title: "Planilhas", desc: "Organização manual, sem inteligência real", key: "sheet" as const },
            { title: "Sistemas Tradicionais", desc: "Bom controle, pouca visão de lucro", key: "trad" as const },
            { title: "Tower App", desc: "Inteligência, clareza e foco em resultado", key: "tower" as const, highlight: true },
          ].map((col, ci) => (
            <AnimatedCard key={col.title} delay={ci * 0.1}>
              <div className={`glass-card p-6 ${col.highlight ? "border-[hsl(var(--glow-cyan)/0.4)] shadow-[0_0_30px_-8px_hsl(var(--glow-cyan)/0.2)]" : ""}`}>
                <h3 className={`text-lg font-bold mb-1 ${col.highlight ? "text-glow-cyan" : "text-foreground"}`}>{col.title}</h3>
                <p className="text-xs text-muted-foreground mb-4">{col.desc}</p>
                <div className="space-y-3">
                  {criteria.map((c) => (
                    <div key={c.label} className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{c.label}</span>
                      <StatusIcon status={c[col.key]} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
