import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import mockupBotAI from "@/assets/mockup-bot-ai.png";
import { Sparkles } from "lucide-react";

const BotAISection = () => {
  return (
    <section className="section-padding bg-glow-center relative">
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

          {/* Image */}
          <AnimatedCard delay={0.15}>
            <div className="glass-card-hover p-3 rounded-2xl relative">
              <img
                src={mockupBotAI}
                alt="Bot AI da Tower App"
                className="w-full rounded-xl"
                loading="lazy"
              />
              {/* Corner glow */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[radial-gradient(ellipse,hsl(var(--glow-violet)/0.15),transparent_70%)] pointer-events-none" />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default BotAISection;
