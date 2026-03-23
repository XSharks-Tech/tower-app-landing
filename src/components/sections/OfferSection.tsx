import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { Check, Sparkles } from "lucide-react";

const items = [
  "Fichas Técnicas de Desempenho",
  "Dashboard financeiro",
  "Políticas de precificação",
  "Controle operacional essencial",
  "Bot AI",
];

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-glow-center bg-grid relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="badge-glow mb-6 inline-flex">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Oferta Exclusiva de Lançamento
          </span>
          <h2 className="headline-lg mt-6">
            Plano Essencial
          </h2>
        </AnimatedSection>

        <AnimatedCard className="max-w-lg mx-auto">
          <div className="glass-card p-8 md:p-10 text-center relative overflow-hidden border-[hsl(var(--glow-cyan)/0.3)] shadow-[0_0_60px_-15px_hsl(var(--glow-cyan)/0.15)]">
            {/* Top glow bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-glow-cyan to-transparent rounded-full" />

            {/* Price */}
            <div className="mb-2">
              <span className="text-5xl md:text-6xl font-extrabold glow-text">R$ 149</span>
              <span className="text-muted-foreground text-lg">/mês</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Comece agora com a Tower App e tenha acesso à base essencial para padronização, controle e precificação com mais clareza.
            </p>

            {/* Items */}
            <div className="space-y-3 mb-10 text-left max-w-xs mx-auto">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[hsl(var(--glow-cyan)/0.15)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-glow-cyan" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#" className="cta-primary w-full block text-center">
              Quero acessar agora
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default OfferSection;
