import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import mockupDashboard from "@/assets/mockup-dashboard.png";
import mockupFichas from "@/assets/mockup-fichas.png";
import { LayoutDashboard, FileSpreadsheet, Tag, Settings, Bot } from "lucide-react";

const features = [
  { icon: LayoutDashboard, label: "Dashboard Financeiro" },
  { icon: FileSpreadsheet, label: "Fichas Técnicas" },
  { icon: Tag, label: "Políticas de Precificação" },
  { icon: Settings, label: "Controle Operacional" },
  { icon: Bot, label: "Bot AI Integrado" },
];

const InsideSection = () => {
  return (
    <section className="section-padding bg-grid relative">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="headline-lg mb-5">
            Uma aplicação criada para quem quer{" "}
            <span className="glow-text">operar em outro nível</span>
          </h2>
          <p className="subtitle mx-auto">
            Interface moderna, visão clara e recursos pensados para transformar complexidade em clareza.
          </p>
        </AnimatedSection>

        {/* Feature pills */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-14">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground">
              <f.icon className="w-4 h-4 text-glow-cyan" />
              {f.label}
            </div>
          ))}
        </AnimatedSection>

        {/* Mockups */}
        <div className="space-y-8">
          <AnimatedCard>
            <div className="glass-card-hover p-2 md:p-3 rounded-2xl">
              <img
                src={mockupDashboard}
                alt="Dashboard financeiro da Tower App"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.15}>
            <div className="glass-card-hover p-2 md:p-3 rounded-2xl">
              <img
                src={mockupFichas}
                alt="Fichas técnicas da Tower App"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default InsideSection;
