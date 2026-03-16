import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Database, FileText, GitBranch, Shield } from "lucide-react";

const pillars = [
  { icon: Database, label: "Produtos & Insumos" },
  { icon: FileText, label: "Fichas Técnicas" },
  { icon: GitBranch, label: "Processos & Rendimentos" },
  { icon: Shield, label: "Controle & Desempenho" },
];

const BaseSection = () => {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="headline-lg mb-5">
            Sua <span className="glow-text">Base Essencial</span> para padronização e controle
          </h2>
          <p className="subtitle mx-auto">
            Organize produtos, insumos e processos com mais clareza para acompanhar porcionamento, beneficiamento, perdas e desempenho com muito mais segurança.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <AnimatedCard key={p.label} delay={i * 0.1}>
              <div className="glass-card-hover p-6 text-center group relative overflow-hidden">
                {/* Subtle top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--glow-cyan)/0.4)] to-transparent rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--glow-cyan)/0.08)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--glow-cyan)/0.15)] transition-colors duration-300">
                  <p.icon className="w-6 h-6 text-glow-cyan" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{p.label}</h3>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Connecting line visual */}
        <AnimatedSection delay={0.3} className="hidden lg:flex justify-center mt-8">
          <div className="flex items-center gap-0">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-24 h-px bg-gradient-to-r from-[hsl(var(--glow-cyan)/0.3)] to-[hsl(var(--glow-violet)/0.3)]" />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BaseSection;
