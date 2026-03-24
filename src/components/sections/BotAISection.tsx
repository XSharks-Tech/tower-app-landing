import { AnimatedSection } from "@/components/AnimatedSection";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { Sparkles } from "lucide-react";

const MOCKUP_BOT_AI =
  "https://estrategos.online/wp-content/uploads/2026/03/pagina-Bot-AI.png";

const BotAISection = () => {
  return (
    <section className="section-padding bg-glow-center bg-grid relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 badge-glow mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Bot AI
            </div>
            <h2 className="headline-lg mb-5">
              Mais velocidade. Mais inteligência.{" "}
              <span className="glow-text">Menos atrito operacional.</span>
            </h2>
            <p className="subtitle">
              O Bot AI acelera sua base, apoia o cadastro e moderniza a experiência de uso com mais praticidade desde o início.
            </p>
          </AnimatedSection>

          {/* Image — browser mockup */}
          <DeviceMockup
            src={MOCKUP_BOT_AI}
            alt="Bot AI da Tower App — assistente inteligente integrado"
            variant="desktop"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
};

export default BotAISection;
