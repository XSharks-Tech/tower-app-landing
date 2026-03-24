import { AnimatedSection } from "@/components/AnimatedSection";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { LayoutDashboard, FileSpreadsheet, Tag, Settings, Bot } from "lucide-react";

const MOCKUP_DASHBOARD =
  "https://estrategos.online/wp-content/uploads/2026/02/pagina-de-dashboard-scaled.png";
const MOCKUP_DASHBOARD_2 =
  "https://estrategos.online/wp-content/uploads/2026/02/tower.estrategos.online_dashboard-3-scaled.png";
const MOCKUP_APRENDIZADO =
  "https://estrategos.online/wp-content/uploads/2026/03/pagina-de-aprendizado.png";

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

        {/* Mockups — Desktop browser frames */}
        <div className="space-y-10">
          <DeviceMockup
            src={MOCKUP_DASHBOARD}
            alt="Dashboard financeiro da Tower App — visão geral do desempenho"
            variant="desktop"
          />
          <DeviceMockup
            src={MOCKUP_DASHBOARD_2}
            alt="Dashboard de controle operacional da Tower App"
            variant="desktop"
            delay={0.15}
          />
          <DeviceMockup
            src={MOCKUP_APRENDIZADO}
            alt="Página de aprendizado — tutoriais e treinamento da Tower App"
            variant="floating"
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
};

export default InsideSection;
