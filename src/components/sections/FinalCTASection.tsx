import { AnimatedSection } from "@/components/AnimatedSection";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-glow-bottom bg-grid relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(ellipse,hsl(25_95%_55%/0.08),transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="headline-lg mb-5 max-w-2xl mx-auto text-balance">
            Chega de planilhas.{" "}
            <span className="glow-text-warm">Veja o seu Real Lucro.</span>
          </h2>
          <p className="subtitle mx-auto mb-10">
            Entre agora na Tower App e comece a usar uma forma mais moderna, inteligente e visual de conduzir margem, controle e precificação.
          </p>
          <a href="https://tower.estrategos.online/cadastro" target="_blank" rel="noopener noreferrer" className="cta-primary">
            Quero acessar agora
          </a>
        </AnimatedSection>
      </div>

      {/* Footer minimal */}
      <div className="section-container mt-20 pt-8 border-t border-[hsl(var(--glass-border)/0.15)] text-center">
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Tower App. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
