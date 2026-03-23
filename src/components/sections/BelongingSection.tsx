import { AnimatedSection } from "@/components/AnimatedSection";

const BelongingSection = () => {
  return (
    <section className="section-padding bg-grid relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow-bottom pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="headline-lg mb-6">
            Feita para quem quer estar{" "}
            <span className="glow-text">à frente do mercado</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A Tower App foi criada para negócios e profissionais que entenderam que o futuro da gestão em A&B exige mais clareza, mais inteligência e mais controle sobre o que realmente importa: <span className="text-foreground font-medium">resultado.</span>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BelongingSection;
