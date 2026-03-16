import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import photoExpert from "@/assets/photo-expert.png";

const stats = [
  { value: "150+", label: "negócios impactados" },
  { value: "10+", label: "anos de experiência" },
  { value: "Brasil", label: "diferentes regiões" },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimatedCard>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="glass-card-hover p-2 rounded-2xl">
                <img
                  src={photoExpert}
                  alt="Lucas Estrategos"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
              {/* Glow behind */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-[radial-gradient(ellipse,hsl(var(--glow-cyan)/0.1),transparent_70%)] pointer-events-none" />
            </div>
          </AnimatedCard>

          {/* Text */}
          <AnimatedSection delay={0.1}>
            <h2 className="headline-lg mb-5">
              Um método construído <span className="glow-text">na prática</span>
            </h2>
            <p className="subtitle mb-8">
              Lucas Estrategos já impactou mais de 150 negócios em diferentes regiões do Brasil com uma visão orientada a desempenho, margem e lucro.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 px-6 text-center">
                  <div className="text-2xl font-bold text-glow-cyan">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
