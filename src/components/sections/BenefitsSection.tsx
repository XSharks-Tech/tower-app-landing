import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { BarChart3, TrendingUp, Target, Layers, Scissors, PackageMinus, Scale } from "lucide-react";

const benefits = [
  { icon: BarChart3, title: "Entenda o Real CMV", text: "Visão detalhada do custo real de cada produto da sua operação." },
  { icon: TrendingUp, title: "Veja o seu Real Lucro", text: "Acompanhe a margem real e saiba onde está o seu resultado." },
  { icon: Target, title: "Precificação com mais segurança", text: "Políticas claras para definir preço com método e confiança." },
  { icon: Layers, title: "Base essencial para padronização", text: "Organize processos com fichas técnicas inteligentes." },
  { icon: Scissors, title: "Controle de beneficiamento", text: "Acompanhe rendimentos e transformações de insumos." },
  { icon: PackageMinus, title: "Controle de perdas", text: "Identifique e reduza desperdícios na operação." },
  { icon: Scale, title: "Controle de porcionamento", text: "Garanta consistência e precisão em cada porção." },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-glow-center relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="headline-lg max-w-3xl mx-auto">
            Tudo o que você precisa para precificar com mais clareza e{" "}
            <span className="glow-text">controlar melhor o resultado</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((b, i) => (
            <AnimatedCard
              key={b.title}
              delay={i * 0.08}
              className={i === 6 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div className="glass-card-hover p-6 lg:p-8 h-full group">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--glow-cyan)/0.1)] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-[hsl(var(--glow-cyan)/0.2)]">
                  <b.icon className="w-5 h-5 text-glow-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
